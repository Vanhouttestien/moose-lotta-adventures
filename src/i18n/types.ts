import type { Language } from "@/data/stories";

export type { Language };

export type TranslationDict = {
  [key: string]: string | TranslationDict;
};

export type Structure<T extends TranslationDict> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends TranslationDict
      ? Structure<T[K]>
      : never;
};

export type LeafPaths<T extends TranslationDict, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends string
    ? `${Prefix}${K}`
    : T[K] extends TranslationDict
      ? LeafPaths<T[K], `${Prefix}${K}.`>
      : never;
}[keyof T & string];
