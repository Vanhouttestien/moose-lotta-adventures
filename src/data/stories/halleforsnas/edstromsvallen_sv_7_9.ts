import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_sv_7_9: Story = {
  id: "edstromsvallen_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Byggd på brand",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_sv_7_9.mp3",
  image: "/images/edstromsvallen.jpg",
  emoji: "⚽",
  accent: "bark",
  sources: ["1", "6"],
  text: `I augusti 1934 förstörde en brand större delen av järnverket.

Bara kolhuset och herrgården överlevde.

Resten var bråte, aska och förvriden metall.

Men folket i Hälleforsnäs såg något i förstörelsen.

De tog slaggen, bråten och askan från branden och använde det som fyllning.

Ovanpå byggde de en idrottsplan.

De döpte den efter Sigfrid Edström, en industriman som arbetade vid bruket.

Edströmsvallen blev hjärtat av byns idrottsliv.

På sommaren fotboll.
På vintern bandy.

Den lokala klubben, Hälleforsnäs IF — med smeknamnet Brukets Blå — spelade här.

1957 kom 7 826 personer för att se en bandymatch.

Det var fler människor än hela byns befolkning.

Lagets bästa säsong var 1978/79, när de nådde semifinal i svenska mästerskapet.

Men utan en konstfrusen bandybana hade laget svårt att hänga med.

2005 lades bandysektionen ner.

Idag används planen fortfarande för fotboll och innebandy.

Men om du går över gräset går du på askan från det gamla bruket.`,
  mission: [
    "Gå tvärs över planen",
    "Föreställ dig 7 826 personer som hejar",
    "Hitta en plats där du ser hela planen",
  ],
  reward: "Historia i marken",
};
