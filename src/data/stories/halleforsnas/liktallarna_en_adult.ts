import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_adult: Story = {
  id: "liktallarna_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Four-Hundred-Year-Old Guardians",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_en_adult.mp3",
  emoji: "🌲",
  accent: "ember",
  sources: ["4"],
  text: "Along Flensvägen stand some of the oldest pine trees in Södermanland: the Liktallarna, estimated to be over 400 years old.\n\nThe trees' age means they predate the ironworks era entirely. They have witnessed the full arc of Hälleforsnäs history: from Abine Noij's establishment of the blast furnace in 1659, through 19th-century industrialisation, to the mill's closure in 1997 and the area's ongoing transformation.\n\nThe name \"Liktallarna\" (\"Corpse Pines\") has a debated origin. One interpretation is that the area marked the outer boundary of the settlement where executions were carried out. Another legend states that funeral processions from outlying areas stopped here to rest on their way to Hälleforsnäs cemetery — the horses needed a break after transporting coffins over poor roads.\n\nBoth interpretations are documented in local history literature, but neither has been definitively confirmed.\n\nThe site has a distinctive atmosphere — quiet, almost sacred. Its weight comes in part from Swedish folk belief, where ancient trees were thought to carry the memory of places and the people who passed through.\n\nIn the 1980s or 1990s, the trees were severely damaged by fire. They survived, but their trunks still bear visible burn marks. A memorial plaque with a charcoal drawing by Edvin Axelsson (1966) stands nearby.\n\nThe Liktallarna represent a rare example of a living cultural heritage — trees that have not only survived but carry multiple layers of local history, from folklore to the rise of an industrial community.",
  mission: [
    "Document the fire damage on the trunks",
    "Read Edvin Axelsson's memorial plaque",
    "Reflect on why certain places evoke stronger emotions than others",
  ],
  reward: "Historian of the Pines",
};
