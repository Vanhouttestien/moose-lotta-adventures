import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_5_6: Story = {
  id: "station_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Station House",
  subtitle: "A Building from 1897",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_en_5_6.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4"],
  text: 'The station building was built in 1897.\n\nFor over a hundred years, passengers arrived and departed here.\n\nPeople travelled to Eskilstuna, Flen, and beyond.\n\nGoods were loaded and unloaded.\n\nA sawmill stood opposite, making the most of the railway connection.\n\nBut then the railway company did not need the building anymore.\n\nIn 2011, the building was torn down.\n\nToday, only the platform remains.\n\nBut trains still stop here every day.\n\nAnd every time you stand on this platform, you are standing on a piece of history.',
  mission: [
    "Point to where the station building once stood",
    "Make your best train whistle sound",
    "Imagine you are a passenger boarding the train in 1897",
  ],
  reward: "Station Master",
};
