import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_sv_adult: Story = {
  id: "folketshus_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Arbetarrörelsens eget hus",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  ambience: "library",
  audio: "/audio/folketshus_sv_adult.mp3",
  image: "/images/stories/folketshus.jpeg",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  text: `Folkets Hus i Hälleforsnäs är en konkret manifestation av den svenska arbetarrörelsens organisering och gemenskapsbyggande.

Föreningen bildades den 29 september 1936 av Gjutarnas avd. 104 och Metalls avd. 215. En tomt förvärvades och 1939 utökades den till 3 800 kvadratmeter.

De ursprungliga ritningarna från KF:s arkitektkontor förkastades av medlemmarna som orealistiska. Istället anlitades en arkitekt från Folkets Hus Riksorganisation, vilket resulterade i en mer kostnadseffektiv och genomförbar plan.

Byggbeslut fattades. Entreprenadkostnad: 1 050 000 kronor. Inredning: 180 000 kronor. Finansiering skedde via Mellösa kommun, statliga bidrag och föreningens egna medel. Arkitekt: K-konsult. Byggmästare: Teodor Andersson.

Invigningen ägde rum med 100 inbjudna gäster. Dagen efter hölls öppet hus med fri filmvisning av Nils Holgerssons underbara resa.

Under hela sin historia har Folkets Hus drivits av ideellt engagemang. Verksamheten har omfattat biograf, kurser, uthyrning och kulturevenemang. Byggnaden representerar den folkrörelsetradition som präglade svenskt samhällsbyggande under 1900-talet — en påminnelse om att kultur och gemenskap inte alltid kräver kommersiella incitament.`,
  mission: [
    "Lägg märke till byggnadens proportioner och placering",
    "Fundera över vad ideellt arbete betyder för ett samhälle",
    "Jämför med dagens behov av mötesplatser",
  ],
  reward: "Folkrörelsehistoriker",
};
