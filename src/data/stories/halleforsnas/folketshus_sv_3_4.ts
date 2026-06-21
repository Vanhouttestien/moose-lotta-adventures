import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_sv_3_4: Story = {
  id: "folketshus_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Allas hus",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_sv_3_4.mp3",
  image: "/images/stories/folketshus.jpeg",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  ambience: "library",
  text: `Titta på den här stora byggnaden.

Den heter Folkets Hus.

För länge sedan ville arbetarna på fabriken ha en plats där alla kunde mötas.

Så de byggde det här huset tillsammans.

Människor kom hit för att dansa, titta på film och skratta.

Barn kom med sina familjer.

Huset finns fortfarande kvar idag.

Det har sett så många glada stunder.

Kan du föreställa dig musiken och skratten där inne?`,
  mission: ["Titta på de stora fönstren", "Lyssna tyst", "Le mot byggnaden"],
  reward: "Folkets Hus-vän",
};
