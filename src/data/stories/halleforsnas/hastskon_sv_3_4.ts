import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_sv_3_4: Story = {
  id: "hastskon_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Älgen som drog vagnar",
  subtitle: "Lotta på Hästskon",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_sv_3_4.mp3",
  image: "images/stories/hastkon.jpeg",
  emoji: "🫎",
  accent: "moss",
  sources: ["4", "9"],
  text: `Titta på den här platsen.

Den ser ut som en stor hästsko!

För länge sedan bodde en snäll älg som hette Lotta här.

Älgar är vanligtvis vilda.

Men Lotta var annorlunda.

Hon var tränad att dra vagnar och slädar.

Tänk dig en älg som hjälper människor att bära saker!

Senare bodde människor i den här byggnaden istället.

Det fanns kök, sovrum och till och med ett bibliotek.

Sedan en natt kom elden.

Bara ruiner finns kvar nu.

Men berättelsen om Lotta den snälla älgen lever kvar.`,
  mission: [
    "Titta på formen av platsen",
    "Låtsas vara en älg som drar en vagn",
    "Hitta något av metall i närheten",
  ],
  reward: "Älghjälpare",
};
