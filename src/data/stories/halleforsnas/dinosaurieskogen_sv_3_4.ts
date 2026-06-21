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
  image: "/images/stories/dino.jpeg",
  emoji: "🦕",
  accent: "moss",
  sources: [],
  text: `Den här skogen är väldigt gammal.

För länge, länge sedan levde det dinosaurier här.

Stora dinosaurier med långa halsar.

Små dinosaurier som sprang fort.

Nu är dinosaurierna borta.

Men skogen minns dem.

Titta dig omkring.

Ser du en dinosaurie som gömmer sig bland träden?

Den kanske tittar på dig!`,
  mission: [
    "Letar efter en dinosaurie bland träden",
    "Stampa fötterna som en stor dinosaurie",
    "Vråla som en dinosaurie!",
  ],
  reward: "Dinosauriekompis",
};
