import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_sv_5_6: Story = {
  id: "test_forest_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Den hemliga signalen",
  subtitle: "Skogssignalen",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Skogssignalen" },
  audio: "/audio/test_forest_sv_5_6.mp3",
  emoji: "📡",
  accent: "moss",
  text: "Titta! Där borta i skogen finns något märkligt.\n\nEn signal. En punkt där skogen pratar med omvärlden.\n\nFör länge sedan, innan mobiltelefoner fanns, använde människor andra sätt att skicka meddelanden.\n\nRöksignaler.\nSpeglar som blinkade i solen.\nFlaggor på stänger.\n\nIdag finns det moderna signaler överallt. Men den här platsen är annorlunda.\n\nHär i skogen, omgiven av träd och tystnad, känns signalen nästan magisk.\n\nKanske är det skogen själv som skickar ett meddelande.\n\nVad tror du den vill säga?\n\nLyssna noga. Kanske får du svaret.",
  mission: ["Hitta signalpunkten", "Lyssna på skogen i 10 sekunder", "Rita en signal i luften"],
  reward: "Signalspanare",
  sources: [],
};
