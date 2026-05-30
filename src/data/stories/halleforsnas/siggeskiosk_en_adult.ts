import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_en_adult: Story = {
  id: "siggeskiosk_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Kiosk by the Brown River",
  subtitle: "Sigge's Kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigge's Kiosk" },
  audio: "",
  emoji: "🍦",
  accent: "water",
  text: "Today, almost nothing remains of Sigge's kiosk.\n\nOnly traces.\nA concrete foundation.\nA memory beside the water.\n\nBut in the 1950s and 60s, this was a lively meeting place.\n\nThe kiosk stood beside the river opposite the mill.\nYellow walls.\nBrown corners.\nA bridge leading visitors toward the small building.\n\nWhen the factory siren sounded, workers came here to shop.\n\nCandy.\nTobacco.\nNewspapers.\nSmall pauses between long hours of labor.\n\nBack then, the river looked different too.\n\nPollution from the mill colored the water brown.\nThe entire community was shaped by the industry surrounding it.\n\nThe kiosk disappeared in the late 1970s.\nThe river itself later changed course.\n\nBut places like this rarely disappear completely.\n\nThey remain in stories.\n\nIn photographs.\n\nAnd in the memories of the people who once stood here listening for the factory siren.",
  mission: [
    "Look toward the river",
    "Imagine the sound of the factory siren",
    "Think about what people would buy here after work",
  ],
  reward: "Kiosk Rememberer",
};
