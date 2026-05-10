import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/hooks/useAppState";
import { AgeSelector, LanguageSelector } from "@/components/Selectors";
import { t } from "@/data/i18n";
import { AppShell } from "@/components/AppShell";
import heroImg from "@/assets/moose-lotta-hero.jpg";

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

function HomePage() {
  const { state, update } = useAppState();
  const navigate = useNavigate();

  const onStart = () => {
    update({ onboarded: true });
    navigate({ to: "/map" });
  };

  return (
    <AppShell>
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-sky)" }}
      >
        <div className="px-6 pt-10 pb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            Hälleforsnäs · Sörmland
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-forest-deep">
            Moose Lotta
            <br />
            <span className="text-primary">Äventyr</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground">
            {t(state.language, "tagline")}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md px-6 pb-2">
          <div className="relative animate-float">
            <img
              src={heroImg}
              alt="Moose Lotta, en vänlig älg i en nordisk skog"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-[320px] rounded-[2.5rem] shadow-[var(--shadow-cozy)]"
            />
          </div>
        </div>
      </div>

      <section className="space-y-6 px-6 pt-8 animate-fade-up">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t(state.language, "language")}
          </p>
          <LanguageSelector
            value={state.language}
            onChange={(language) => update({ language })}
          />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t(state.language, "age")}
          </p>
          <AgeSelector
            value={state.ageGroup}
            onChange={(ageGroup) => update({ ageGroup })}
          />
        </div>
        <button
          onClick={onStart}
          className="mt-4 w-full rounded-full bg-primary py-5 font-display text-lg font-semibold text-primary-foreground shadow-[var(--shadow-cozy)] transition-transform active:scale-[0.98]"
        >
          {t(state.language, "start")} →
        </button>
        <Link
          to="/rewards"
          className="block text-center text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
        >
          ✨ {t(state.language, "rewards")}
        </Link>
      </section>
    </AppShell>
  );
}