import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_sv_3_4: Story = {
  id: "siggeskiosk_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Den lilla gula kiosken",
  subtitle: "Sigges lilla butik",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigges kiosk" },
  audio: "/audio/siggeskiosk_sv_3_4.mp3",
  emoji: "🍦",
  accent: "moss",
  text: "Det fanns en gång en liten gul kiosk här.\n\nDen hade bruna knutar och stod vid vattnet.\n\nEn liten bro ledde fram till dörren.\n\nNär en hög vissla ljöd på fabriken kom arbetarna skyndande hit.\n\nDe köpte något som hette Luffare.\n\nDet var varmt potatismos med ketchup och senap på en mjuk bulle.\n\nGott!\n\nBarn letade efter mynt under bron.\n\nIbland hittade de pengar till godis!\n\nKiosken är borta nu.\n\nBara en betongplatta finns kvar.\n\nMen om du blundar kan du nästan höra visslan.",
  mission: [
    "Hitta betonggrunden",
    "Låtsas köpa en Luffare",
    "Räkna dina steg över betonggrunden",
  ],
  reward: "Lilla kunden",
  sources: ["4", "10"],
};
