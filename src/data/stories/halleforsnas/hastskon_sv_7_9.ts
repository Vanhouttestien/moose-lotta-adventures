import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_sv_7_9: Story = {
  id: "hastskon_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Stallet som blev hem",
  subtitle: "Hästskons många liv",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_sv_7_9.mp3",
  emoji: "🫎",
  accent: "ember",
  sources: ["4", "9"],
  text: "Den här byggnaden hade fler liv än en katt.\n\nDen byggdes runt 1850 av Lars von Celsing, brukets ägare.\n\nFörst var det ett stall, ett ridhus och ett vagnslider.\n\nHästar stampade och gnäggade här.\n\nVagnar rullade in och ut.\n\nMen den mest kända invånaren var ingen häst.\n\nDet var en tam älg som hette Lotta.\n\nHon var tränad att dra vagnar och slädar — ett arbetsdjur i en stad full av industri.\n\n1920 byggdes byggnaden om helt.\n\nDen blev bostäder för brukets arbetare.\n\nUngkarlar fick små rum.\n\nFamiljer fick lägenheter.\n\nEn matsal öppnades där arbetare kunde äta tillsammans.\n\nOch i flera decennier fanns byns bibliotek i huset.\n\nTänk dig att låna böcker i ett före detta stall!\n\nI 170 år stod denna hästskoformade byggnad här.\n\nSedan den 28 maj 2020 förstördes den av en brand.\n\nIngenting kunde räddas.\n\nMen platsen har köpts och det finns planer på att återställa den.\n\nEn dag kanske ett nytt kapitel börjar.",
  mission: [
    "Hitta konturerna av där byggnaden en gång stod",
    "Lista tre olika användningar den här byggnaden hade",
    "Föreställ dig vad Lotta älgen skulle göra här idag",
  ],
  reward: "Historieupptäckare",
};
