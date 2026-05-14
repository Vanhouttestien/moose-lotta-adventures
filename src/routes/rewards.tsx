import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useAppState } from "@/hooks/useAppState";
import { getStories } from "@/data/stories";
import { t } from "@/data/i18n";
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
  const { state } = useAppState();
  const all = getStories({ language: state.language, ageGroup: state.ageGroup });
  const total = all.length;
  const done = state.completedStoryIds.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <AppShell>
      <header className="px-6 pt-10 pb-6 text-center">
        <p className="text-4xl">✨</p>
        <h1 className="mt-2 font-display text-3xl text-forest-deep">
          {t(state.language, "rewards")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {done} {t(state.language, "collected")}
        </p>
      </header>

      <div className="px-6">
        <div className="rounded-3xl bg-card p-5 shadow-[var(--shadow-soft)]">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold text-foreground">
              {t(state.language, "progress")}
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

      <div className="grid grid-cols-2 gap-3 px-6 pt-6">
        {all.map((s) => {
          const earned = state.completedStoryIds.includes(s.id);
          return (
            <div
              key={s.id}
              className={`rounded-3xl p-4 text-center shadow-[var(--shadow-soft)] transition-all ${
                earned ? "bg-card" : "bg-card/60 opacity-60"
              }`}
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
                  earned ? "bg-accent/40" : "bg-muted"
                }`}
              >
                {earned ? "✨" : "🔒"}
              </div>
              <p className="mt-3 font-display text-sm text-foreground">{s.reward}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{s.location.label}</p>
            </div>
          );
        })}
      </div>

      {done === 0 && (
        <div className="px-6 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t(state.language, "noRewards")}</p>
          <Link
            to="/map"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cozy)]"
          >
            <Sparkles className="h-4 w-4" /> {t(state.language, "map")}
          </Link>
        </div>
      )}
    </AppShell>
  );
}
