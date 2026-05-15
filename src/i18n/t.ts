import type { Language, TranslationDict, LeafPaths } from "./types";
import type { SvDict } from "./sv";
import { sv } from "./sv";
import { en } from "./en";

type ValidPath = LeafPaths<SvDict>;

const dicts: Record<Language, TranslationDict> = { sv, en };

function resolvePath(obj: TranslationDict, path: string): string | undefined {
  let current: TranslationDict | string = obj;
  const keys = path.split(".");
  for (const key of keys) {
    if (typeof current === "string" || !(key in current)) return undefined;
    current = current[key];
  }
  return typeof current === "string" ? current : undefined;
}

function interpolate(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const val = params[key];
    return val !== undefined ? String(val) : `{{${key}}}`;
  });
}

export function t(
  lang: Language,
  path: ValidPath,
  params?: Record<string, string | number>,
): string {
  const dict = dicts[lang];
  const resolved = resolvePath(dict, path);
  if (resolved === undefined) {
    const fallback = resolvePath(dicts.sv, path);
    if (fallback === undefined) return path;
    return interpolate(fallback, params);
  }
  return interpolate(resolved, params);
}
