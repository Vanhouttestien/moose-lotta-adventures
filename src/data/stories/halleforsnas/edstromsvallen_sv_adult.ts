import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_sv_adult: Story = {
  id: "edstromsvallen_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "En plan av aska, ett samhälles hjärta",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_sv_adult.mp3",
  emoji: "⚽",
  accent: "water",
  sources: ["1", "6"],
  text: 'Edströmsvallen byggdes på förstörelse.\n\nI augusti 1934 brann Hälleforsnäs bruk. Elden förstörde större delen av fabriken — bara kolhuset och herrgården överlevde. Det som blev kvar var slagg, aska och bråte.\n\nIstället för att frakta bort det använde samhället det som fyllnadsmaterial för en idrottsplan. Marken du står på innehåller resterna av en katastrofal brand.\n\nUppkallad efter Sigfrid Edström, en framstående industriman och ordförande i AB Järnförädling, blev Edströmsvallen hemmaplan för Hälleforsnäs IF — "Brukets Blå." I decennier var denna anspråkslösa plan värd för svensk elitbandy.\n\nPublikrekordet från 1958 — 7 826 åskådare, mer än fyra gånger byns befolkning — vittnar om intensiteten i det lokala engagemanget. Bandy var inte bara en sport här; det var samhällets identitet uttryckt på is.\n\nSäsongen 1978/79 förde klubben inom en match från SM-finalen. Man förlorade den avgörande semifinalen med 2–5 mot Brobergs IF i Söderhamn. Närmare kom man aldrig.\n\nEdströmsvallen hade aldrig en konstfrusen bandybana. I den konkurrensutsatta svenska bandyn blev det ett oöverstigligt handikapp. När naturisen inte räckte till reste laget till Eskilstuna för att spela hemmamatcher.\n\nDen 29 augusti 2005 upplöstes bandysektionen. Det fanns för få spelare kvar, och samarbetsförsök med andra klubbar hade misslyckats.\n\nEtt bandymuseum — skapat av lokala entusiaster — öppnade i juni 2008 och bevarar epoken.\n\nIdag används planen för fotboll och innebandy. Gräset växer över askan. Men berättelsen om en by som byggde en idrottsplats av sin egen katastrof, och ett lag som nådde toppen av svensk bandy, är fortfarande skriven i marken.',
  mission: [
    "Gå planens längd och fundera på vad som finns under ytan",
    "Hitta en lugn plats och föreställ dig semifinalen 1979",
    "Reflektera över vad det innebär för en liten by att ha — och förlora — ett elitlag",
  ],
  reward: "Brukets Blå-minnare",
};
