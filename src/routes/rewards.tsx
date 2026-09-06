import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { StoryImage } from "@/components/StoryImage";
import { useAppState } from "@/hooks/useAppState";
import { getStories, villages, type Story } from "@/data/stories";
import { t } from "@/i18n";
import { Sparkles } from "lucide-react";
import headImg from "@/assets/head.png";

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

export function RewardsPage() {
  const { state, currentVillageId } = useAppState();

  const [all, setAll] = useState<Story[]>([]);
  useEffect(() => {
    getStories({
      language: state.language,
      ageGroup: state.ageGroup,
      villageId: currentVillageId,
    }).then(setAll);
  }, [state.language, state.ageGroup, currentVillageId]);

  const currentVillage = villages.find((v) => v.id === currentVillageId);

  const total = all.length;

  const earned = useMemo(
    () => all.filter((s) => state.completedStoryIds.includes(s.id)),
    [all, state.completedStoryIds],
  );

  const doneHere = earned.length;
  const pct = total === 0 ? 0 : Math.round((doneHere / total) * 100);

  const remainingCount = useMemo(
    () => all.filter((s) => !state.completedStoryIds.includes(s.id)).length,
    [all, state.completedStoryIds],
  );

  return (
    <AppShell>
      <header className="px-6 pt-10 pb-6 text-center">
        <p className="text-4xl">✨</p>
        <h1 className="mt-2 font-display text-3xl text-forest-deep">
          {t(state.language, "ui.rewards")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {doneHere} {t(state.language, "ui.collected")}
        </p>
        {remainingCount > 0 && (
          <p className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground/70">
            <img src={headImg} alt="" aria-hidden className="h-4 w-auto opacity-80" />
            {state.language === "sv"
              ? `${remainingCount} fler äventyr i ${currentVillage?.name ?? "byn"}`
              : `${remainingCount} more adventures in ${currentVillage?.name ?? "the village"}`}
          </p>
        )}
      </header>

      <div className="px-6">
        <div className="rounded-3xl bg-card p-5 shadow-[var(--shadow-soft)]">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
              {t(state.language, "ui.progress")}
            </span>
            <span className="text-xs font-semibold text-muted-foreground">
              {doneHere}/{total} · {pct}%
            </span>
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
          {earned.map((s) => {
            const accentVar =
              s.accent === "moss"
                ? "var(--moss)"
                : s.accent === "ember"
                  ? "var(--ember)"
                  : s.accent === "bark"
                    ? "var(--bark)"
                    : s.accent === "rust"
                      ? "var(--accent)"
                      : s.accent === "water"
                        ? "var(--forest-mist)"
                        : "var(--primary)";
            return (
              <div
                key={s.id}
                className="rounded-3xl p-4 text-center shadow-[var(--shadow-soft)] transition-all"
                style={{
                  background: `color-mix(in oklab, ${accentVar} 12%, var(--card))`,
                }}
              >
                <StoryImage
                  imageUrl={s.image}
                  emoji={s.emoji}
                  alt={s.reward}
                  variant="reward"
                  accent={accentVar}
                />
                <p className="mt-3 font-display text-sm text-foreground">{s.reward}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.location.label}</p>
              </div>
            );
          })}
        </div>
      )}

      {doneHere === 0 && (
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
