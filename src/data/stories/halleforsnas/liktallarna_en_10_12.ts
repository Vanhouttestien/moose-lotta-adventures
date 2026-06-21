import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_10_12: Story = {
  id: "liktallarna_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "Trees as Witnesses",
  subtitle: "The Secret History of the Corpse Pines",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_en_10_12.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "shadow",
  sources: ["4"],
  text: `Along Flensvägen in northern Hälleforsnäs stand some of Södermanland's oldest trees: the Liktallarna.

They are more than 400 years old. They were here long before the ironworks was founded in 1659, long before the railway arrived in 1876. They have watched Hälleforsnäs grow from a small mill community into a town with railways, factories, and housing estates.

The name "Liktallar" hints at a darker story. According to local legend, the trees marked the outer boundary of the community — a place where executions were carried out. Another story says funeral wagons on their way to the cemetery used to stop here to rest; the horses needed a break after long journeys over poor roads.

Regardless of which legend is true, the place has a palpable atmosphere. Quiet. Heavy. As if the trees themselves carry memories.

In many Swedish folklore traditions, ancient trees were believed to have special powers — they could protect places or store the memories of people who passed by.

In the 1980s or 1990s, the trees were badly damaged by fire. Their trunks are still blackened and twisted. But they survived.

Today, a memorial plaque with a charcoal drawing by Edvin Axelsson from 1966 marks the spot — as if someone wanted to help the trees never be forgotten.`,
  mission: [
    "Examine the fire damage on the trunks",
    "Read the text on the memorial plaque",
    "Consider: why are they called Corpse Pines?",
  ],
  reward: "Time Witness",
};
