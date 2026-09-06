import { useState } from "react";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";
import { ChevronRight } from "lucide-react";

function HintPin() {
  return (
    <svg viewBox="0 0 44 54" width="52" height="64">
      <path
        d="M22 2 C 10 2 2 11 2 22 C 2 36 22 52 22 52 C 22 52 42 36 42 22 C 42 11 34 2 22 2 Z"
        fill="#b9b3a4"
        stroke="white"
        strokeWidth="2.5"
      />
      <circle cx="22" cy="22" r="8" fill="white" />
      <text x="22" y="26" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#b9b3a4">
        ?
      </text>
    </svg>
  );
}

function UnlockedPin({ emoji }: { emoji: string }) {
  return (
    <svg viewBox="0 0 44 54" width="52" height="64">
      <path
        d="M22 2 C 10 2 2 11 2 22 C 2 36 22 52 22 52 C 22 52 42 36 42 22 C 42 11 34 2 22 2 Z"
        fill="#7ea66a"
        stroke="white"
        strokeWidth="2.5"
      />
      <circle cx="22" cy="22" r="8" fill="white" />
      <text x="22" y="28" textAnchor="middle" fontSize="18">
        {emoji}
      </text>
    </svg>
  );
}

export function OnboardingSequence({
  onComplete,
  onSkip,
}: {
  onComplete: () => void;
  onSkip: () => void;
}) {
  const { state } = useAppState();
  const [step, setStep] = useState(0);
  const lang = state.language;
  const isLast = step === slides.length - 1;

  const slides = [
    {
      illustration: (
        <div className="relative mx-auto aspect-square w-56">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest-mist to-forest-deep/10" />
          <div className="absolute inset-4 overflow-hidden rounded-full">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(135deg, #d4e8d0 0%, #b8d4b0 30%, #e0edc8 60%, #c8dbb8 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 drop-shadow-lg">
            <div className="animate-float">
              <img src="/moose-lotta-pointer.png" alt="Moose Lotta" className="h-auto w-28" />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-deep shadow-sm backdrop-blur">
            {t(lang, "ui.onboarding.youHere")}
          </div>
        </div>
      ),
      key: "you-are-here",
    },
    {
      illustration: (
        <div className="mx-auto w-64 rounded-3xl border-2 border-dashed border-border bg-card/80 px-5 py-6 text-center shadow-[var(--shadow-soft)]">
          <p className="text-3xl">🌲</p>
          <p className="mt-2 font-display text-base text-forest-deep">
            {t(lang, "story.noStories.title")}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{t(lang, "story.noStories.body")}</p>
        </div>
      ),
      key: "empty-state",
    },
    {
      illustration: (
        <div className="relative mx-auto flex w-64 items-center justify-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="opacity-55">
              <HintPin />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {t(lang, "ui.onboarding.hidden")}
            </span>
          </div>
          <div className="mt-[-1.5rem]">
            <ChevronRight size={28} className="text-muted-foreground/40" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="animate-float">
              <UnlockedPin emoji="🌳" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-moss">
              {t(lang, "ui.onboarding.found")}
            </span>
          </div>
        </div>
      ),
      key: "pin-progression",
    },
  ];

  const stepLabels = [
    t(lang, "ui.onboarding.step1"),
    t(lang, "ui.onboarding.step2"),
    t(lang, "ui.onboarding.step3"),
  ];

  return (
    <div className="fixed inset-0 z-[2000] flex flex-col bg-background">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-forest-mist/40" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20" />
        <div className="absolute top-1/3 left-1/4 h-40 w-40 rounded-full bg-accent/8" />
      </div>

      {/* skip button */}
      <div className="relative z-10 flex justify-end px-6 pt-4">
        <button
          onClick={onSkip}
          className="rounded-full bg-card/80 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:bg-card"
        >
          {t(lang, "ui.onboarding.skip")}
        </button>
      </div>

      {/* illustration */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8">
        <div key={slides[step].key} className="animate-fade-up">
          {slides[step].illustration}
        </div>

        {/* copy */}
        <p
          key={`copy-${step}`}
          className="mt-8 animate-fade-up text-center font-display text-xl font-semibold leading-snug text-foreground"
        >
          {stepLabels[step]}
        </p>

        {/* dots */}
        <div className="mt-10 flex items-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === step ? "w-6 bg-primary" : "w-2 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>

        {/* next / done button */}
        <div className="mt-10">
          <button
            onClick={() => (isLast ? onComplete() : setStep((s) => s + 1))}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-8 py-3 font-display text-sm font-semibold text-background shadow-[var(--shadow-cozy)] transition-all hover:opacity-90 active:scale-[0.97]"
          >
            {isLast ? t(lang, "ui.onboarding.done") : t(lang, "ui.onboarding.next")}
            {!isLast && <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
