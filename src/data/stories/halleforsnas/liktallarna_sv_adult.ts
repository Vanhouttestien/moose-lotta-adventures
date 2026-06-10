import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_sv_adult: Story = {
  id: "liktallarna_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "De fyrahundraåriga väktarna",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_sv_adult.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "ember",
  sources: ["4"],
  text: 'Utmed Flensvägen står några av de äldsta tallarna i Sörmland: Liktallarna, en grupp med tallar som uppskattas vara över 400 år gamla.\n\nTrädens ålder innebär att de förekom. långt före bruksepokens början. De har bevittnat Hälleforsnäs hela utveckling: från Abine Noijs etablering av masugnen 1659, via industrialiseringens framväxt under 1800-talet, till brukets nedläggning 1997 och områdets nutida omvandling.\n\nOrtnamnet "Liktallarna" har en omdebatterad bakgrund. En tolkning är att området utgjorde samhällets davarande yttergräns där avrättningar ägde rum. En annan sägen anger att likprocessioner till Hälleforsnäs kyrkogård stannade här för rast — hästarna behövde vila efter att ha forslat kistor över dåliga vägar.\n\nBåda tolkningarna är dokumenterade i lokalhistorisk litteratur, men ingen är definitivt bekräftad.\n\nPlatsen har en omisskännlig atmosfär — tyst, nästan sakral. Den får sin tyngd delvis från den svenska folktron, där uråldriga träd ansågs besitta minnet av platser och människor som passerat.\n\nUnder 1980- eller 1990-talet skadades tallarna svårt av en brand. De överlevde, men stammarna bär fortfarande synliga brännmärken. En minnesplakett med en kolteckning av Edvin Axelsson (1966) finns intill.\n\nLiktallarna utgör ett sällsynt exempel på ett levande kulturminne — träd som inte bara överlevt utan också bär på flera lager av lokalhistoria, från folktro till industriortens framväxt.',
  mission: [
    "Dokumentera brandskadorna på stammarna",
    "Läs Edvin Axelssons plakett",
    "Reflektera över varför vissa platser väcker starkare känslor än andra",
  ],
  reward: "Liktallarnas historieskrivare",
};
