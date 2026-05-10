export type AgeGroup = "3-4" | "5-6" | "7-9";
export type Language = "sv" | "en";

export interface StoryLocation {
  lat: number;
  lng: number;
  radius: number; // meters
  label: string;
}

export interface Story {
  id: string;
  villageId: string;
  language: Language;
  ageGroup: AgeGroup;
  title: string;
  subtitle: string;
  location: StoryLocation;
  audio: string;
  text: string;
  mission: string[];
  reward: string;
  emoji: string;
  accent: "moss" | "ember" | "bark";
}

export interface Village {
  id: string;
  name: string;
  region: string;
  center: { lat: number; lng: number };
}

export const villages: Village[] = [
  {
    id: "halleforsnas",
    name: "Hälleforsnäs",
    region: "Sörmland",
    center: { lat: 59.155, lng: 16.498 },
  },
];

// Approximate Hälleforsnäs coordinates – designed to be edited later via CMS.
export const stories: Story[] = [
  {
    id: "folketshus_sv_5_6",
    villageId: "halleforsnas",
    language: "sv",
    ageGroup: "5-6",
    title: "Det sjungande huset",
    subtitle: "Folkets Hus",
    location: { lat: 59.1556, lng: 16.4972, radius: 40, label: "Folkets Hus" },
    audio: "/audio/folketshus.mp3",
    emoji: "🏛️",
    accent: "bark",
    text: `Hej lilla upptäckare 🫎

Idag ska vi besöka ett väldigt speciellt hus.
Det här är Folkets Hus.

För länge sedan arbetade många människor i Hälleforsnäs med järn och stora maskiner. De jobbade hårt hela dagarna.

Då byggde man Folkets Hus. En plats där människor kunde träffas, dansa, sjunga och ha roligt tillsammans.

Folkets Hus betyder: "Ett hus för alla människor."

Jag tror att huset fortfarande minns alla gamla sånger.`,
    mission: ["Hitta något gammalt", "Lyssna i 10 sekunder", "Vinka till huset"],
    reward: "Folkets Hus-vän",
  },
  {
    id: "kolhuset_sv_5_6",
    villageId: "halleforsnas",
    language: "sv",
    ageGroup: "5-6",
    title: "Kolhuset och den svarta elden",
    subtitle: "Kolhuset",
    location: { lat: 59.1542, lng: 16.4995, radius: 40, label: "Kolhuset" },
    audio: "/audio/kolhuset.mp3",
    emoji: "🔥",
    accent: "ember",
    text: `Hej igen lilla upptäckare 🫎

Nu är vi vid Kolhuset.

Här förvarade man kol som hjälpte till att göra eldarna tillräckligt varma för att smälta järn. Det blev varmt, sotigt och fullt av rök.

Kolet hjälpte människorna att bygga maskiner och tåg.

Men vissa sa att de ibland såg stora skuggor nära Kolhuset på kvällarna... Kanske var det bara röken. Eller kanske något mycket äldre.`,
    mission: ["Hitta något svart", "Hitta något av trä", "Hitta något av metall"],
    reward: "Lilla Eldväktaren",
  },
  {
    id: "dinosaurieskogen_sv_5_6",
    villageId: "halleforsnas",
    language: "sv",
    ageGroup: "5-6",
    title: "Dinosaurierna i skogen",
    subtitle: "Dinosaurieskogen",
    location: { lat: 59.1571, lng: 16.4938, radius: 60, label: "Dinosaurieskogen" },
    audio: "/audio/dinosaurieskogen.mp3",
    emoji: "🦕",
    accent: "moss",
    text: `Hej lilla upptäckare 🫎

Idag ska vi gå till en plats där små dinosaurier gömmer sig i skogen.

För väldigt länge sedan levde dinosaurier på jorden. Det fanns inga människor då. Inga hus. Inga vägar.

Nu verkar det som att några små dinosaurier har gömt sig här i skogen.

Men bara riktiga upptäckare kan hitta dem.`,
    mission: [
      "Hitta en gömd dinosaurie",
      "Berätta vilken färg den har",
      "Gå fem steg som en dinosaurie",
    ],
    reward: "Dinosaurieupptäckare",
  },
];

export function getStories(filter?: { language?: Language; ageGroup?: AgeGroup; villageId?: string }) {
  return stories.filter((s) => {
    if (filter?.language && s.language !== filter.language) return false;
    if (filter?.ageGroup && s.ageGroup !== filter.ageGroup) return false;
    if (filter?.villageId && s.villageId !== filter.villageId) return false;
    return true;
  });
}

export function getStoryById(id: string) {
  return stories.find((s) => s.id === id);
}