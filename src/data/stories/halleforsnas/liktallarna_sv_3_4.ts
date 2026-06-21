import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_sv_3_4: Story = {
  id: "liktallarna_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "De gamla tallarna",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_sv_3_4.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "moss",
  sources: ["4"],
  text: `Titta på de stora tallarna.

De har stått här väldigt, väldigt länge.
Kanske längre än gammelmormor och gammelmorfar tillsammans.

Människor berättar gamla historier om platsen.
Vissa säger att människor stannade här för att vila när de reste långt.

Andra säger att tallarna är magiska.

Kanske viskar de med vinden.

För länge sedan började tallarna brinna.
Elden gjorde dem mörka och sotiga.

Men de står fortfarande kvar.

Starka.
Tysta.
Vaktande över vägen.

Om du tittar noga kanske du kan se hur gamla de verkligen är.`,
  mission: ["Krama ett träd", "Lyssna på vinden", "Hitta något mjukt i naturen"],
  reward: "Tallvän",
};
