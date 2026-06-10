import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const dinosaurieskogen_en_3_4: Story = {
  id: "dinosaurieskogen_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Dinosaurs in the Forest",
  subtitle: "Dinosaur Forest",
  location: { ...LOCATIONS.DINOSAUR_FOREST, label: "Dinosaur Forest" },
  audio: "/audio/dinosaurieskogen_en_3_4.mp3",
  image: "/images/stories/dino.png",
  emoji: "🦕",
  accent: "moss",
  sources: [],
  text: "This forest is very old.\n\nA very long time ago, dinosaurs lived here.\n\nBig dinosaurs with long necks.\n\nSmall dinosaurs that ran fast.\n\nNow the dinosaurs are gone.\n\nBut the forest remembers them.\n\nLook around.\n\nCan you see a dinosaur hiding in the trees?\n\nMaybe it is watching you!",
  mission: [
    "Look for a dinosaur shape in the trees",
    "Stomp your feet like a big dinosaur",
    "Roar like a dinosaur!",
  ],
  reward: "Dinosaur Friend",
};
