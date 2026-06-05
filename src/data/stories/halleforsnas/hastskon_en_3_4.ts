import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_en_3_4: Story = {
  id: "hastskon_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Moose That Pulled Wagons",
  subtitle: "Lotta at Hästskon",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_en_3_4.mp3",
  emoji: "🫎",
  accent: "moss",
  sources: ["4", "9"],
  text: "Look at this place.\n\nIt looks like a big horseshoe!\n\nA long time ago, a friendly moose named Lotta lived here.\n\nMoose are usually wild.\n\nBut Lotta was different.\n\nShe was trained to pull wagons and sleds.\n\nImagine a moose helping people carry things!\n\nLater, people lived in this building instead.\n\nThere were kitchens, bedrooms, and even a library.\n\nThen one night, fire came.\n\nOnly ruins are left now.\n\nBut the story of Lotta the friendly moose is still here.",
  mission: [
    "Look at the shape of the space",
    "Pretend to be a moose pulling a wagon",
    "Find something metal nearby",
  ],
  reward: "Moose Helper",
};
