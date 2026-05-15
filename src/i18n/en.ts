import type { Structure, TranslationDict } from "./types";
import type { SvDict } from "./sv";

export const en: Structure<SvDict> = {
  app: {
    title: "Moose Lotta Adventures",
    location: "Out in the forest",
    tagline: "History's secrets are waiting — out in the forest.",
  },
  ui: {
    start: "Explore",
    map: "Map",
    rewards: "Treasures",
    home: "Home",
    toMap: "Back to map",
    done: "Done!",
    mission: "Mission",
    reward: "Reward",
    play: "Play",
    pause: "Pause",
    replay: "Play again",
    markComplete: "Mark as done",
    completed: "Completed",
    goExplore: "Go out and explore",
    exploreSubtitle: "Discover historical places near you",
    progress: "progress",
    collected: "collected treasures",
    noRewards: "No treasures yet. Go explore!",
    language: "Language",
    age: "Age",
    profile: {
      select: "Who's going on an adventure?",
      new: "New adventurer",
      name: "Name",
      namePlaceholder: "Enter your name",
      create: "Create profile",
      createSubtitle: "Tell us who you are",
      delete: "Delete profile",
      deleteConfirm: "Are you sure? All progress will be lost.",
      switch: "Switch profile",
      profile: "Profile",
    },
    story: {
      locked: "This adventure is locked",
      walkCloser: "Walk closer to unlock",
      unlock: "Unlock the adventure",
    },
  },
  gps: {
    permission: {
      title: "Help Moose Lotta find you in the forest",
      body: "So she can guide you to historical places.",
    },
    enable: "Find me, Lotta!",
    denied:
      "Location is off. Change your browser settings so Moose Lotta can find you.",
    searching: "Lotta is looking for you in the forest…",
  },
  character: {
    lotta: {
      greeting: "Ready to discover the history around you?",
      feels: "🫎 Right here! Lotta senses the history!",
      sense: "🫎 Lotta senses an adventure about {{dist}} m away…",
    },
  },
  story: {
    hint: {
      title: "✨ Something awaits nearby",
    },
    noStories: {
      title: "It's quiet here…",
      body: "Walk a bit further — Lotta senses adventures within 3 km.",
    },
    distance: {
      locked: "You're about {{dist}} m away.",
    },
  },
} satisfies TranslationDict;
