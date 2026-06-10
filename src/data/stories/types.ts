export type AgeGroup = "3-4" | "5-6" | "7-9" | "10-12" | "adult";
export type Language = "sv" | "en";

export interface StoryLocation {
  lat: number;
  lng: number;
  radius: number;
  label: string;
}

export interface Story {
  id: string;
  villageId: string;
  language: Language;
  ageGroups: AgeGroup[];
  title: string;
  subtitle: string;
  location: StoryLocation;
  audio: string;
  text: string;
  mission: string[];
  reward: string;
  emoji: string;
  image?: string;
  accent: "moss" | "ember" | "bark" | "shadow" | "rust" | "water";
  sources: string[];
}

export interface Village {
  id: string;
  name: string;
  region: string;
  center: { lat: number; lng: number };
}
