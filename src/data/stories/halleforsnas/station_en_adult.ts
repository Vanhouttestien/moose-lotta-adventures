import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_adult: Story = {
  id: "station_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Station That Disappeared",
  subtitle: "Hälleforsnäs Station",
  location: { ...LOCATIONS.STATION, label: "Hälleforsnäs Station" },
  audio: "/audio/station_en_adult.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4"],
  text: "At the turn of the century, the station was a busy place in Hälleforsnäs.\n\nPeople arrived.\nPeople left.\nGoods traveled through the village toward the ironworks and sawmill.\n\nThe railway connected this small industrial community to the rest of Sweden.\n\nAt first there was only one station building.\nBut over time, more side buildings appeared.\n\nThe soundscape here would once have been completely different.\n\nSteam.\nMetal.\nVoices.\nWooden carts.\nThe sharp whistle of trains.\n\nAcross from the station stood the sawmill, making transport easier for the industries that shaped the entire village.\n\nThe old station building was demolished in 2011.\n\nAnd yet the railway still cuts through the landscape.\n\nAs if the village remembers the direction people once traveled — toward work, toward home, toward somewhere else entirely.",
  mission: [
    "Observe the railway from a safe distance, or imagine a train passing",
    "Look across the landscape from a safe spot",
    "Think about where people here once traveled",
  ],
  reward: "Railway Witness",
};
