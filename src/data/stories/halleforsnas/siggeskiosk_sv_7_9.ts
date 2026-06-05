import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_sv_7_9: Story = {
  id: "siggeskiosk_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Visslan, kön och Luffaren",
  subtitle: "Livet på Sigges kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigges kiosk" },
  audio: "/audio/siggeskiosk_sv_7_9.mp3",
  emoji: "🍦",
  accent: "ember",
  text: "Föreställ dig ljudet: TUUUT.\n\nEn hög fabriksvissla skär genom luften.\n\nÖverallt på bruket slutar arbetarna det de håller på med.\n\nDe beger sig till den lilla gula kiosken vid ån.\n\nSigges kiosk.\n\nDen stod här från 1950-talet till 1970-talet, med gula väggar och bruna knutar. En smal bro ledde över vattnet fram till dörren.\n\nArbetarna kom för tidningar, tobak och godis.\n\nMen det populäraste var Luffare.\n\nLuffare var enkelt: potatismos med ketchup och senap, serverad på korvbröd. Det gick snabbt, var billigt och mättande — perfekt för en hungrig fabriksarbetare.\n\nBarnen hade sin egen lek. De visste att när vuxna tog fram mynt för att betala, ramlade pengar ibland ner mellan träplankorna i bron. Så de letade under den, i hopp om att hitta skatter.\n\nKioskägaren på den tiden var Sigge (senare Janne på 1970-talet). Verksamheten såg likadan ut i decennier.\n\nBakom kiosken, på berget, låg arbetarbostäderna Blåsut.\n\nVattnet som rann under bron kom från Brukssjön. Det var brunt — färgat av föroreningar från bruket.\n\nKiosken revs i slutet av 1970-talet.\n\nIdag finns bara betonggrunden kvar.",
  mission: [
    "Hitta betonggrunden efter kiosken",
    "Föreställ dig bron som en gång korsade vattnet",
    "Beskriv hur en Luffare smakar med tre ord",
  ],
  reward: "Kiosktidsresenär",
  sources: ["4", "10"],
};
