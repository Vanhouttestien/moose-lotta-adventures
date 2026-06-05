import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const OLLAMA_URL = "http://localhost:11434/api/chat";
const MODEL = "qwen3:8b";

const LOCATION_KEYS = [
  "FOREST_SIGNAL_POINT",
  "FOLKETS_HUS",
  "DINOSAUR_FOREST",
  "KOLHUSET",
  "LIKTALLARNA",
  "FOUNDRY_MUSEUM",
  "KOLHUSET_ADULT",
  "HASTSKON",
  "STATION",
  "SIGGES_KIOSK",
  "GENK_POINT_1",
  "GENK_POINT_2",
  "LEUVEN_POINT_1",
  "LEUVEN_POINT_2",
];

const VILLAGE_IDS = ["halleforsnas", "genk", "leuven"];
const ACCENTS = ["moss", "ember", "bark", "shadow", "rust", "water"];

function buildPrompt(userIdea: string): string {
  return `Generate a TypeScript Story object for this project.

Import block must be exactly:
import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

Then export a const with snake_case name typed as Story:

export const <snake_case_name>: Story = {
  id: "<same_snake_case_name>",
  villageId: "halleforsnas" | "genk" | "leuven",
  language: "sv" | "en",
  ageGroups: ["3-4"] or ["5-6"] or ["7-9"] or ["10-12"] or ["adult"] or combined like ["5-6", "7-9"],
  title: "Short title",
  subtitle: "Short subtitle",
  location: { ...LOCATIONS.KEY, label: "Human readable label" },
  audio: "",
  emoji: "single emoji character",
  accent: "moss" | "ember" | "bark" | "shadow" | "rust" | "water",
  text: "Story text with \\\\n for line breaks. Can be multiple paragraphs.",
  mission: ["action 1", "action 2", "action 3"],
  reward: "Short reward phrase"
};

Available LOCATION keys: ${LOCATION_KEYS.join(", ")}

Available villageIds: ${VILLAGE_IDS.join(", ")}

Available accents: ${ACCENTS.join(", ")}

RULES:
- Output ONLY the TypeScript code. No markdown, no backticks, no explanation.
- export const name must be snake_case
- id must match export name exactly
- text must use \\\\n (escaped backslash-n) for line breaks
- mission must have exactly 3 items
- No missing fields
- Pick location/accent/villageId that fits the story theme

Generate a story about: ${userIdea}`;
}

async function callOllama(prompt: string): Promise<string> {
  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a TypeScript code generator. Output ONLY valid TypeScript code. No markdown. No backticks. No explanations.",
        },
        { role: "user", content: prompt },
      ],
      stream: false,
      options: { temperature: 0.7 },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Ollama error ${response.status}: ${body}`);
  }

  const data = await response.json();
  return data.message?.content ?? "";
}

function extractExportName(code: string): string | null {
  const match = code.match(/export\s+const\s+(\w+)\s*:/);
  return match ? match[1] : null;
}

function sanitizeFileName(name: string): string {
  return name
    .replace(/[^a-z0-9_]/gi, "_")
    .toLowerCase()
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: npx tsx tools/generate-story.ts "<story idea>"');
    process.exit(1);
  }

  const userIdea = args.join(" ");
  console.log(`Generating story: "${userIdea}"...`);

  const prompt = buildPrompt(userIdea);
  console.log("Calling Ollama...");

  let code: string;
  try {
    code = await callOllama(prompt);
  } catch (err) {
    console.error("Error calling Ollama:", err);
    process.exit(1);
  }

  code = code.trim();
  code = code.replace(/^```(?:typescript)?\s*/i, "").replace(/\s*```\s*$/i, "");

  const exportName = extractExportName(code);
  if (!exportName) {
    console.error("Could not extract export const name from generated code.");
    console.error("Raw output:");
    console.log(code);
    process.exit(1);
  }

  const safeName = sanitizeFileName(exportName);
  const generatedDir = resolve(__dirname, "../src/data/stories/generated");
  mkdirSync(generatedDir, { recursive: true });

  const filePath = resolve(generatedDir, `${safeName}.ts`);
  writeFileSync(filePath, code, "utf-8");

  console.log(`\n✅ Story saved to: ${filePath}`);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
