import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_en_5_6: Story = {
  id: "edstromsvallen_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Field That Changes With the Seasons",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_en_5_6.mp3",
  emoji: "⚽",
  accent: "bark",
  sources: ["1", "6"],
  text: 'This field has two lives.\n\nIn summer it is green and soft — a football pitch.\n\nIn winter it freezes and becomes a bandy rink.\n\nBandy is like hockey but played on a bigger field with a ball.\n\nThe home team here was called Brukets Blå — "The Mill\'s Blue."\n\nThey were famous!\n\nThe field was built in the 1930s.\n\nUnder the grass, there is something surprising.\n\nAshes and rubble from a big fire that burned the factory in 1934.\n\nThe fire was terrible — but out of it came this field.\n\nA place where children play, teams compete, and the whole town gathers.',
  mission: ["Find the sports field", "Pretend to score a goal", "Imagine the field covered in ice"],
  reward: "Two-Season Athlete",
};
