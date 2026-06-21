import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_sv_7_9: Story = {
  id: "gjuterimuseum_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Museet som minns bruket",
  subtitle: "Gjuterimuseet",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Gjuterimuseum" },
  audio: "/audio/gjuterimuseum_sv_7_9.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Välkommen till Hälleforsnäs Gjuterimuseum — ett arbetslivsmuseum som berättar historien om bruket och människorna som arbetade här.

I över 300 år tillverkades järnföremål här: allt från gjutjärnskaminer och brunnslock till maskinkomponenter som exporterades över hela världen.

Gjuteriet var inte bara en arbetsplats. Det var själva navet i samhället. Hela Hälleforsnäs växte fram kring industrin — bostäder, järnväg, skolor och affärer.

Inne i museet kan du se hur det verkligen såg ut. Verktyg och arbetsplatser från olika epoker. Fotografier som visar människor i arbete. Och det orörda laboratoriet.

Det finns också en utställning om "Brukets blå" — Hälleforsnäs berömda bandylag.

Museet drivs av en ideell förening med omkring 100 medlemmar. Hit kan du boka guidade turer med människor som faktiskt arbetat här.

Här är järnet och elden inte bara historia. Det lever fortfarande i berättelserna.`,
  mission: [
    "Gå in i museet och titta på verktygen",
    "Hitta laboratoriet — vad är speciellt med det?",
    "Fråga en guide om hur det var att arbeta här",
  ],
  reward: "Brukskännare",
};
