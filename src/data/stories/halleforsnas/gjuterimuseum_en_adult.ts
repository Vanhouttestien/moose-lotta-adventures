import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_adult: Story = {
  id: "gjuterimuseum_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "Iron and Fire",
  subtitle: "The Foundry",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_adult.mp3",
  image: "images/stories/gjuterimuseet.jpeg",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `This is where iron shaped Hälleforsnäs.

The sound must have been overwhelming.

Hammering metal.
Fire.
Steam.
Workers shouting across the factory floor.

For generations, people worked here at the mill.

The heat from the furnaces could be felt far outside the buildings.
And everywhere there was soot, metal dust, and the smell of oil.

The work was hard.
But the mill also gave people homes, food, and community.

The entire village grew around iron.

Today, much of it is gone.
The machines have fallen silent.

But if you close your eyes for a moment…

you can almost hear the factory waking up again.`,
  mission: [
    "Listen for metallic sounds",
    "Find something made of iron",
    "Imagine working here 100 years ago",
  ],
  reward: "Iron Walker",
};
