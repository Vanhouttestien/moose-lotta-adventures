import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_en_adult: Story = {
  id: "folketshus_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Labour Movement's Own House",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_en_adult.mp3",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  text: "Folkets Hus in Hälleforsnäs is a concrete manifestation of the Swedish labour movement's capacity for organisation and community building.\n\nThe association was formed on September 29, 1936 by Foundry Workers Local 104 and Metal Workers Local 215. A plot was purchased and expanded to 3,800 square metres by 1939.\n\nThe initial designs from KF's architectural office in Stockholm were rejected by the membership as unrealistic. Instead, an architect from the national People's House organisation was engaged, resulting in a more cost-effective and feasible plan.\n\nThe building decision was made. Construction cost: 1,050,000 SEK. Interior furnishings: 180,000 SEK. Financing came from Mellösa Municipality, state grants, and the association's own funds. Architect firm: K-konsult. Builder: Teodor Andersson.\n\nThe inauguration took place with 100 invited guests. The following day, an open house was held with a free screening of The Wonderful Adventures of Nils.\n\nThroughout its history, Folkets Hus has been run by voluntary engagement. Activities have included cinema, courses, venue rental, and cultural events. The building represents the popular movement tradition that characterised Swedish community building during the 20th century — a reminder that culture and community do not always require commercial incentives.",
  mission: [
    "Note the building's proportions and siting",
    "Reflect on what voluntary work means for a community",
    "Compare with today's need for meeting places",
  ],
  reward: "Popular Movement Historian",
};
