import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_sv_10_12: Story = {
  id: "test_forest_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Punkten där signalerna möts",
  subtitle: "Skogssignalen",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Skogssignalen" },
  audio: "/audio/test_forest_sv_10_12.mp3",
  emoji: "📡",
  accent: "moss",
  text: 'I skogsområdet mitt emot bruket finns en punkt som har använts för kommunikation i generationer.\n\nFrån den här platsen har man fri sikt över stora delar av Hälleforsnäs — från Brukssjön i söder till bruksområdet i norr. Det är lätt att förstå varför den här kullen valdes som signalpunkt.\n\nPå brukets tid användes optiska signaler för att koordinera arbetet. Eldar, flaggor och röksignaler var snabbaste sättet att skicka meddelanden över avstånd innan telegraf och telefon blev vanliga.\n\nIdag passerar en annan typ av signaler genom platsen — radiovågor, mobilsignaler, och kanske till och med GPS-signaler från satelliter långt ovanför oss.\n\nSkogen själv är också full av signaler. Träden kommunicerar med varandra genom underjordiska svampnätverk — så kallade mykorrhizanätverk. Forskare kallar det "Wood Wide Web". Genom dessa nätverk varnar träd varandra för faror och delar näringsämnen.\n\nSå står du här vid signalpunkten, omgiven av träd som själva skickar signaler under dina fötter, med osynliga radiosignaler som passerar genom luften omkring dig.\n\nPlatsen har alltid handlat om kommunikation. Det enda som förändrats är metoderna.',
  mission: [
    "Stå vid signalpunkten och se ut över landskapet",
    "Fundera över varför just den här platsen valdes",
    "Diskutera: hur har sättet att kommunicera förändrats över tid?",
  ],
  reward: "Signalmästare",
  sources: [],
};
