import { useState } from "react";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/data/i18n";
import { AgeSelector, LanguageSelector } from "@/components/Selectors";
import type { AgeGroup, Language } from "@/data/stories";
import mooseHero from "@/assets/moose-lotta-hero2.jpg";

export function CreateProfile({ onDone }: { onDone: () => void }) {
  const { createProfile } = useAppState();
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("5-6");
  const [language, setLanguage] = useState<Language>("sv");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError(t(language, "profileNamePlaceholder"));
      return;
    }
    const ok = createProfile(trimmed, ageGroup, language);
    if (!ok) {
      setError(
        t(language, "profileName") +
          ' "' +
          trimmed +
          '" ' +
          (language === "sv" ? "finns redan" : "already exists"),
      );
      return;
    }
    onDone();
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background px-6">
      {/* decorative background shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-forest-mist/40" />
      <div className="pointer-events-none absolute -bottom-16 -left-20 h-56 w-56 rounded-full bg-secondary/20" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-accent/10" />

      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-sm">
          {/* moose avatar */}
          <div className="flex justify-center">
            <div className="h-24 w-24 overflow-hidden rounded-full shadow-[var(--shadow-soft)] ring-2 ring-forest-mist/30">
              <img src={mooseHero} alt="Moose Lotta" className="h-full w-full object-cover" />
            </div>
          </div>

          <h1 className="mt-5 text-center font-display text-2xl font-semibold leading-tight text-foreground">
            {t(language, "newProfile")}
          </h1>
          <p className="mt-1.5 text-center text-sm text-muted-foreground">
            {t(language, "profileNamePlaceholder")}
          </p>

          {/* name input */}
          <div className="mt-8">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder={t(language, "profileName")}
                className="w-full rounded-2xl bg-card px-5 py-3.5 text-center text-[15px] text-foreground placeholder:text-muted-foreground/60 shadow-[var(--shadow-soft)] outline-none ring-1 ring-border/50 transition-shadow focus:ring-2 focus:ring-primary/30"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>
            {error && <p className="mt-2 text-center text-xs text-destructive">{error}</p>}
          </div>

          {/* language */}
          <div className="mt-7">
            <p className="mb-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
              {t(language, "language")}
            </p>
            <LanguageSelector value={language} onChange={setLanguage} />
          </div>

          {/* age */}
          <div className="mt-7">
            <p className="mb-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
              {t(language, "age")}
            </p>
            <div className="flex justify-center">
              <AgeSelector value={ageGroup} onChange={setAgeGroup} language={language} />
            </div>
          </div>

          {/* cta */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-8 py-3 font-display text-sm font-semibold text-background shadow-[var(--shadow-cozy)] transition-all hover:opacity-90 active:scale-[0.97]"
            >
              {t(language, "createProfile")}
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
