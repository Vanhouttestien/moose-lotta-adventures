import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MapView } from "@/components/MapView";
import { StoryCard } from "@/components/StoryCard";
import { GpsPermissionCard } from "@/components/GpsPermissionCard";
import { useAppState } from "@/hooks/useAppState";
import { useGeolocation } from "@/hooks/useGeolocation";
import { getStoryStatuses } from "@/engine/storyEngine";
import { getStories, villages } from "@/data/stories";
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
  const { status, position } = useGeolocation(gpsEnabled);
  const village = villages[0];

  const stories = useMemo(
    () => getStories({ language: state.language, villageId: village.id }),
    [state.language, village.id],
  );

  const statuses = useMemo(
    () => getStoryStatuses(stories, position, state.completedStoryIds),
    [stories, position, state.completedStoryIds],
  );

  const sorted = [...statuses].sort((a, b) => {
    if (a.unlocked !== b.unlocked) return a.unlocked ? -1 : 1;
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    if (a.distance != null && b.distance != null) return a.distance - b.distance;
    return 0;
  });

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
        <div className="h-[260px] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <MapView village={village} statuses={statuses} position={position} />
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

        {sorted.map((s, i) => (
          <div
            key={s.story.id}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-fade-up"
          >
            <StoryCard s={s} />
          </div>
        ))}

        <Link to="/" className="block pt-2 text-center text-xs text-muted-foreground">
          ← {t(state.language, "home")}
        </Link>
      </div>
    </AppShell>
  );
}
