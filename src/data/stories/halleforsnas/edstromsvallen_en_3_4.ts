import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_en_3_4: Story = {
  id: "edstromsvallen_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Field That Rose From Ashes",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  image: "/images/edstromsvallen.jpg",
  audio: "/audio/edstromsvallen_en_3_4.mp3",
  emoji: "⚽",
  accent: "moss",
  sources: ["1", "6"],
  text: `This field has two lives.

In summer it is green and soft — a football pitch.

In winter it freezes and becomes a bandy rink.

Bandy is like hockey but played on a bigger field with a ball.

The home team here was called Brukets Blå — "The Mill's Blue."

They were famous!

The field was built in the 1930s.

Under the grass, there is something surprising.

Ashes and rubble from a big fire that burned the factory in 1934.

The fire was terrible — but out of it came this field.

A place where children play, teams compete, and the whole town gathers.`,
  mission: ["Stand in the middle of the field", "Pretend to kick a football", "Spin around once"],
  reward: "Sports Field Adventurer",
};
