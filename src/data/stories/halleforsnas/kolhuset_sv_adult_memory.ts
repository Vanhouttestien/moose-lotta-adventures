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
  text: "Kolhuset byggdes för att lagra enorma mängder träkol.\n\nKolet kom från skogarna runt Hälleforsnäs.\n\nMänniskor arbetade i kyla, rök och mörker för att hålla bruket levande.\n\nUnder en tid var detta en av Europas största byggnader med fribärande trätak.\n\nEtt industriellt jättedjur av trä, sten och sot.\n\nSedan förändrades allt.\n\nBruket tystnade.\nMånga byggnader försvann.\n\nMen Kolhuset blev kvar.\n\nÖvergivet.\nDammigt.\nNästan bortglömt.\n\nTills människor började fylla det med något helt annat.\n\nMusik.\nTeater.\nSkratt.\nApplåder.\n\nDet är märkligt hur vissa byggnader överlever genom att förändras.\n\nSom om väggarna själva vägrar ge upp.",
  mission: [
    "Titta upp mot det stora taket",
    "Lyssna efter ekot i byggnaden",
    "Fundera över varför vissa platser får nytt liv",
  ],
  reward: "Minnesväktare",
};
