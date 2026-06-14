import { Link, useLocation } from "@tanstack/react-router";
import { Map, Home, Sparkles } from "lucide-react";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";

export function BottomNav() {
  const { state } = useAppState();
  const loc = useLocation();
  const items = [
    { to: "/" as const, icon: Home, label: t(state.language, "home") },
    { to: "/map" as const, icon: Map, label: t(state.language, "map") },
    { to: "/rewards" as const, icon: Sparkles, label: t(state.language, "rewards") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-card/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map((it) => {
          const active = loc.pathname === it.to;
          const Icon = it.icon;
          return (
            <li key={it.to} className="flex-1">
              <Link
                to={it.to}
                className={`flex flex-col items-center gap-1 py-1.5 text-xs font-medium transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className={`h-6 w-6 ${active ? "scale-110" : ""} transition-transform`} />
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-border/30 px-4 py-1.5 text-center">
        <a
          href="https://forms.gle/JdfUUxErsMyBV76H7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
        >
          💬 {t(state.language, "ui.feedback")}
        </a>
      </div>
    </nav>
  );
}
