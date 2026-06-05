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
  audio: "/audio/edstromsvallen_en_3_4.mp3",
  emoji: "⚽",
  accent: "moss",
  sources: ["1", "6"],
  text: "This field has two lives.\n\nIn summer it is green and soft — a football pitch.\n\nIn winter it freezes and becomes a bandy rink.\n\nBandy is like hockey but played on a bigger field with a ball.\n\nThe home team here was called Brukets Blå — \"The Mill's Blue.\"\n\nThey were famous!\n\nThe field was built in the 1930s.\n\nUnder the grass, there is something surprising.\n\nAshes and rubble from a big fire that burned the factory in 1934.\n\nThe fire was terrible — but out of it came this field.\n\nA place where children play, teams compete, and the whole town gathers.",
  mission: ["Stand in the middle of the field", "Pretend to kick a football", "Spin around once"],
  reward: "Sports Field Adventurer",
};
