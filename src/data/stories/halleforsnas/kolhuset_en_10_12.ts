import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_en_10_12: Story = {
  id: "kolhuset_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "The Building That Wouldn't Burn",
  subtitle: "Kolhuset Through the Centuries",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_en_10_12.mp3",
  emoji: "🏛️",
  accent: "shadow",
  sources: ["2", "8"],
  text: "Built in the early 1800s, it was designed for one purpose: storing charcoal.\n\nThe charcoal was produced in forest kilns (milor) by local crofters and farmers. In winter, it was transported across frozen lakes and snow-packed roads to this building. The Kolhuset was large enough to hold a full year's fuel supply for the blast furnace.\n\nAt nearly 4,000 square metres with a free-span wooden roof of about 18 metres, it was the largest structure of its kind in Europe when built.\n\nThe walls are made of slag stone — a byproduct of iron smelting — lime-plastered and studded with visible charcoal fragments. The upper facade is tarred wood with small windows. The roof is wood covered with tar paper.\n\nIn August 1934, a catastrophic fire destroyed virtually every building on the bruk site. Only two survived: the manor house and the charcoal house.\n\nAfter the bruk's decline, the building was used as storage and eventually a general junk room.\n\nIn 1992, the idea emerged to transform it into a theatre. A massive cleanup began: 175 years of coal dust was washed from every surface. The original slag-stone walls and wooden roof trusses were revealed.\n\nSince 1995, Kolhusteatern has performed summer theatre here. Some coal dust remains — deliberately kept as a reminder of the building's origins.\n\nThe Kolhuset is one of Sweden's best-preserved industrial charcoal stores, and a rare example of a building that has survived both industrial decline and fire.",
  mission: [
    "Examine the wall construction — slag stone, plaster, coal bits",
    "Estimate the height of the roof from the ground",
    "Discuss: what makes a building worth preserving?",
  ],
  reward: "Industrial Archaeologist",
};
