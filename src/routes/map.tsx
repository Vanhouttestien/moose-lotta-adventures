import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MapView } from "@/components/MapView";
import { StoryCard } from "@/components/StoryCard";
import { GpsPermissionCard } from "@/components/GpsPermissionCard";
import { UnlockPopup } from "@/components/UnlockPopup";
import { useAppState } from "@/hooks/useAppState";
import { distanceMeters, bearing, compassDirection, useGeolocation } from "@/hooks/useGeolocation";
import { useSmoothPosition } from "@/hooks/useSmoothPosition";
import { getStoryStatuses } from "@/engine/storyEngine";
import { getStories, villages, type Story } from "@/data/stories";
import { t } from "@/i18n";

export const Route = createFileRoute("/map")({
  component: MapPage,
});

function MapPage() {
  const { state, setCurrentVillageId, updateProfileData } = useAppState();
  const { status, position: rawPosition, start } = useGeolocation();
  const position = useSmoothPosition(rawPosition);

  const village = useMemo(() => {
    if (!position) return villages[0];
    let closest = villages[0];
    let closestDist = distanceMeters(position, closest.center);
    for (let i = 1; i < villages.length; i++) {
      const d = distanceMeters(position, villages[i].center);
      if (d < closestDist) {
        closest = villages[i];
        closestDist = d;
      }
    }
    return closest;
  }, [position]);

  useEffect(() => {
    setCurrentVillageId(village.id);
  }, [village.id, setCurrentVillageId]);

  useEffect(() => {
    if (state.gpsPermissionGranted) start();
  }, [start, state.gpsPermissionGranted]);

  const [stories, setStories] = useState<Story[]>([]);
  useEffect(() => {
    getStories({ language: state.language, ageGroup: state.ageGroup, villageId: village.id }).then(
      setStories,
    );
  }, [state.language, state.ageGroup, village.id]);

  const statuses = useMemo(
    () => getStoryStatuses(stories, position, state.completedStoryIds),
    [stories, position, state.completedStoryIds],
  );

  // Nearest hidden story (for directional empty-state hint)
  const nearestHiddenDir = useMemo(() => {
    if (!position) return null;
    const hidden = statuses
      .filter((s) => s.tier === "hidden" && s.distance != null)
      .sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
    if (hidden.length === 0) return null;
    const target = hidden[0];
    const dir = compassDirection(bearing(position, target.story.location));
    const dirs: Record<string, string> = {
      n: t(state.language, "ui.compass.n" as never),
      ne: t(state.language, "ui.compass.ne" as never),
      e: t(state.language, "ui.compass.e" as never),
      se: t(state.language, "ui.compass.se" as never),
      s: t(state.language, "ui.compass.s" as never),
      sw: t(state.language, "ui.compass.sw" as never),
      w: t(state.language, "ui.compass.w" as never),
      nw: t(state.language, "ui.compass.nw" as never),
    };
    return t(state.language, "ui.compass.hint" as never, {
      direction: dirs[dir] ?? "n",
    });
  }, [statuses, position, state.language]);

  // Discovery list: only show stories the player can sense (hint+).
  const discoverable = useMemo(
    () =>
      statuses
        .filter((s) => s.tier !== "hidden")
        .sort((a, b) => {
          if (a.unlocked !== b.unlocked) return a.unlocked ? -1 : 1;
          if (a.completed !== b.completed) return a.completed ? 1 : -1;
          if (a.distance != null && b.distance != null) return a.distance - b.distance;
          return 0;
        }),
    [statuses],
  );

  // Auto-unlock popup: fire once per story when it transitions to unlocked.
  const [unlockedStory, setUnlockedStory] = useState<Story | null>(null);
  const seenUnlockedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const fresh = statuses.find(
      (s) => s.unlocked && !s.completed && !seenUnlockedRef.current.has(s.story.id),
    );
    if (fresh) {
      seenUnlockedRef.current.add(fresh.story.id);
      setUnlockedStory(fresh.story);
    }
  }, [statuses]);

  return (
    <AppShell>
      <header className="px-6 pt-8 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">{village.name}</p>
        <h1 className="mt-1 font-display text-3xl text-forest-deep">
          {t(state.language, "ui.map")}
        </h1>
      </header>

      <div className="px-6">
        <div className="relative isolate h-[340px] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <MapView village={village} statuses={statuses} position={position} />
        </div>
      </div>

      <div className="space-y-3 px-6 pt-6">
        {(status === "idle" || status === "unavailable") && (
          <GpsPermissionCard
            status={status}
            onEnable={start}
            onGrant={() => updateProfileData({ gpsPermissionGranted: true })}
          />
        )}
        {status === "watching" && !position && (
          <p className="rounded-2xl bg-card px-4 py-3 text-center text-sm text-muted-foreground">
            {t(state.language, "gps.searching")}
          </p>
        )}

        {position && discoverable.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border bg-card/60 px-5 py-6 text-center">
            <p className="text-2xl">🌲</p>
            <p className="mt-2 font-display text-base text-forest-deep">
              {t(state.language, "story.noStories.title")}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t(state.language, "story.noStories.body")}
            </p>
            {nearestHiddenDir && (
              <p className="mt-3 text-xs font-medium text-moss">{nearestHiddenDir}</p>
            )}
          </div>
        )}

        {discoverable.map((s, i) => (
          <div
            key={s.story.id}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-fade-up"
          >
            {s.tier === "hint" ? (
              <div className="rounded-3xl border border-border bg-card/70 px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-moss">
                  {t(state.language, "story.hint.title")}
                </p>
                <p className="mt-1 font-display text-base text-forest-deep">
                  {t(state.language, "character.lotta.sense", {
                    dist: Math.round((s.distance ?? 0) / 100) * 100,
                  })}
                </p>
              </div>
            ) : (
              <StoryCard s={s} />
            )}
          </div>
        ))}

        <Link to="/" className="block pt-2 text-center text-xs text-muted-foreground">
          ← {t(state.language, "ui.home")}
        </Link>
      </div>

      <UnlockPopup story={unlockedStory} onClose={() => setUnlockedStory(null)} />
    </AppShell>
  );
}
