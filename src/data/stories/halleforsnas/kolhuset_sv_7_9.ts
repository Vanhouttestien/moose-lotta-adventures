import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_sv_7_9: Story = {
  id: "kolhuset_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Eld, kol och en hemlig teater",
  subtitle: "Berättelsen om Kolhuset",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  ambience: "fire",
  audio: "/audio/kolhuset_sv_7_9.mp3",
  emoji: "🔥",
  accent: "ember",
  sources: ["2", "8"],
  text: `I början av 1800-talet behövde bruket enorma mängder träkol.

Kolet framställdes i milor ute i skogarna av torpare och småbönder. På vintern fraktades det hit över is och snö.

Byggnaden du tittar på byggdes för att förvara allt.

Och med "allt" menar vi ett helt års förbrukning för masugnen.

Golvytan är närmare 4 000 kvadratmeter.

Taket var när det byggdes Europas största fribärande trätak.

Väggarna är murades av slaggsten — en restprodukt från järnframställningen — med kalkbruk. Om du tittar noga kan du se små kolbitar i putsen.

I augusti 1934 svepte en stor brand genom bruket. Nästan varje byggnad brann ner.

Förutom den här.

Och herrgården.

Det var allt.

Inget annat överlevde.

I decennier efteråt användes kolhuset som skräpkammare.

Sedan 1992 fick någon en idé.

"Vi gör det till en teater!"

De rensade ut 175 års skräp och tvättade bort koldamm från väggar, tak och bjälkar.

Idag spelar Kolhusteatern här varje sommar.

Lite koldamm finns kvar.

Det är en del av berättelsen.`,
  mission: [
    "Leta efter kolbitar i putsen",
    "Räkna fönster högt upp på väggen",
    "Föreställ dig byggnaden full med träkol ända upp till taket",
  ],
  reward: "Kolupptäckare",
};
