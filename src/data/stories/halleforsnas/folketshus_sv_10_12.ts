import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_sv_10_12: Story = {
  id: "folketshus_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Ett hus byggt av gemenskap",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_sv_10_12.mp3",
  image: "/images/stories/folketshus.jpeg",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  text: 'Mitt i Hälleforsnäs står en byggnad som byggdes av arbetare, för arbetare.\n\nFolkets Hus-rörelsen växte fram i Sverige under tidigt 1900-tal som en reaktion på att arbetarklassen saknade egna samlingslokaler. I Hälleforsnäs bildades föreningen 1936 av två fackföreningar: Gjutarnas avd. 104 och Metalls avd. 215.\n\nEn tomt köptes in. Medlemmarna hade höga ambitioner, men ritningarna från KF:s arkitektkontor i Stockholm ansågs vara "ett arkitektoniskt hugskott omöjligt att finansiera i ett samhälle av Hälleforsnäs storlek." De fick hjälp av Folkets Hus Riksorganisation att ta fram mer realistiska planer.\n\nBeslutet att bygga togs. Kostnaden: 1 050 000 SEK. Inredning: ytterligare 180 000 SEK. Pengarna kom från Mellösa kommun, statliga bidrag och föreningens egna medel.\n\nHuset invigdes med 100 inbjudna gäster. Dagen därpå hölls öppet hus för allmänheten med fri filmvisning — Nils Holgerssons underbara resa.\n\nSedan dess har Folkets Hus drivits av ideella krafter. Här har det visats bio, hållits kurser, dansats och arrangerats fester. Byggnaden är ett bevis på vad en gemenskap kan åstadkomma när den går samman — utan vinstintresse, bara med viljan att skapa en plats för alla.',
  mission: [
    "Studera byggnadens arkitektur — när byggdes den?",
    "Fundera: vad skulle du vilja arrangera här?",
    "Ta reda på vad som händer i Folkets Hus idag",
  ],
  reward: "Folkets Hus-ambassadör",
};
