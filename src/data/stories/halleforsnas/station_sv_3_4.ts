import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_sv_3_4: Story = {
  id: "station_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Det lilla tåghuset",
  subtitle: "Där tågen stannar",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_sv_3_4.mp3",
  emoji: "🚂",
  accent: "bark",
  sources: ["1", "4"],
  text: `Tuff tuff!

Det här är där tågen kommer och går.

För länge sedan fanns det en fin liten byggnad här.

Folk köpte biljetter där inne.

De väntade på sitt tåg.

Sedan kom tåget och tog iväg dem.

Byggnaden är borta nu.

Men tågen stannar fortfarande här.

Lyssna.

Hör du ett tåg som kommer?`,
  mission: ["Lyssna efter tågljud", "Gör ett tågljud — Tuff tuff!", "Låtsas att du är tågförare"],
  reward: "Tågspanare",
};
