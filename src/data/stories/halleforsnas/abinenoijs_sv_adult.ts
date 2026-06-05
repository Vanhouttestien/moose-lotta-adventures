import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_sv_adult: Story = {
  id: "abinenoijs_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Avfall, rikedom och återfödelse",
  subtitle: "Brukets miljöarv",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_sv_adult.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: 'I över tre århundraden producerade Hälleforsnäs bruk järn. Och avfall — slagg, grönslagg, gjutsand, tjära, sot och tungmetaller.\n\nTjärdippen var den primära deponin. Belägen där Abine Noijs park ligger idag tog den emot brukets industriella biprodukter i generationer. Föroreningarna var allvarliga: tungmetaller lakades ut i Bruksån och grundvattnet. Området klassades som högriskobjekt.\n\nYtterligare deponier fanns runt Hälleforsnäs: Hjärpstugetippen vid Simmelsjön (nedlagd sedan 1970-talet, nu strövområde, MIFO klass 2), Kattkärret vid gamla reningsverket (2 hektar, misstänkt läckage av tungmetaller till Bruksån), och Edströmsvallen (byggd på slaggfyllnad med rester från branden 1934).\n\nGjutsand (sotsand) och grönslagg användes som utfyllnadsmaterial runt om i samhället. Provtagning visade att sanden inte innehöll förhöjda metallhalter, och kromet i grönslaggen var hårt bundet och inte biotillgängligt.\n\nProjektet "Rena Bruket" (2004–2006) var den största enskilda saneringsinsatsen. Till en kostnad av 74,4 miljoner kronor, helt statsfinansierad, omfattade den grävning av förorenade massor, omläggning av Bruksån i ny fåra, och påläggning av ren jord.\n\nResultatet är Abine Noijs park, invigd 17 september 2009. Uppkallad efter den valloniske gruvman som grundade bruket 1659 rymmer parken idag skulpturer, promenadstråk och grönområden — ett landskap av återhämtning.\n\nPlatsen visar industrialismens långa miljöskugga och möjligheten till sanering. Men andra deponier återstår, och den fulla omfattningen av föroreningarna i samhället — från slaggfyllda idrottsplatser till diffust fyllnadsmaterial — är ännu inte helt kartlagd.',
  mission: [
    "Betrakta parken och fundera över omfattningen av saneringen",
    "Gå längs Bruksån och se den omlagda fåran",
    "Reflektera: vilka andra gamla industriområden bär en liknande dold kostnad?",
  ],
  reward: "Miljöanalytiker",
};
