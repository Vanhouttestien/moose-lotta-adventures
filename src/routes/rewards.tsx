import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useAppState } from "@/hooks/useAppState";
import { useGeolocation, distanceMeters } from "@/hooks/useGeolocation";
import { getStories, type Story } from "@/data/stories";
import { t } from "@/i18n";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Skatter — Moose Lotta Äventyr" },
      {
        name: "description",
        content: "Dina samlade skatter och belöningar från Moose Lottas äventyr.",
      },
    ],
  }),
  component: RewardsPage,
});

function RewardsPage() {
  const { state, currentVillageId } = useAppState();
  const { position, status, start } = useGeolocation();

  useEffect(() => {
    start();
  }, [start]);

  const [all, setAll] = useState<Story[]>([]);
  useEffect(() => {
    getStories({
      language: state.language,
      ageGroup: state.ageGroup,
      villageId: currentVillageId,
    }).then(setAll);
  }, [state.language, state.ageGroup, currentVillageId]);

  const total = all.length;
  const done = state.completedStoryIds.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  const earned = useMemo(
    () => all.filter((s) => state.completedStoryIds.includes(s.id)),
    [all, state.completedStoryIds],
  );

  const nearbyCount = useMemo(() => {
    if (!position) return null;
    return all.filter((s) => {
      if (state.completedStoryIds.includes(s.id)) return false;
      return distanceMeters(position, s.location) <= 10000;
    }).length;
  }, [all, position, state.completedStoryIds]);

  return (
    <AppShell>
      <header className="px-6 pt-10 pb-6 text-center">
        <p className="text-4xl">✨</p>
        <h1 className="mt-2 font-display text-3xl text-forest-deep">
          {t(state.language, "ui.rewards")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {done} {t(state.language, "ui.collected")}
        </p>
        {nearbyCount !== null && nearbyCount > 0 && (
          <p className="mt-2 text-xs text-muted-foreground/70">
            🫎{" "}
            {state.language === "sv"
              ? `${nearbyCount} fler äventyr inom 10 km`
              : `${nearbyCount} more adventures within 10 km`}
          </p>
        )}
      </header>

      <div className="px-6">
        <div className="rounded-3xl bg-card p-5 shadow-[var(--shadow-soft)]">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold text-foreground">
              {t(state.language, "ui.progress")}
            </span>
            <span className="font-display text-xl text-primary">{pct}%</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {earned.length > 0 && (
        <div className="grid grid-cols-2 gap-3 px-6 pt-6">
          {earned.map((s) => (
            <div
              key={s.id}
              className="rounded-3xl bg-card p-4 text-center shadow-[var(--shadow-soft)] transition-all"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/40 text-3xl">
                ✨
              </div>
              <p className="mt-3 font-display text-sm text-foreground">{s.reward}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{s.location.label}</p>
            </div>
          ))}
        </div>
      )}

      {done === 0 && (
        <div className="px-6 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t(state.language, "ui.noRewards")}</p>
          <Link
            to="/map"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cozy)]"
          >
            <Sparkles className="h-4 w-4" /> {t(state.language, "ui.map")}
          </Link>
        </div>
      )}
    </AppShell>
  );
}
