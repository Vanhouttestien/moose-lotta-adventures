import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_sv_10_12: Story = {
  id: "kolhuset_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Byggnaden som inte ville brinna",
  subtitle: "Kolhuset genom århundradena",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_sv_10_12.mp3",
  emoji: "🏛️",
  accent: "shadow",
  sources: ["2", "8"],
  text: "Byggd i början av 1800-talet var den konstruerad för ett enda syfte: att lagra träkol.\n\nKolet framställdes i milor ute i skogarna av torpare och småbönder. På vintern transporterades det över frusna sjöar och snötäckta vägar till den här byggnaden. Kolhuset var tillräckligt stort för att rymma ett helt års bränsleförbrukning för masugnen.\n\nMed närmare 4 000 kvadratmeter golvyta och ett fribärande trätak på cirka 18 meter var det den största konstruktionen av sitt slag i Europa när det byggdes.\n\nVäggarna är murades av slaggsten — en biprodukt från järnframställningen — kalkputsade och inpyrda med synliga kolbitar. Den övre fasaden är av tjärat trä med små fönster. Taket är av trä täckt med tjärpapp.\n\nI augusti 1934 förstörde en katastrofal brand praktiskt taget alla byggnader på bruksområdet. Bara två överlevde: herrgården och kolhuset.\n\nEfter brukets nedgång användes byggnaden som förråd och så småningom som allmän skräpkammare.\n\n1992 föddes idén att förvandla det till en teater. En massiv rengöring inleddes: 175 års koldamm tvättades bort från varje yta. De ursprungliga slaggstensväggarna och trätakstolarna blottlades.\n\nSedan 1995 spelar Kolhusteatern sommarföreställningar här. Lite koldamm finns kvar — medvetet bevarat som en påminnelse om byggnadens ursprung.\n\nKolhuset är ett av Sveriges bäst bevarade industriella kolhus och ett sällsynt exempel på en byggnad som överlevt både industriell nedgång och brand.",
  mission: [
    "Studera väggkonstruktionen — slaggsten, puts, kolbitar",
    "Uppskatta takhöjden från marken",
    "Diskutera: vad gör en byggnad värd att bevara?",
  ],
  reward: "Industriarkeolog",
};
