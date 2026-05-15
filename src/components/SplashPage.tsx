import { t } from "@/i18n";
import mooseHero from "@/assets/moose-lotta-hero.jpg";

export function SplashPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[420px] overflow-hidden">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-forest-mist/60" />
        <div className="absolute top-40 -left-16 h-48 w-48 rounded-full bg-secondary/15" />
        <div className="absolute top-60 right-12 h-32 w-32 rounded-full bg-accent/8" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6">
        <div className="mx-auto w-full max-w-sm">
          {/* hero illustration */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-cozy)] ring-1 ring-border/10">
              <img
                src={mooseHero}
                alt="Moose Lotta"
                className="h-auto w-full max-w-[280px] object-cover"
              />
            </div>
          </div>

          {/* location label */}
          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
            {t("sv", "app.location")}
          </p>

          {/* title */}
          <h1 className="mt-2 text-center font-display text-2xl font-semibold leading-tight text-foreground">
            {t("sv", "app.title")}
          </h1>

          {/* tagline */}
          <p className="mt-2 text-center text-sm text-muted-foreground">                {t("sv", "app.tagline")}</p>

          {/* cta */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-8 py-3 font-display text-sm font-semibold text-background shadow-[var(--shadow-cozy)] transition-all hover:opacity-90 active:scale-[0.97]"
            >
              {t("sv", "ui.start")}
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute -bottom-8 left-1/4 h-20 w-20 rounded-full bg-forest-mist/30" />
        <div className="absolute -bottom-4 right-1/3 h-16 w-16 rounded-full bg-secondary/15" />
      </div>
    </div>
  );
}
