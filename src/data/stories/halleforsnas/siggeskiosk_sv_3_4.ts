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
  text: `Det fanns en gång en liten gul kiosk här.

Den hade bruna knutar och stod vid vattnet.

En liten bro ledde fram till dörren.

När en hög vissla ljöd på fabriken kom arbetarna skyndande hit.

De köpte något som hette Luffare.

Det var varmt potatismos med ketchup och senap på en mjuk bulle.

Gott!

Barn letade efter mynt under bron.

Ibland hittade de pengar till godis!

Kiosken är borta nu.

Bara en betongplatta finns kvar.

Men om du blundar kan du nästan höra visslan.`,
  mission: ["Hitta betonggrunden", "Låtsas köpa en Luffare", "Räkna dina steg över betonggrunden"],
  reward: "Lilla kunden",
  sources: ["4", "10"],
};
