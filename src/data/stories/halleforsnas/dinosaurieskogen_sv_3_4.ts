import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const dinosaurieskogen_sv_3_4: Story = {
  id: "dinosaurieskogen_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Dinosaurierna i skogen",
  subtitle: "Dinosaurieskogen",
  location: { ...LOCATIONS.DINOSAUR_FOREST, label: "Dinosaurieskogen" },
  audio: "/audio/dinosaurieskogen_sv_3_4.mp3",
  emoji: "🦕",
  accent: "moss",
  sources: [],
  text: "Den här skogen är väldigt gammal.\n\nFör länge, länge sedan levde det dinosaurier här.\n\nStora dinosaurier med långa halsar.\n\nSmå dinosaurier som sprang fort.\n\nNu är dinosaurierna borta.\n\nMen skogen minns dem.\n\nTitta dig omkring.\n\nSer du en dinosaurie som gömmer sig bland träden?\n\nDen kanske tittar på dig!",
  mission: [
    "Letar efter en dinosaurie bland träden",
    "Stampa fötterna som en stor dinosaurie",
    "Vråla som en dinosaurie!",
  ],
  reward: "Dinosauriekompis",
};
