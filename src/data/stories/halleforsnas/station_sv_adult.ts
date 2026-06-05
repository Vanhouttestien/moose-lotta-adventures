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
  text: "Vid sekelskiftet var stationen en livlig plats i Hälleforsnäs.\n\nMänniskor anlände.\nMänniskor reste vidare.\nVaror transporterades mot bruket och sågverket.\n\nJärnvägen kopplade det lilla industrisamhället till resten av Sverige.\n\nFrån början fanns bara en stationsbyggnad.\nMen med tiden byggdes fler hus runt omkring.\n\nLjuden här måste ha varit helt annorlunda då.\n\nÅnga.\nMetall.\nRöster.\nSkramlande vagnar.\nLokets vissla.\n\nMitt emot stationen låg sågverket, vilket gjorde transporterna enklare för industrierna som formade hela samhället.\n\nDen gamla stationsbyggnaden revs 2011.\n\nÄndå fortsätter järnvägen genom landskapet.\n\nSom om samhället fortfarande minns riktningen människor en gång reste — mot arbete, mot hemmet eller mot något helt annat.",
  mission: [
    "Betrakta järnvägen på säkert avstånd",
    "Föreställ dig platsen för 100 år sedan",
    "Lyssna efter moderna ljud och tänk på de gamla",
  ],
  reward: "Järnvägsvittne",
};
