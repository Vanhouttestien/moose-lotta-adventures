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
  text: "Den här parken är speciell.\n\nDen var inte alltid en park.\n\nFör länge sedan var det en soptipp.\n\nLastbilar dumpade gammalt fabriksavfall här.\n\nMarken var smutsig och inte säker.\n\nSedan städade människor upp allt.\n\nDe tog bort det dåliga.\n\nDe lade dit ny jord.\n\nDe planterade träd och gräs.\n\nNu är det en vacker park.\n\nDet finns skulpturer att titta på.\n\nDu kan gå och leka här.\n\nParken är uppkallad efter Abine Noij.\n\nHan startade hela bruket för väldigt, väldigt länge sedan!\n\nHan skulle vara glad över att se den här platsen idag.",
  mission: [
    "Hitta en skulptur i parken",
    "Känn på gräset",
    "Leta efter något som en gång var under marken",
  ],
  reward: "Parkutforskare",
};
