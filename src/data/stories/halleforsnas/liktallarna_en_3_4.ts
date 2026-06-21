import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_3_4: Story = {
  id: "liktallarna_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Old Pine Trees",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_en_3_4.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "moss",
  sources: ["4"],
  text: `Look at the giant pine trees.

They have stood here for a very, very long time.
Maybe longer than great-grandparents together.

People tell old stories about this place.
Some say travelers once stopped here to rest.

Others say the trees are magical.

Maybe they whisper with the wind.

Long ago, the trees were touched by fire.
The flames made them dark and smoky.

But they are still standing.

Strong.
Quiet.
Watching over the road.

If you look carefully, you might see just how old they really are.`,
  mission: ["Hug a tree", "Listen to the wind", "Find something soft in nature"],
  reward: "Pine Tree Friend",
};
