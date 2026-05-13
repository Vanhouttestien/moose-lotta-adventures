import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MapView } from "@/components/MapView";
import { StoryCard } from "@/components/StoryCard";
import { GpsPermissionCard } from "@/components/GpsPermissionCard";
import { Compass } from "@/components/Compass";
import { UnlockPopup } from "@/components/UnlockPopup";
import { useAppState } from "@/hooks/useAppState";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useSmoothPosition } from "@/hooks/useSmoothPosition";
import { bearingDeg, useDeviceHeading } from "@/hooks/useCompass";
import { getStoryStatuses } from "@/engine/storyEngine";
import { getStories, villages, type Story } from "@/data/stories";
import { t } from "@/data/i18n";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Karta — Moose Lotta Äventyr" },
      {
        name: "description",
        content: "Hitta hemliga äventyr i Hälleforsnäs på den magiska kartan.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const { state } = useAppState();
  const [gpsEnabled, setGpsEnabled] = useState(true);
  const { status, position: rawPosition } = useGeolocation(gpsEnabled);
  const position = useSmoothPosition(rawPosition);
  const heading = useDeviceHeading();
  const village = villages[0];

  const stories = useMemo(
    () => getStories({ language: state.language, villageId: village.id }),
    [state.language, village.id],
  );

  const statuses = useMemo(
    () => getStoryStatuses(stories, position, state.completedStoryIds),
    [stories, position, state.completedStoryIds],
  );

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

  // Nearest unlockable target → compass.
  const nearest = useMemo(() => {
    const candidates = statuses
      .filter((s) => !s.completed && s.distance != null)
      .sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
    return candidates[0] ?? null;
  }, [statuses]);

  const compassBearing = useMemo(() => {
    if (!position || !nearest) return null;
    return bearingDeg(position, nearest.story.location);
  }, [position, nearest]);

  // Auto-unlock popup: fire once per story when it transitions to unlocked.
  const [unlockedStory, setUnlockedStory] = useState<Story | null>(null);
  const seenUnlockedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const fresh = statuses.find(
      (s) =>
        s.unlocked &&
        !s.completed &&
        !seenUnlockedRef.current.has(s.story.id),
    );
    if (fresh) {
      seenUnlockedRef.current.add(fresh.story.id);
      setUnlockedStory(fresh.story);
    }
  }, [statuses]);

  return (
    <AppShell>
      <header className="px-6 pt-8 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
          {village.name}
        </p>
        <h1 className="mt-1 font-display text-3xl text-forest-deep">
          {t(state.language, "map")}
        </h1>
      </header>

      <div className="px-6">
        <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <MapView village={village} statuses={statuses} position={position} />
          {/* Floating compass overlay */}
          <div className="pointer-events-none absolute left-3 right-3 top-3 flex justify-center">
            <Compass
              bearing={compassBearing}
              heading={heading}
              distance={nearest?.distance ?? null}
              label={nearest?.story.title ?? null}
              warm={(nearest?.distance ?? Infinity) <= 100}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 px-6 pt-6">
        {(status === "idle" || status === "denied" || status === "unavailable") && (
          <GpsPermissionCard status={status} onEnable={() => setGpsEnabled(true)} />
        )}
        {status === "watching" && !position && (
          <p className="rounded-2xl bg-card px-4 py-3 text-center text-sm text-muted-foreground">
            {t(state.language, "searching")}
          </p>
        )}

        {position && discoverable.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border bg-card/60 px-5 py-6 text-center">
            <p className="text-2xl">🌲</p>
            <p className="mt-2 font-display text-base text-forest-deep">
              Inga äventyr känns härifrån
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Gå en bit till — Lotta känner äventyr inom 1 km.
            </p>
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
                  ✨ Något väntar här i närheten
                </p>
                <p className="mt-1 font-display text-base text-forest-deep">
                  Lotta känner ett äventyr ungefär{" "}
                  {Math.round((s.distance ?? 0) / 100) * 100} m bort…
                </p>
              </div>
            ) : (
              <StoryCard s={s} />
            )}
          </div>
        ))}

        <Link to="/" className="block pt-2 text-center text-xs text-muted-foreground">
          ← {t(state.language, "home")}
        </Link>
      </div>

      <UnlockPopup story={unlockedStory} onClose={() => setUnlockedStory(null)} />
    </AppShell>
  );
}
