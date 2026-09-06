import { useState } from "react";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";
import { X, Trash2, Plus, ChevronRight } from "lucide-react";

const avatarColors = [
  "from-accent/40 to-accent/10",
  "from-forest-mist to-moss/10",
  "from-secondary/40 to-secondary/10",
  "from-primary/20 to-accent/10",
];

export function ProfileSwitcher({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}) {
  const { profiles, activeProfile, selectProfile, deleteProfile } = useAppState();
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const lang = activeProfile?.data.language ?? "sv";

  if (!open) return null;

  const handleSelect = (name: string) => {
    selectProfile(name);
    onClose();
  };

  const handleDelete = (name: string) => {
    deleteProfile(name);
    setConfirmDelete(null);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-t-3xl bg-background px-6 pb-10 pt-6 shadow-[var(--shadow-cozy)] animate-in slide-in-from-bottom">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">
            {t(lang, "ui.profile.switch")}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-5 space-y-2.5">
          {profiles.map((profile, i) => {
            const isActive = profile.name === activeProfile?.name;
            return (
              <div key={profile.name} className="flex items-center gap-2">
                <button
                  onClick={() => handleSelect(profile.name)}
                  className={`group flex flex-1 items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all ${
                    isActive
                      ? "bg-accent/15 shadow-[var(--shadow-soft)] ring-1 ring-accent/30"
                      : "bg-card shadow-[var(--shadow-soft)] ring-1 ring-border/20 hover:ring-primary/15"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${
                      avatarColors[i % avatarColors.length]
                    }`}
                  >
                    <span className="font-display text-base font-semibold text-foreground">
                      {profile.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate text-sm">{profile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {profile.data.ageGroup} ·{" "}
                      {profile.data.language === "sv" ? "Svenska" : "English"}
                    </p>
                  </div>
                  {isActive ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      ✓
                    </span>
                  ) : (
                    <ChevronRight
                      size={16}
                      className="shrink-0 text-muted-foreground/30 transition-transform group-hover:translate-x-0.5"
                    />
                  )}
                </button>
                {confirmDelete === profile.name ? (
                  <div className="flex shrink-0 flex-col items-center gap-1">
                    <button
                      onClick={() => handleDelete(profile.name)}
                      className="rounded-full bg-destructive px-3 py-1 text-[11px] font-semibold text-destructive-foreground shadow-sm"
                    >
                      {t(lang, "ui.profile.delete")}
                    </button>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      className="text-[11px] text-muted-foreground underline-offset-2 hover:underline"
                    >
                      Avbryt
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDelete(profile.name)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground/50 transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            onClose();
            onCreate();
          }}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-card/50 px-5 py-3.5 text-sm font-semibold text-muted-foreground shadow-[var(--shadow-soft)] ring-1 ring-border/20 transition-all hover:bg-card hover:ring-primary/20 hover:text-primary"
        >
          <Plus size={18} />
          {t(lang, "ui.profile.new")}
        </button>

        <a
          href="https://forms.gle/JdfUUxErsMyBV76H7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center text-xs text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
        >
          💬 {t(lang, "ui.feedback")}
        </a>
      </div>
    </div>
  );
}
