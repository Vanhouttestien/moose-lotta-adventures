import { ageGroups, languages } from "@/data/i18n";
import type { AgeGroup, Language } from "@/data/stories";

export function LanguageSelector({
  value,
  onChange,
}: {
  value: Language;
  onChange: (l: Language) => void;
}) {
  return (
    <div className="flex gap-2">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => onChange(l.code)}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
            value === l.code
              ? "bg-foreground text-background shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          <span className="text-base">{l.flag}</span>
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function AgeSelector({
  value,
  onChange,
}: {
  value: AgeGroup;
  onChange: (a: AgeGroup) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {ageGroups.map((a) => (
        <button
          key={a.code}
          onClick={() => onChange(a.code)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            value === a.code
              ? "bg-accent text-accent-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {a.label}
        </button>
      ))}
    </div>
  );
}
