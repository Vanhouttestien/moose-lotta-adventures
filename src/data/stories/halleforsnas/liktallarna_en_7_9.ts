import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_7_9: Story = {
  id: "liktallarna_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Secret of the Pine Trees",
  subtitle: "The Burned Guardians",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_en_7_9.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "ember",
  sources: ["4"],
  text: "Before you stand some of the oldest trees in Hälleforsnäs.\n\nThe Liktallarna.\n\nMore than 400 years old.\n\nFor centuries, people have told stories about this place.\n\nNo one knows exactly which stories are true.\n\nOne old legend says this was once the outer edge of the village.\n\nAnother story says funeral wagons stopped here to rest on their long journey toward the church.\n\nMaybe that is why the place feels different.\n\nQuiet.\nHeavy.\nLike the air itself remembers.\n\nMany people also believed the trees held special powers.\n\nIn old folklore, ancient trees could protect places… or carry memories from the people who passed by.\n\nThen came the fire.\n\nIn the 1980s or 1990s, the trees were badly damaged by flames.\n\nAnd still they survived.\n\nBlackened.\nTwisted.\nAlive.\n\nToday, a memorial plaque stands nearby with a charcoal drawing made in 1966 by Edvin Axelsson.\n\nAlmost as if someone wanted to make sure the trees would never be forgotten.",
  mission: [
    "Find marks left by the fire",
    "Read the memorial plaque together",
    "Decide which legend you believe most",
  ],
  reward: "Guardian of the Pines",
};
