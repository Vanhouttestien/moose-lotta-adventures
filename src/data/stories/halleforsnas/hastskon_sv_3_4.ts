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
  emoji: "🫎",
  accent: "moss",
  sources: ["4", "9"],
  text: "Titta på den här platsen.\n\nDen ser ut som en stor hästsko!\n\nFör länge sedan bodde en snäll älg som hette Lotta här.\n\nÄlgar är vanligtvis vilda.\n\nMen Lotta var annorlunda.\n\nHon var tränad att dra vagnar och slädar.\n\nTänk dig en älg som hjälper människor att bära saker!\n\nSenare bodde människor i den här byggnaden istället.\n\nDet fanns kök, sovrum och till och med ett bibliotek.\n\nSedan en natt kom elden.\n\nBara ruiner finns kvar nu.\n\nMen berättelsen om Lotta den snälla älgen lever kvar.",
  mission: [
    "Titta på formen av platsen",
    "Låtsas vara en älg som drar en vagn",
    "Hitta något av metall i närheten",
  ],
  reward: "Älghjälpare",
};
