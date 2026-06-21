import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_en_10_12: Story = {
  id: "folketshus_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "A House Built by Community",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_en_10_12.mp3",
  image: "/images/stories/folketshus.jpeg",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  text: `In the middle of Hälleforsnäs stands a building built by workers, for workers.

The People's House movement grew in Sweden during the early 1900s as a response to the working class lacking their own meeting spaces. In Hälleforsnäs, the association was formed in 1936 by two trade unions: Foundry Workers Local 104 and Metal Workers Local 215.

A plot of land was purchased. The members had high ambitions, but the initial designs from the KF architects' office in Stockholm were rejected as "an architectural fantasy impossible to finance in a community the size of Hälleforsnäs." The national People's House organisation helped them develop more realistic plans.

The decision to build was made. Cost: 1,050,000 SEK. Interior furnishings: another 180,000 SEK. Funding came from Mellösa Municipality, state grants, and the association's own funds.

The house was inaugurated with 100 invited guests. The following day, an open house was held with a free film screening — The Wonderful Adventures of Nils.

Since then, Folkets Hus has been run by volunteers. Films have been shown, courses held, dances and parties organised. The building stands as proof of what a community can achieve when it comes together — without profit motive, simply with the will to create a place for everyone.`,
  mission: [
    "Study the building's architecture — when was it built?",
    "Think about what you would organise here",
    "Find out what happens at Folkets Hus today",
  ],
  reward: "People's House Ambassador",
};
