import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_sv_adult: Story = {
  id: "gjuterimuseum_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Järnet och elden",
  subtitle: "Gjuteriet",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Gjuterimuseum" },
  audio: "/audio/gjuterimuseum_sv_adult.mp3",
  image: "images/stories/gjuterimuseet.jpeg",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Här formades järnet som byggde Hälleforsnäs.

Ljudet måste ha varit öronbedövande.

Hamrande metall.
Eld.
Ånga.
Rop mellan arbetarna.

I generationer arbetade människor här vid bruket.

Värmen från ugnarna kunde kännas långt utanför byggnaderna.
Och överallt fanns sot, metallstoft och lukten av olja.

Arbetet var tungt.
Men bruket gav också människor hem, mat och gemenskap.

Hela samhället växte kring järnet.

Idag är mycket borta.
Maskinerna har tystnat.

Men om du blundar en stund…

kan du nästan höra fabriken vakna igen.`,
  mission: [
    "Lyssna efter metalliska ljud",
    "Hitta något som är gjort av järn",
    "Fundera över hur det hade varit att arbeta här för 100 år sedan",
  ],
  reward: "Järnvandrare",
};
