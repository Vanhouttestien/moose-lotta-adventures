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
  audio: "/audio/kolhuset_sv_7_9.mp3",
  emoji: "🔥",
  accent: "ember",
  sources: ["2", "8"],
  text: 'I början av 1800-talet behövde bruket enorma mängder träkol.\n\nKolet framställdes i milor ute i skogarna av torpare och småbönder. På vintern fraktades det hit över is och snö.\n\nByggnaden du tittar på byggdes för att förvara allt.\n\nOch med "allt" menar vi ett helt års förbrukning för masugnen.\n\nGolvytan är närmare 4 000 kvadratmeter.\n\nTaket var när det byggdes Europas största fribärande trätak.\n\nVäggarna är murades av slaggsten — en restprodukt från järnframställningen — med kalkbruk. Om du tittar noga kan du se små kolbitar i putsen.\n\nI augusti 1934 svepte en stor brand genom bruket. Nästan varje byggnad brann ner.\n\nFörutom den här.\n\nOch herrgården.\n\nDet var allt.\n\nInget annat överlevde.\n\nI decennier efteråt användes kolhuset som skräpkammare.\n\nSedan 1992 fick någon en idé.\n\n"Vi gör det till en teater!"\n\nDe rensade ut 175 års skräp och tvättade bort koldamm från väggar, tak och bjälkar.\n\nIdag spelar Kolhusteatern här varje sommar.\n\nLite koldamm finns kvar.\n\nDet är en del av berättelsen.',
  mission: [
    "Leta efter kolbitar i putsen",
    "Räkna fönster högt upp på väggen",
    "Föreställ dig byggnaden full med träkol ända upp till taket",
  ],
  reward: "Kolupptäckare",
};
