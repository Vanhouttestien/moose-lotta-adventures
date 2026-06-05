import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_sv_7_9: Story = {
  id: "test_forest_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Skogens hemliga språk",
  subtitle: "Skogssignalen",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Skogssignalen" },
  audio: "/audio/test_forest_sv_7_9.mp3",
  emoji: "📡",
  accent: "moss",
  text: "Mitt i skogen finns en plats där signaler samlas.\n\nEn punkt där människor har kunnat skicka och ta emot meddelanden i generationer.\n\nLångt innan internet och mobiler använde bruksarbetarna skogen för att kommunicera. Från den här kullen kunde man se hela bruksområdet — och med hjälp av eldar eller signalflaggor skicka meddelanden snabbt över dalen.\n\nIdag är signalerna osynliga. Radiovågor, wifi, mobilsignaler — de passerar genom luften utan att vi ser dem.\n\nMen den här platsen har fortfarande något speciellt.\n\nStå stilla en stund.\nKänner du det? Som om skogen lyssnar.\n\nPrecis som forna tiders budbärare använde den här punkten för att sända sina meddelanden, så står du nu på samma plats — redo att ta emot.\n\nKanske kan du uppfatta något som andra missar.",
  mission: [
    "Stå stilla vid signalpunkten och lyssna",
    "Hitta utsikten över bruket",
    "Fundera: hur skulle du skicka ett meddelande utan ord?",
  ],
  reward: "Skogsbudbärare",
  sources: [],
};
