import { t } from "@/i18n";
import mooseHero from "@/assets/moose-lotta-hero.png";

export function SplashPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[420px] overflow-hidden">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-forest-mist/60" />
        <div className="absolute top-40 -left-16 h-48 w-48 rounded-full bg-secondary/15" />
        <div className="absolute top-60 right-12 h-32 w-32 rounded-full bg-accent/8" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="relative shrink-0">
          <img
            src={mooseHero}
            alt="Moose Lotta"
            className="block max-h-[68vh] w-full object-cover object-center animate-fade-up"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-6">
          <div className="mx-auto w-full max-w-sm">
            <div className="text-center">
              <h1 className="font-display text-2xl font-semibold leading-tight text-foreground">
                {t("sv", "app.title")}
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">{t("sv", "app.tagline")}</p>
            </div>

            <div className="mt-6 flex justify-center">
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
      </div>
    </div>
  );
}
