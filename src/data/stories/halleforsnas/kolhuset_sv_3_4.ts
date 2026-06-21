import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_sv_3_4: Story = {
  id: "kolhuset_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Det gigantiska kolhuset",
  subtitle: "En väldigt stor byggnad",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_sv_3_4.mp3",
  emoji: "🏭",
  accent: "moss",
  sources: ["2", "8"],
  text: `Titta på den här enorma byggnaden!

Den kallas kolhuset.

För länge sedan var den fylld med träkol.

Träkol är som maten som ugnen åt för att göra järn.

Väggarna är byggda av sten från fabriken.

Du kan till och med se små svarta bitar i väggarna.

Det är kolbitar!

Sedan kom en stor brand som brände många byggnader.

Men den här klarade sig.

Den var för stark.

Nu använder människor den till teater och musik.

Vilken stark byggnad!`,
  mission: [
    "Känn på väggen",
    "Leta efter små svarta bitar i väggen",
    "Gör ett stort ljud som en teaterröst",
  ],
  reward: "Starka Byggaren",
};
