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
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: "Här formades järnet som byggde Hälleforsnäs.\n\nLjudet måste ha varit öronbedövande.\n\nHamrande metall.\nEld.\nÅnga.\nRop mellan arbetarna.\n\nI generationer arbetade människor här vid bruket.\n\nVärmen från ugnarna kunde kännas långt utanför byggnaderna.\nOch överallt fanns sot, metallstoft och lukten av olja.\n\nArbetet var tungt.\nMen bruket gav också människor hem, mat och gemenskap.\n\nHela samhället växte kring järnet.\n\nIdag är mycket borta.\nMaskinerna har tystnat.\n\nMen om du blundar en stund…\n\nkan du nästan höra fabriken vakna igen.",
  mission: [
    "Lyssna efter metalliska ljud",
    "Hitta något som är gjort av järn",
    "Fundera över hur det hade varit att arbeta här för 100 år sedan",
  ],
  reward: "Järnvandrare",
};
