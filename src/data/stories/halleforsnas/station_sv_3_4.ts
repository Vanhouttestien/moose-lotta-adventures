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
  text: "Tuff tuff!\n\nDet här är där tågen kommer och går.\n\nFör länge sedan fanns det en fin liten byggnad här.\n\nFolk köpte biljetter där inne.\n\nDe väntade på sitt tåg.\n\nSedan kom tåget och tog iväg dem.\n\nByggnaden är borta nu.\n\nMen tågen stannar fortfarande här.\n\nLyssna.\n\nHör du ett tåg som kommer?",
  mission: [
    "Lyssna efter tågljud",
    "Gör ett tågljud — Tuff tuff!",
    "Låtsas att du är tågförare",
  ],
  reward: "Tågspanare",
};
