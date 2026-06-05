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
  emoji: "⚽",
  accent: "bark",
  sources: ["1", "6"],
  text: "I augusti 1934 förstörde en brand större delen av järnverket.\n\nBara kolhuset och herrgården överlevde.\n\nResten var bråte, aska och förvriden metall.\n\nMen folket i Hälleforsnäs såg något i förstörelsen.\n\nDe tog slaggen, bråten och askan från branden och använde det som fyllning.\n\nOvanpå byggde de en idrottsplan.\n\nDe döpte den efter Sigfrid Edström, en industriman som arbetade vid bruket.\n\nEdströmsvallen blev hjärtat av byns idrottsliv.\n\nPå sommaren fotboll.\nPå vintern bandy.\n\nDen lokala klubben, Hälleforsnäs IF — med smeknamnet Brukets Blå — spelade här.\n\n1957 kom 7 826 personer för att se en bandymatch.\n\nDet var fler människor än hela byns befolkning.\n\nLagets bästa säsong var 1978/79, när de nådde semifinal i svenska mästerskapet.\n\nMen utan en konstfrusen bandybana hade laget svårt att hänga med.\n\n2005 lades bandysektionen ner.\n\nIdag används planen fortfarande för fotboll och innebandy.\n\nMen om du går över gräset går du på askan från det gamla bruket.",
  mission: [
    "Gå tvärs över planen",
    "Föreställ dig 7 826 personer som hejar",
    "Hitta en plats där du ser hela planen",
  ],
  reward: "Historia i marken",
};
