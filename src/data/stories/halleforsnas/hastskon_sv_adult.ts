import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_sv_adult: Story = {
  id: "hastskon_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Byggnaden som böjde sig som en hästsko",
  subtitle: "Hästskon",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_sv_adult.mp3",
  emoji: "🐴",
  accent: "ember",
  sources: ["4", "9"],
  text: "Byggnaden bredvid Kolhuset kallades länge bara för Hästskon.\n\nUppifrån böjde sig huset som en hästsko runt gården.\n\nHär låg en gång brukets stall.\n\nMen år 1920 förändrades byggnaden.\n\nArbetare flyttade in.\n\nEnsamstående hyrde små rum.\nFamiljer bodde i enkla lägenheter.\nHär öppnade också en matsal för arbetarna efter de långa skiften vid bruket.\n\nUnder flera år fungerade byggnaden även som bibliotek.\n\nDet är nästan märkligt att tänka på.\n\nTung industri utanför.\nBöcker och tystnad där inne.\n\nSedan kom branden år 2020.\n\nElden skadade huset svårt.\n\nPlötsligt höll något som överlevt generationer av människor på att försvinna.\n\nMen Hästskon övergavs aldrig.\n\nIdag finns planer på att återställa byggnaden.\n\nSom om samhället bestämt sig för att huset fortfarande har fler historier kvar att berätta.",
  mission: [
    "Gå runt byggnadens form",
    "Föreställ dig livet här för 100 år sedan",
    "Leta efter detaljer som överlevt branden",
  ],
  reward: "Hästskons väktare",
};
