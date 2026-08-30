import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_en_adult: Story = {
  id: "edstromsvallen_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "A Field of Ashes, a Community's Heart",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_en_adult.mp3",
  image: "/images/edstromsvallen.jpg",
  emoji: "⚽",
  accent: "water",
  sources: ["1", "6"],
  text: `Edströmsvallen was built on destruction.

In August 1934, the Hälleforsnäs ironworks burned. The fire consumed most of the factory — only the charcoal house and manor survived. What remained was slag, ash, and debris.

Rather than haul it away, the community used it as foundation fill for a sports field. The ground you stand on contains the remains of a catastrophic fire.

Named after Sigfrid Edström, a prominent industrialist and chairman of AB Järnförädling, Edströmsvallen became the home of Hälleforsnäs IF — "Brukets Blå." For decades, this modest field hosted top-tier Swedish bandy.

The 1958 attendance record of 7,826 spectators — more than four times the town's population — speaks to the intensity of local support. Bandy was not just a sport here; it was the community's identity expressed on ice.

The 1978/79 season brought the club within one match of the SM final. They lost the deciding semi-final 2–5 to Brobergs IF in Söderhamn. They never got that close again.

Edströmsvallen never had an artificial frozen rink. In the competitive era of Swedish bandy, that became an insurmountable disadvantage. When natural ice failed, the team travelled to Eskilstuna to play home matches.

On August 29, 2005, the bandy section was dissolved. There were too few players, and cooperation attempts with other clubs had failed.

A bandy museum — created by local enthusiasts — opened in June 2008, preserving the era.

Today the field hosts football and floorball. The grass grows over the ashes. But the story of a town that built a sports ground from its own disaster, and a team that briefly rose to the top of Swedish bandy, is still written into this ground.`,
  mission: [
    "Walk the length of the field and consider what lies beneath",
    "Find a quiet spot and imagine the 1979 semi-final",
    "Reflect on what it means for a small town to sustain — and lose — a top-division sports team",
  ],
  reward: "Brukets Blå Rememberer",
};
