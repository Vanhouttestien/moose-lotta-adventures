import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_sv_10_12: Story = {
  id: "siggeskiosk_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Rast på bruket",
  subtitle: "Sigges kiosk och arbetarkulturen",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigges kiosk" },
  audio: "/audio/siggeskiosk_sv_10_12.mp3",
  emoji: "🍦",
  accent: "water",
  text: "Arbetet var tungt, bullrigt och smutsigt. Gjutjärn, rök och svett fyllde varje sal.\n\nNär fabriksvisslan ljöd hade arbetarna en kort rast.\n\nMånga av dem gick hit.\n\nSigges kiosk var en liten gul byggnad med bruna knutar, som stod vid ån mitt emot bruket. En träbro förband den med vägen.\n\nMenyn var enkel: godis, tobak, tidningar och Luffare.\n\nLuffare var potatismos med ketchup och senap, serverad på korvbröd. Det var billigt, snabbt och mättande — brukets egen snabbmat.\n\nMen det finns en annan detalj som gör platsen speciell.\n\nÅn under bron hette Bruksån. Den rann från Brukssjön och var brunfärgad av järn och föroreningar från bruket. Vattnet självt berättade om industrin.\n\nPå berget bakom kiosken låg Blåsut — arbetarbostäderna som också revs.\n\nBarnen i området hade lärt sig att mynt ibland ramlade genom springorna i brons träplankor. Kiosken var en plats för små transaktioner, och ett mynt var lätt att tappa. För barnen betydde ett fynd godis.\n\nKiosken drevs först av Sigge, och senare av Janne på 1970-talet. Den förblev i stort sett oförändrad i decennier.\n\nDen revs i slutet av 1970-talet.\n\nIdag finns bara betonggrunden kvar.\n\nSigges kiosk var mer än en butik — det var en paus från hettan i gjuteriet, en plats där arbetare kunde vara människor igen i några minuter.",
  mission: [
    "Hitta betonggrunden och mät dess storlek med dina steg",
    "Föreställ dig kön av arbetare som korsade bron vid lunchtid",
    "Diskutera: vilken mat idag kommer framtida generationer att minnas som 'arbetarmat'?",
  ],
  reward: "Socialhistoriker",
  sources: ["4", "10"],
};
