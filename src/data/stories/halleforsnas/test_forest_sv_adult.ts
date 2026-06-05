import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_sv_adult: Story = {
  id: "test_forest_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Skogen som sänder",
  subtitle: "Skogssignalen",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Skogssignalen" },
  audio: "/audio/test_forest_sv_adult.mp3",
  emoji: "📡",
  accent: "moss",
  text: 'På en kulle i skogsbrynet mitt emot bruket finns en plats som under århundraden fungerat som signalpunkt.\n\nHärifrån har man fri sikt över Hälleforsnäs: från Brukssjön i söder till det gamla bruksområdet i norr. En strategisk position i ett samhälle format av järnindustrin.\n\nLångt före telefonin använde bruket optiska signaler för att kommunicera över dalen. Eldar som tändes i skymningen. Flaggor som hissades vid skiftbyten. Röksignaler som bar bud över taken.\n\nMen skogen har alltid haft sina egna signaler.\n\nModern forskning har visat att träd kommunicerar genom underjordiska svampnätverk — mykorrhiza. Gamla träd varnar yngre för torka och sjukdomar. De skickar näringsämnen till grannar i nöd. Forskare kallar fenomenet "Wood Wide Web".\n\nSå står du här vid en punkt där människor i generationer har skickat och tagit emot signaler, samtidigt som träden under dina fötter gör precis samma sak — med metoder som vi först nu börjar förstå.\n\nPlatsen är en påminnelse om att kommunikation inte är något unikt mänskligt. Den är en grundläggande kraft i allt levande.',
  mission: [
    "Betrakta landskapet från signalpunkten",
    "Reflektera över platsens strategiska betydelse",
    "Fundera över skillnaden mellan mänskliga och naturliga signaler",
  ],
  reward: "Signalbetraktare",
  sources: [],
};
