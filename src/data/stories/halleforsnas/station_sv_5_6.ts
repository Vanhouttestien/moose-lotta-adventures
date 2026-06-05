import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_sv_5_6: Story = {
  id: "station_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Stationshuset",
  subtitle: "En byggnad från 1897",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_sv_5_6.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4"],
  text: 'Stationsbyggnaden byggdes 1897.\n\nI över hundra år kom och gick passagerare här.\n\nFolk reste till Eskilstuna, Flen och längre bort.\n\nVaror lastades och lossades.\n\nEtt sågverk låg mittemot och utnyttjade järnvägsförbindelsen.\n\nMen sedan behövde inte järnvägsbolaget byggnaden längre.\n\n2011 revs byggnaden.\n\nIdag finns bara perrongen kvar.\n\nMen tågen stannar fortfarande här varje dag.\n\nOch varje gång du står på den här perrongen står du på en bit av historien.',
  mission: [
    "Peka på var stationsbyggnaden en gång stod",
    "Gör ditt bästa tågvisseljud",
    "Föreställ dig att du är en passagerare som kliver på tåget 1897",
  ],
  reward: "Stationsmästare",
};
