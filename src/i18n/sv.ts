import type { TranslationDict } from "./types";

export const sv = {
  app: {
    title: "Moose Lotta Äventyr",
    location: "Ute i skogen",
    tagline: "Historiens hemligheter väntar — ute i skogen.",
  },
  ui: {
    start: "Utforska",
    map: "Karta",
    rewards: "Skatter",
    home: "Hem",
    toMap: "Till kartan",
    done: "Klart!",
    mission: "Uppdrag",
    reward: "Belöning",
    play: "Spela",
    pause: "Pausa",
    replay: "Spela igen",
    markComplete: "Markera som klart",
    completed: "Avklarad",
    goExplore: "Gå ut och utforska",
    exploreSubtitle: "Upptäck historiska platser nära dig",
    progress: "framsteg",
    collected: "samlade skatter",
    noRewards: "Inga skatter ännu. Ut och upptäck!",
    feedback: "Hjälp oss bli bättre — skicka feedback",
    language: "Språk",
    age: "Ålder",
    profile: {
      select: "Vem är ute och äventyrar?",
      new: "Ny äventyrare",
      name: "Namn",
      namePlaceholder: "Skriv ditt namn",
      create: "Skapa profil",
      createSubtitle: "Berätta vem du är",
      delete: "Ta bort profil",
      deleteConfirm: "Är du säker? Alla framsteg försvinner.",
      switch: "Byt profil",
      profile: "Profil",
    },
    onboarding: {
      step1: "Den här är du",
      step2: "Ibland är det tyst — då finns äventyr längre bort",
      step3: "Gråa frågetecken är gömda äventyr — gå mot dem för att låsa upp dem",
      skip: "Hoppa över",
      next: "Nästa",
      done: "Utforska!",
      showAgain: "Visa igen",
    },
    firstRun: {
      title: "Din första resa väntar — öppna kartan för att börja",
      toMap: "Öppna kartan",
    },
    compass: {
      n: "norr",
      ne: "nordost",
      e: "öster",
      se: "sydost",
      s: "söder",
      sw: "sydväst",
      w: "väster",
      nw: "nordväst",
      hint: "Prova att gå mot {{direction}}",
    },
    audio: {
      tells: "Moose Lotta berättar",
      pressToListen: "Tryck för att lyssna",
      missing: "Ljud saknas – läs berättelsen nedan",
      transcript: "Läs transkript",
      hideTranscript: "Dölj transkript",
    },
    unlock: {
      foundAdventure: "✨ Du hittade ett äventyr",
      listen: "Lyssna på Lottas berättelse",
      notNow: "Inte just nu",
    },
    story: {
      locked: "Detta äventyr är låst",
      walkCloser: "Gå närmare för att låsa upp",
      unlock: "Lås upp äventyret",
    },
    toast: {
      completed: "Berättelse avklarad!",
      rewardEarned: "Du fick: {{reward}}",
    },
  },
  gps: {
    permission: {
      title: "Hjälp Moose Lotta hitta dig i skogen",
      body: "Så kan hon visa dig vägen till historiska platser.",
    },
    enable: "Hitta mig, Lotta!",
    denied: "Platsen är avstängd. Ändra i webbläsarens inställningar så Moose Lotta kan hitta dig.",
    searching: "Lotta spanar efter dig i skogen…",
  },
  character: {
    lotta: {
      greeting: "Redo att upptäcka historien omkring dig?",
      sense: "🫎 Lotta känner ett äventyr ungefär {{dist}} m härifrån…",
    },
  },
  story: {
    hint: {
      title: "✨ Något väntar här i närheten",
    },
    noStories: {
      title: "Här var det tyst…",
      body: "Vandra vidare — äventyren väntar där borta.",
    },
    distance: {
      locked: "Du är ungefär {{dist}} m bort.",
    },
  },
} satisfies TranslationDict;

export type SvDict = typeof sv;
