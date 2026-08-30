import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_en_10_12: Story = {
  id: "edstromsvallen_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "The Ice That Melted Away",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_en_10_12.mp3",
  image: "/images/edstromsvallen.jpg",
  emoji: "⚽",
  accent: "water",
  sources: ["1", "6"],
  text: `Look at this field.

It looks like an ordinary sports ground. But underneath, the ground is made of fire.

In 1934, a massive fire destroyed the Hälleforsnäs ironworks. The rubble and slag were used as fill to build Edströmsvallen. The field was named after Sigfrid Edström — a powerful figure in the company AB Järnförädling.

For decades, this was one of Sweden's great bandy venues. Bandy is like field hockey played on ice with a ball. Hälleforsnäs IF — known across the country as "Brukets Blå" — played in the top division for 21 seasons.

The peak came in 1958, when 7,826 spectators crowded in to watch a match. That's still the club record.

The best season was 1978/79. The team finished third in the northern series, beat Västerås SK in the quarter-final, and faced Brobergs IF in the semi-final. The deciding third match was lost 2–5 in Söderhamn. They never came closer to the final.

In 1981, the team was relegated from the top division for the last time. The lack of an artificial frozen rink was a problem the club could never solve.

On August 29, 2005, the bandy section was disbanded. There were not enough players left.

The bandy museum opened in Hälleforsnäs in June 2008, initiated by local enthusiasts. The museum keeps the story alive.

Today the field is used for football and floorball. But if you stand here in winter and the frost covers the ground, you can still picture it: a frozen field, thousands of voices, and the Brukets Blå charging across the ice.`,
  mission: [
    "Stand at the centre of the field",
    "Imagine the sound of 7,826 people cheering",
    "Find the spot where the bandy goal once stood",
    "Think about what it takes to keep a sports team alive",
  ],
  reward: "Bandy Historian",
};
