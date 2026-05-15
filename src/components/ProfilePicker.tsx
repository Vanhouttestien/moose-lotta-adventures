import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";
import { Plus, ChevronRight } from "lucide-react";
import mooseHero from "@/assets/moose-lotta-hero2.jpg";

const avatarColors = [
  "from-accent/40 to-accent/10",
  "from-forest-mist to-moss/10",
  "from-secondary/40 to-secondary/10",
  "from-primary/20 to-accent/10",
];

export function ProfilePicker({
  onSelect,
  onCreate,
}: {
  onSelect: () => void;
  onCreate: () => void;
}) {
  const { profiles, selectProfile, activeProfile } = useAppState();
  const lang = activeProfile?.data.language ?? "sv";

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background px-6">
      {/* decorative bg */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-forest-mist/50" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-secondary/20" />
      <div className="pointer-events-none absolute top-1/2 right-8 h-24 w-24 rounded-full bg-accent/10" />

      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-sm">
          {/* header */}
          <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 overflow-hidden rounded-full shadow-[var(--shadow-soft)] ring-2 ring-forest-mist/30">
              <img src={mooseHero} alt="Moose Lotta" className="h-full w-full object-cover" />
            </div>
            <h1 className="mt-4 font-display text-2xl font-semibold text-foreground">
              Moose Lotta
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{t(lang, "ui.profile.select")}</p>
          </div>

          {/* profile list */}
          <div className="mt-8 space-y-3">
            {profiles.map((profile, i) => (
              <button
                key={profile.name}
                onClick={() => {
                  selectProfile(profile.name);
                  onSelect();
                }}
                className="group flex w-full items-center gap-4 rounded-2xl bg-card px-5 py-4 text-left shadow-[var(--shadow-soft)] ring-1 ring-border/30 transition-all hover:ring-primary/20 active:scale-[0.99]"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]}`}
                >
                  <span className="font-display text-lg font-semibold text-foreground">
                    {profile.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{profile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {profile.data.ageGroup} ·{" "}
                    {profile.data.language === "sv" ? "Svenska" : "English"}
                  </p>
                </div>
                <ChevronRight
                  size={18}
                  className="shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5"
                />
              </button>
            ))}
          </div>

          {/* new profile */}
          <div className="mt-4">
            <button
              onClick={onCreate}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-card/50 px-5 py-4 text-sm font-semibold text-muted-foreground shadow-[var(--shadow-soft)] ring-1 ring-border/20 transition-all hover:bg-card hover:ring-primary/20 hover:text-primary"
            >
              <Plus size={18} />
              {t(lang, "ui.profile.new")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
