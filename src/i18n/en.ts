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
    feedback: "Help us improve — send feedback",
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
    onboarding: {
      step1: "This is you",
      step2: "Sometimes it's quiet — that means adventures are further away",
      step3: "Gray question marks are hidden adventures — walk toward them to unlock them",
      skip: "Skip",
      next: "Next",
      done: "Explore!",
      showAgain: "Show again",
    },
    firstRun: {
      title: "Your first adventure awaits — open the map to begin",
      toMap: "Open map",
    },
    compass: {
      n: "north",
      ne: "northeast",
      e: "east",
      se: "southeast",
      s: "south",
      sw: "southwest",
      w: "west",
      nw: "northwest",
      hint: "Try heading {{direction}}",
    },
    audio: {
      tells: "Moose Lotta tells a story",
      pressToListen: "Press to listen",
      missing: "Audio missing – read the story below",
      transcript: "Read transcript",
      hideTranscript: "Hide transcript",
    },
    unlock: {
      foundAdventure: "✨ You found an adventure",
      listen: "Listen to Lotta's story",
      notNow: "Not right now",
    },
    story: {
      locked: "This adventure is locked",
      walkCloser: "Walk closer to unlock",
      unlock: "Unlock the adventure",
    },
    toast: {
      completed: "Story completed!",
      rewardEarned: "You earned: {{reward}}",
    },
  },
  gps: {
    permission: {
      title: "Help Moose Lotta find you in the forest",
      body: "So she can guide you to historical places.",
    },
    enable: "Find me, Lotta!",
    denied: "Location is off. Change your browser settings so Moose Lotta can find you.",
    searching: "Lotta is looking for you in the forest…",
  },
  character: {
    lotta: {
      greeting: "Ready to discover the history around you?",
      sense: "🫎 Lotta senses an adventure about {{dist}} m away…",
    },
  },
  story: {
    hint: {
      title: "✨ Something awaits nearby",
    },
    noStories: {
      title: "It's quiet here…",
      body: "Wander on — adventures await over there.",
    },
    distance: {
      locked: "You're about {{dist}} m away.",
    },
  },
} satisfies TranslationDict;
