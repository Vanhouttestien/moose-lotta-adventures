import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_sv_adult: Story = {
  id: "station_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Stationen som försvann",
  subtitle: "Hälleforsnäs station",
  location: { ...LOCATIONS.STATION, label: "Hälleforsnäs station" },
  audio: "/audio/station_sv_adult.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4"],
  text: `Vid sekelskiftet var stationen en livlig plats i Hälleforsnäs.

Människor anlände.
Människor reste vidare.
Varor transporterades mot bruket och sågverket.

Järnvägen kopplade det lilla industrisamhället till resten av Sverige.

Från början fanns bara en stationsbyggnad.
Men med tiden byggdes fler hus runt omkring.

Ljuden här måste ha varit helt annorlunda då.

Ånga.
Metall.
Röster.
Skramlande vagnar.
Lokets vissla.

Mitt emot stationen låg sågverket, vilket gjorde transporterna enklare för industrierna som formade hela samhället.

Den gamla stationsbyggnaden revs 2011.

Men tågen stannar fortfarande här.

Plattformen används än idag, även utan den byggnad som en gång definierade stationen.

Stationen har blivit det den egentligen alltid var — en plats där människor anländer och reser vidare.

Ingen byggnad behövs.`,
  mission: [
    "Betrakta järnvägen på säkert avstånd",
    "Föreställ dig platsen för 100 år sedan",
    "Lyssna efter moderna ljud och tänk på de gamla",
  ],
  reward: "Järnvägsvittne",
};
