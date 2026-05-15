import { Link } from "@tanstack/react-router";
import type { StoryStatus } from "@/engine/storyEngine";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";
import { Lock, Sparkles, MapPin } from "lucide-react";

export function StoryCard({ s }: { s: StoryStatus }) {
  const { state } = useAppState();
  const accentVar =
    s.story.accent === "moss"
      ? "var(--moss)"
      : s.story.accent === "ember"
        ? "var(--ember)"
        : "var(--bark)";
  const status: "completed" | "unlocked" | "locked" = s.completed
    ? "completed"
    : s.unlocked
      ? "unlocked"
      : "locked";
  const Wrapper = status === "locked" ? "div" : Link;
  const wrapperProps =
    status === "locked"
      ? {
          className:
            "group relative block overflow-hidden rounded-3xl bg-card p-5 shadow-[var(--shadow-soft)]",
        }
      : {
          to: "/story/$storyId" as const,
          params: { storyId: s.story.id },
          className:
            "group relative block overflow-hidden rounded-3xl bg-card p-5 shadow-[var(--shadow-soft)] transition-transform active:scale-[0.99]",
        };

  return (
    <Wrapper {...wrapperProps}>
      <div
        className="absolute inset-y-0 left-0 w-1.5"
        style={{ background: accentVar }}
        aria-hidden
      />
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
          style={{ background: `color-mix(in oklab, ${accentVar} 18%, transparent)` }}
        >
          {s.story.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {s.story.subtitle}
          </p>
          <h3 className="mt-0.5 font-display text-lg leading-snug text-foreground">
            {s.story.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {status === "completed" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/30 px-2 py-0.5 text-accent-foreground">
                <Sparkles className="h-3 w-3" /> {s.story.reward}
              </span>
            )}
            {status === "unlocked" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-semibold text-primary">
                🫎 öppen
              </span>
            )}
            {status === "locked" && (
              <span className="inline-flex items-center gap-1">
                <Lock className="h-3 w-3" />
                {s.distance != null ? `${Math.round(s.distance)} m bort` : "Okänt avstånd"}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {s.story.location.label}
            </span>
            {status === "locked" && (
              <p className="mt-1 w-full text-xs text-muted-foreground/70">
                {t(state.language, "ui.story.walkCloser")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
