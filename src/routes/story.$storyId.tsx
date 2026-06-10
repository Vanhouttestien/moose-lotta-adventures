import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { AppShell } from "@/components/AppShell";
import { AudioPlayer } from "@/components/AudioPlayer";
import { useAppState } from "@/hooks/useAppState";
import { useGeolocation } from "@/hooks/useGeolocation";
import { getStoryStatuses } from "@/engine/storyEngine";
import { getStoryById } from "@/data/stories";
import { t } from "@/i18n";
import { CheckCircle2, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/story/$storyId")({
  loader: async ({ params }) => {
    const story = await getStoryById(params.storyId);
    if (!story) throw notFound();
    return story;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Moose Lotta Äventyr` },
          { name: "description", content: loaderData.text.slice(0, 150) },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.subtitle },
        ]
      : [],
  }),
  component: StoryPage,
  notFoundComponent: () => (
    <AppShell>
      <div className="px-6 py-16 text-center">
        <p className="text-4xl">🫎</p>
        <h1 className="mt-2 font-display text-xl">Berättelsen kunde inte hittas</h1>
        <Link to="/map" className="mt-4 inline-block text-primary underline">
          Tillbaka till kartan
        </Link>
      </div>
    </AppShell>
  ),
});

function StoryPage() {
  const story = Route.useLoaderData();
  const { state, completeStory } = useAppState();
  const navigate = useNavigate();
  const { position, status, start } = useGeolocation();

  const result = useMemo(
    () => getStoryStatuses([story], position, state.completedStoryIds),
    [story, position, state.completedStoryIds],
  );
  const storyStatus = result[0];
  const unlocked = storyStatus.unlocked;
  const distance = storyStatus.distance;
  const completed = storyStatus.completed;

  const accent = useMemo(
    () =>
      story.accent === "moss"
        ? "var(--moss)"
        : story.accent === "ember"
          ? "var(--ember)"
          : "var(--bark)",
    [story.accent],
  );

  return (
    <AppShell>
      <div
        className="relative px-6 pt-10 pb-8"
        style={{
          background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 18%, var(--background)), var(--background))`,
        }}
      >
        <Link to="/map" className="text-xs font-medium text-muted-foreground">
          ← {t(state.language, "ui.toMap")}
        </Link>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {story.location.label}
        </div>
        <h1 className="mt-2 font-display text-3xl leading-tight text-forest-deep">{story.title}</h1>
        <div
          className="mt-6 flex h-32 items-center justify-center rounded-3xl text-6xl shadow-[var(--shadow-soft)]"
          style={{ background: `color-mix(in oklab, ${accent} 25%, white)` }}
        >
          <span className={unlocked ? "animate-float" : "opacity-60"}>{story.emoji}</span>
        </div>
      </div>

      <div className="space-y-5 px-6">
        {!unlocked ? (
          <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-card p-5 text-center">
            <p className="text-sm text-muted-foreground">
              {distance != null
                ? t(state.language, "story.distance.locked", {
                    dist: Math.round(distance / 10) * 10,
                  })
                : status === "watching"
                  ? t(state.language, "gps.searching")
                  : status === "idle"
                    ? ""
                    : t(state.language, "ui.story.locked")}
            </p>
            {status === "idle" ? (
              <button
                onClick={start}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cozy)] active:scale-95"
              >
                {t(state.language, "gps.enable")}
              </button>
            ) : status !== "unavailable" ? (
              <p className="mt-2 font-display text-base text-foreground">
                {t(state.language, "character.lotta.feels")}
              </p>
            ) : null}
          </div>
        ) : (
          <div className="rounded-3xl bg-primary/10 px-4 py-3 text-center text-sm font-semibold text-primary animate-pulse-ring">
            {t(state.language, "feels")}
          </div>
        )}

        {unlocked && story.audio ? <AudioPlayer src={story.audio} label={story.title} /> : null}

        {unlocked ? (
          <article className="whitespace-pre-line rounded-3xl bg-card p-5 text-[15px] leading-relaxed text-foreground shadow-[var(--shadow-soft)]">
            {story.text}
          </article>
        ) : null}

        {unlocked ? (
          <section className="rounded-3xl bg-secondary/50 p-5">
            <h2 className="font-display text-lg text-secondary-foreground">
              🌿 {t(state.language, "ui.mission")}
            </h2>
            <ul className="mt-3 space-y-2">
              {(story.mission as string[]).map((m: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-card/70 px-3 py-3 text-sm text-foreground"
                >
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: accent, color: "white" }}
                  >
                    {i + 1}
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {unlocked ? (
          <section
            className="flex items-center gap-3 rounded-3xl p-5"
            style={{ background: `color-mix(in oklab, ${accent} 18%, white)` }}
          >
            <Sparkles className="h-7 w-7 text-accent-foreground" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t(state.language, "ui.reward")}
              </p>
              <p className="font-display text-base text-foreground">{story.reward}</p>
            </div>
            {completed && <CheckCircle2 className="h-6 w-6 text-primary" />}
          </section>
        ) : null}

        {unlocked && !completed && (
          <button
            onClick={() => completeStory(story)}
            className="w-full rounded-full bg-primary py-4 font-display text-lg font-semibold text-primary-foreground shadow-[var(--shadow-cozy)] active:scale-[0.98]"
          >
            ✨ {t(state.language, "ui.markComplete")}
          </button>
        )}
        {completed && (
          <button
            onClick={() => navigate({ to: "/map" })}
            className="w-full rounded-full bg-card py-4 font-display text-base font-semibold text-foreground shadow-[var(--shadow-soft)]"
          >
            {t(state.language, "ui.toMap")} →
          </button>
        )}
      </div>
    </AppShell>
  );
}
