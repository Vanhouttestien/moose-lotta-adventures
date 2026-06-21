import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_sv_3_4: Story = {
  id: "abinenoijs_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Parken som nästan var en soptipp",
  subtitle: "Abine Noijs Park",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_sv_3_4.mp3",
  emoji: "🌳",
  accent: "moss",
  sources: ["2", "4", "7"],
  text: `Den här parken är speciell.

Den var inte alltid en park.

För länge sedan var det en soptipp.

Lastbilar dumpade gammalt fabriksavfall här.

Marken var smutsig och inte säker.

Sedan städade människor upp allt.

De tog bort det dåliga.

De lade dit ny jord.

De planterade träd och gräs.

Nu är det en vacker park.

Det finns skulpturer att titta på.

Du kan gå och leka här.

Parken är uppkallad efter Abine Noij.

Han startade hela bruket för väldigt, väldigt länge sedan!

Han skulle vara glad över att se den här platsen idag.`,
  mission: [
    "Hitta en skulptur i parken",
    "Känn på gräset",
    "Leta efter något som en gång var under marken",
  ],
  reward: "Parkutforskare",
};
