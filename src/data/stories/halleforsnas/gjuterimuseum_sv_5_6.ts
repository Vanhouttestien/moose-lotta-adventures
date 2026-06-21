import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_sv_5_6: Story = {
  id: "gjuterimuseum_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Gjuteriet som byggde stan",
  subtitle: "Gjuterimuseet",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Gjuterimuseum" },
  audio: "/audio/gjuterimuseum_sv_5_6.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Här inne hörde man förr ett öronbedövande oljud.

Bankande hammare.
Väsande ånga.
Människor som ropade till varandra.

I över 300 år tillverkades saker av järn här — allt från kaminer till maskindelar.

Människor kom från när och fjärran för att arbeta.

De blev svettiga och sotiga.
Men de hade varandra.

Det var hårt arbete.
Värmen från ugnarna var enorm.

Idag är gjuteriet ett museum.
Du kan se verktygen som användes, fotografier från förr och till och med ett laboratorium.

Och om du frågar någon som jobbat här — kan de berätta precis hur det lät.`,
  mission: ["Titta in i museet", "Hitta något med rost på", "Föreställ dig ljudet av maskinerna"],
  reward: "Gjuteriutforskare",
};
