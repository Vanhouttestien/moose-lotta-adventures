import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_sv_adult_memory: Story = {
  id: "kolhuset_sv_adult_memory",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Huset som vägrade dö",
  subtitle: "Kolhuset",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_sv_adult_memory.mp3",
  emoji: "🏭",
  accent: "shadow",
  sources: ["2", "8"],
  text: `Kolhuset byggdes för att lagra enorma mängder träkol.

Kolet kom från skogarna runt Hälleforsnäs.

Människor arbetade i kyla, rök och mörker för att hålla bruket levande.

Under en tid var detta en av Europas största byggnader med fribärande trätak.

Ett industriellt jättedjur av trä, sten och sot.

Sedan förändrades allt.

Bruket tystnade.
Många byggnader försvann.

Men Kolhuset blev kvar.

Övergivet.
Dammigt.
Nästan bortglömt.

Tills människor började fylla det med något helt annat.

Musik.
Teater.
Skratt.
Applåder.

Det är märkligt hur vissa byggnader överlever genom att förändras.

Som om väggarna själva vägrar ge upp.`,
  mission: [
    "Titta upp mot det stora taket",
    "Lyssna efter ekot i byggnaden",
    "Fundera över varför vissa platser får nytt liv",
  ],
  reward: "Minnesväktare",
};
