import { useMemo } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/hooks/useAppState";
import { getStories } from "@/data/stories";
import { t } from "@/data/i18n";
import { AppShell } from "@/components/AppShell";
import { Map, Sparkles, ChevronRight, Gift } from "lucide-react";
import mooseHero from "@/assets/moose-lotta-hero2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moose Lotta Äventyr — magiska berättelser i Hälleforsnäs" },
      {
        name: "description",
        content:
          "En lugn nordisk äventyrsapp där barn upptäcker hemliga berättelser på riktiga platser, guidad av älgen Moose Lotta.",
      },
      { property: "og:title", content: "Moose Lotta Äventyr" },
      {
        property: "og:description",
        content: "Upptäck hemliga berättelser i Hälleforsnäs.",
      },
    ],
  }),
  component: HomePage,
});

const accentMap: Record<string, string> = {
  moss: "from-moss/20 to-moss/5",
  ember: "from-ember/20 to-ember/5",
  bark: "from-bark/20 to-bark/5",
  shadow: "from-foreground/10 to-muted",
};

function HomePage() {
  const { state, activeProfile } = useAppState();
  const navigate = useNavigate();

  const allStories = useMemo(
    () => getStories({ language: state.language, ageGroup: state.ageGroup }),
    [state.language, state.ageGroup],
  );

  const totalStories = allStories.length;
  const doneCount = state.completedStoryIds.length;
  const progressPct = totalStories > 0 ? Math.round((doneCount / totalStories) * 100) : 0;

  const hasUnlockable = useMemo(
    () => allStories.some((s) => !state.completedStoryIds.includes(s.id)),
    [allStories, state.completedStoryIds],
  );

  const doneStories = useMemo(
    () => allStories.filter((s) => state.completedStoryIds.includes(s.id)),
    [allStories, state.completedStoryIds],
  );

  return (
    <AppShell>
      {/* decorative background */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[420px] overflow-hidden">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-forest-mist/60" />
        <div className="absolute top-40 -left-16 h-48 w-48 rounded-full bg-secondary/15" />
        <div className="absolute top-60 right-12 h-32 w-32 rounded-full bg-accent/8" />
      </div>

      <div className="relative">
        {/* greeting */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img src={mooseHero} alt="Moose Lotta" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-xl font-semibold leading-tight text-foreground">
                {activeProfile
                  ? state.language === "sv"
                    ? `Hej, ${activeProfile.name}!`
                    : `Hi, ${activeProfile.name}!`
                  : "Moose Lotta"}
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {hasUnlockable
                  ? t(state.language, "tagline")
                  : t(state.language, "done")}
              </p>
            </div>
          </div>
        </div>

        {/* progress card */}
        <div className="px-6">
          <div className="rounded-3xl bg-gradient-to-br from-card to-forest-mist/40 px-5 py-4 shadow-[var(--shadow-soft)] ring-1 ring-border/20">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                {t(state.language, "progress")}
              </p>
              <p className="text-xs font-semibold text-muted-foreground">
                {doneCount}/{totalStories}
              </p>
            </div>
            <div className="mt-2.5 h-2 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-moss to-primary transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Gift size={13} />
              <span>
                {state.rewards.length}{" "}
                {t(state.language, "collected")}
              </span>
            </div>
          </div>
        </div>

        {/* all stories */}
        <div className="mt-6 px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
            {state.language === "sv" ? "Upptäckta äventyr" : "Discovered stories"}
          </p>
          <div className="space-y-3">
            {doneStories.map((story) => {
              const isDone = state.completedStoryIds.includes(story.id);
              return (
                <button
                  key={story.id}
                  onClick={() => navigate({ to: "/story/$storyId", params: { storyId: story.id } })}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br ${accentMap[story.accent] ?? "from-card to-card"} p-4 text-left shadow-[var(--shadow-soft)] ring-1 ring-border/20 transition-all active:scale-[0.99]`}
                >
                  <span className="text-2xl">{story.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-display text-sm font-semibold truncate ${isDone ? "text-muted-foreground/60" : "text-foreground"}`}>
                      {story.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground/70 truncate">
                      {story.subtitle}
                    </p>
                  </div>
                  {isDone ? (
                    <span className="shrink-0 rounded-full bg-moss/15 px-2.5 py-1 text-[11px] font-semibold text-moss">
                      {t(state.language, "done")}
                    </span>
                  ) : (
                    <ChevronRight size={16} className="shrink-0 text-muted-foreground/30 transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* quick actions */}
        <div className="mt-8 px-6 pb-6">
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/map"
              className="flex flex-col items-center gap-2 rounded-2xl bg-card py-5 shadow-[var(--shadow-soft)] ring-1 ring-border/20 transition-all hover:ring-primary/20 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-forest-mist to-moss/10">
                <Map size={20} className="text-primary" />
              </div>
              <p className="text-xs font-semibold text-foreground">
                {t(state.language, "map")}
              </p>
            </Link>
            <Link
              to="/rewards"
              className="flex flex-col items-center gap-2 rounded-2xl bg-card py-5 shadow-[var(--shadow-soft)] ring-1 ring-border/20 transition-all hover:ring-accent/30 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5">
                <Sparkles size={20} className="text-accent-foreground" />
              </div>
              <p className="text-xs font-semibold text-foreground">
                {t(state.language, "rewards")}
              </p>
            </Link>
          </div>
        </div>

        {/* bottom forest decoration */}
        <div className="pointer-events-none fixed bottom-16 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute -bottom-8 left-1/4 h-20 w-20 rounded-full bg-forest-mist/30" />
          <div className="absolute -bottom-4 right-1/3 h-16 w-16 rounded-full bg-secondary/15" />
        </div>
      </div>
    </AppShell>
  );
}
