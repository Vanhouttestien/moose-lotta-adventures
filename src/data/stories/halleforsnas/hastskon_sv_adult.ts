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
  text: `Byggnaden bredvid Kolhuset kallades länge bara för Hästskon.

Uppifrån böjde sig huset som en hästsko runt gården.

Här låg en gång brukets stall.

Men år 1920 förändrades byggnaden.

Arbetare flyttade in.

Ensamstående hyrde små rum.
Familjer bodde i enkla lägenheter.
Här öppnade också en matsal för arbetarna efter de långa skiften vid bruket.

Under flera år fungerade byggnaden även som bibliotek.

Det är nästan märkligt att tänka på.

Tung industri utanför.
Böcker och tystnad där inne.

Sedan kom branden år 2020.

Elden skadade huset svårt.

Plötsligt höll något som överlevt generationer av människor på att försvinna.

Men Hästskon övergavs aldrig.

Idag finns planer på att återställa byggnaden.

Som om samhället bestämt sig för att huset fortfarande har fler historier kvar att berätta.`,
  mission: [
    "Gå runt byggnadens form",
    "Föreställ dig livet här för 100 år sedan",
    "Leta efter detaljer som överlevt branden",
  ],
  reward: "Hästskons väktare",
};
