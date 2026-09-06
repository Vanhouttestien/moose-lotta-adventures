import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/hooks/useAppState";
import { getStories, type Story } from "@/data/stories";
import { t } from "@/i18n";
import { AppShell } from "@/components/AppShell";
import { Lotta } from "@/components/Lotta";
import forestBg from "@/assets/forest_background.png";
import { Map, ChevronRight, Gift, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moose Lotta Äventyr — upptäck historien på riktiga platser" },
      {
        name: "description",
        content:
          "En äventyrsapp där barn upptäcker lokal historia på riktiga platser utomhus, guidad av älgen Moose Lotta.",
      },
      { property: "og:title", content: "Moose Lotta Äventyr" },
      {
        property: "og:description",
        content: "Upptäck historiska platser nära dig.",
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
  const { state, activeProfile, currentVillageId } = useAppState();
  const navigate = useNavigate();

  const [allStories, setAllStories] = useState<Story[]>([]);
  useEffect(() => {
    getStories({
      language: state.language,
      ageGroup: state.ageGroup,
      villageId: currentVillageId,
    }).then(setAllStories);
  }, [state.language, state.ageGroup, currentVillageId]);

  const [isWaving, setIsWaving] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // Greeting wave shortly after load, then wave again on a slow randomized cadence.
  useEffect(() => {
    const initial = window.setTimeout(() => setIsWaving(true), 900);
    return () => clearTimeout(initial);
  }, []);

  useEffect(() => {
    if (isWaving || isLeaving) return;
    const next = window.setTimeout(() => setIsWaving(true), 12000 + Math.random() * 10000);
    return () => clearTimeout(next);
  }, [isWaving, isLeaving]);

  // Leave: start walking, then switch page partway through while she keeps exiting.
  const leaveTo = (go: () => void) => {
    if (isLeaving) return;
    setIsLeaving(true);
    window.setTimeout(go, 1400);
  };

  const totalStories = allStories.length;
  const doneCount = allStories.filter((s) => state.completedStoryIds.includes(s.id)).length;
  const progressPct = totalStories > 0 ? Math.round((doneCount / totalStories) * 100) : 0;

  const hasUnlockable = allStories.some((s) => !state.completedStoryIds.includes(s.id));

  const doneStories = allStories.filter((s) => state.completedStoryIds.includes(s.id));

  return (
    <AppShell>
      <div className="relative">
        {/* greeting + large mascot */}
        <div className="flex flex-col items-center px-6 pt-0 pb-2">
          <div
            className="relative mb-0.5 transition-transform duration-[2300ms] ease-in-out"
            style={{
              transform: isLeaving
                ? "translateX(-60vw) translateY(2vh) scale(0.8)"
                : "translateX(0) translateY(0) scale(1)",
            }}
          >
            {/* warm glow at Lotta's feet, like light on the ground */}
            <div className="absolute bottom-0 left-1/2 h-8 w-32 -translate-x-1/2 rounded-[100%] bg-ember/25 blur-md" />
            <Lotta
              isWaving={isWaving}
              isWalking={isLeaving}
              waveOnHover
              onWaveComplete={() => setIsWaving(false)}
              className="w-28"
            />
          </div>
          <h1 className="font-display text-xl font-bold leading-tight text-foreground">
            {activeProfile
              ? state.language === "sv"
                ? `Hej, ${activeProfile.name}!`
                : `Hi, ${activeProfile.name}!`
              : "Moose Lotta"}
          </h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {hasUnlockable
              ? state.language === "sv"
                ? "Redo för ett äventyr?"
                : "Ready for an adventure?"
              : t(state.language, "done")}
          </p>
        </div>

        {/* merged hero card */}
        <div className="relative">
          <div className="px-5">
            <Link
              to="/map"
              onClick={(e) => {
                e.preventDefault();
                leaveTo(() => navigate({ to: "/map" }));
              }}
              aria-disabled={isLeaving}
              className="ml-bounce-press relative block overflow-hidden rounded-3xl text-center shadow-[var(--shadow-cozy)] ring-1 ring-[#B9A14B]/25 transition-all hover:ring-primary/20"
            >
              <img
                src={forestBg}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full scale-125 object-cover object-right"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-bark/40" />
              <span className="relative z-10 flex flex-col items-center gap-3 px-6 py-5 text-center">
                {/* progress bar (returning users) */}
                {doneCount > 0 && (
                  <div className="w-full rounded-2xl bg-[#FDF8EE]/60 px-4 py-3 backdrop-blur-sm">
                    <div className="flex items-baseline justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/60">
                        {t(state.language, "ui.progress")}
                      </p>
                      <p className="text-xs font-semibold text-foreground/70">
                        {doneCount}/{totalStories} · {progressPct}%
                      </p>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#D9A441] to-[#6B8F5C] transition-all"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-foreground/60">
                      <Gift size={13} />
                      <span>
                        {doneCount} {t(state.language, "ui.collected")}
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA content */}
                <div className="flex flex-col items-center gap-2.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF8EE]/70 shadow-md">
                    <Map size={24} className="text-[#6B8F5C]" />
                  </div>
                  <div className="mx-auto rounded-2xl bg-[#FDF8EE] px-4 py-2 text-center shadow-md">
                    <p className="font-display text-base font-bold text-foreground">
                      {t(state.language, "ui.goExplore")}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground/65">
                      {t(state.language, "ui.exploreSubtitle")}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-cozy)] transition-transform">
                    <Map size={18} />
                    {t(state.language, "ui.firstRun.toMap")}
                  </span>
                </div>
              </span>
            </Link>
          </div>
          {/* single decorative accent, top-right corner */}
          <div className="pointer-events-none absolute -top-3 right-3 z-10 select-none text-xl animate-float opacity-50">
            🌿
          </div>
        </div>

        {/* all stories */}
        {doneStories.length > 0 && (
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
                    onClick={() =>
                      leaveTo(() =>
                        navigate({
                          to: "/story/$storyId",
                          params: { storyId: story.id },
                        }),
                      )
                    }
                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br ${accentMap[story.accent] ?? "from-card to-card"} p-4 text-left shadow-[var(--shadow-soft)] ring-1 ring-border/20 transition-all active:scale-[0.99]`}
                  >
                    <span className="text-2xl">{story.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-display text-sm font-semibold truncate ${isDone ? "text-muted-foreground/60" : "text-foreground"}`}
                      >
                        {story.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground/70 truncate">
                        {story.subtitle}
                      </p>
                    </div>
                    {isDone ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-moss/15 px-3 py-1 text-[11px] font-semibold text-moss ring-1 ring-moss/30">
                        <CheckCircle2 size={12} />
                        {t(state.language, "ui.done")}
                      </span>
                    ) : (
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-muted-foreground/30 transition-transform group-hover:translate-x-0.5"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
