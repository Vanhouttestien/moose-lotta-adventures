import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";
import type { Story } from "@/data/stories";

export function UnlockPopup({ story, onClose }: { story: Story | null; onClose: () => void }) {
  const { state } = useAppState();
  useEffect(() => {
    if (!story) return;
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate?.([40, 60, 100]);
      } catch {
        /* ignore */
      }
    }
  }, [story]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm">
      <div className="relative w-full max-w-sm max-h-[85vh] overflow-y-auto rounded-[2rem] bg-card p-6 text-center shadow-[var(--shadow-cozy)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-50 blur-2xl"
          style={{ background: "var(--gradient-forest)" }}
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            {t(state.language, "ui.unlock.foundAdventure")}
          </p>
          <div className="mt-3 text-5xl animate-float">{story.emoji}</div>
          <h2 className="mt-3 font-display text-2xl text-forest-deep">{story.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{story.subtitle}</p>
          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/story/$storyId"
              params={{ storyId: story.id }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cozy)] active:scale-95"
            >
              {t(state.language, "ui.unlock.listen")}
            </Link>
            <button
              onClick={onClose}
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              {t(state.language, "ui.unlock.notNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
