import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_sv_10_12: Story = {
  id: "edstromsvallen_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Isen som smälte bort",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_sv_10_12.mp3",
  image: "/images/edstromsvallen.jpg",
  emoji: "⚽",
  accent: "water",
  sources: ["1", "6"],
  text: `Titta på den här planen.

Den ser ut som en vanlig idrottsplats. Men under ytan består marken av eld.

1934 förstörde en stor brand Hälleforsnäs bruk. Bråten och slaggen användes som fyllning för att bygga Edströmsvallen. Planen fick sitt namn efter Sigfrid Edström — en mäktig man inom AB Järnförädling.

I decennier var det här en av Sveriges stora bandyarenor. Hälleforsnäs IF — kända över hela landet som "Brukets Blå" — spelade i högsta divisionen i 21 säsonger.

Toppen kom 1958, när 7 826 åskådare trängdes för att se en match. Det är fortfarande klubbrekord.

Bästa säsongen var 1978/79. Laget slutade trea i norrserien, slog ut Västerås SK i kvartsfinalen och mötte Brobergs IF i semifinalen. Den avgörande tredje matchen förlorades med 2–5 i Söderhamn. Närmare finalen kom de aldrig.

1981 åkte laget ur högsta divisionen för sista gången. Bristen på en konstfrusen bana var ett problem klubben aldrig kunde lösa.

Den 29 augusti 2005 lades bandysektionen ner. Det fanns inte tillräckligt många spelare kvar.

Bandymuseet öppnade i Hälleforsnäs i juni 2008, initierat av lokala entusiaster. Museet håller berättelsen vid liv.

Idag används planen för fotboll och innebandy. Men om du står här på vintern och frosten täcker marken kan du fortfarande föreställa dig: en frusen plan, tusentals röster, och Brukets Blå som stormar fram över isen.`,
  mission: [
    "Ställ dig mitt på planen",
    "Föreställ dig ljudet av 7 826 personer som hejar",
    "Hitta platsen där bandymålet en gång stod",
    "Fundera på vad som krävs för att hålla ett lag vid liv",
  ],
  reward: "Bandyhistoriker",
};
