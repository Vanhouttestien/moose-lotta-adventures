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
          className={`flex-1 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
            value === l.code
              ? "border-primary bg-primary/10 text-primary"
              : "border-transparent bg-card text-muted-foreground"
          }`}
        >
          <span className="mr-1 text-base">{l.flag}</span> {l.label}
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
    <div className="flex gap-2">
      {ageGroups.map((a) => (
        <button
          key={a.code}
          onClick={() => onChange(a.code)}
          className={`flex-1 rounded-2xl border-2 px-3 py-3 text-sm font-semibold transition-all ${
            value === a.code
              ? "border-primary bg-primary/10 text-primary"
              : "border-transparent bg-card text-muted-foreground"
          }`}
        >
          {a.label}
        </button>
      ))}
    </div>
  );
}
