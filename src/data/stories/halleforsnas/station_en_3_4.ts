import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_3_4: Story = {
  id: "station_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Little Train House",
  subtitle: "Where the Trains Stop",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_en_3_4.mp3",
  emoji: "🚂",
  accent: "bark",
  sources: ["1", "4"],
  text: "Choo choo!\n\nThis is where the trains come and go.\n\nA long time ago, there was a pretty building here.\n\nPeople bought tickets inside.\n\nThey waited for their train.\n\nThen the train came and took them away.\n\nThe building is gone now.\n\nBut the trains still stop here.\n\nListen.\n\nCan you hear a train coming?",
  mission: [
    "Listen for a train sound",
    "Make a train sound — Choo choo!",
    "Pretend you are a train driver",
  ],
  reward: "Train Spotter",
};
