import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, Fragment } from "react";
import type { AgeGroup, Language, Story } from "@/data/stories";
import { villages } from "@/data/stories";

const SOURCE_REF: Record<string, { label: string; url: string }> = {
  "1": {
    label: "Wikipedia: Hälleforsnäs",
    url: "https://sv.wikipedia.org/wiki/H%C3%A4lleforsn%C3%A4s",
  },
  "2": {
    label: "Wikipedia: Hälleforsnäs bruk",
    url: "https://sv.wikipedia.org/wiki/H%C3%A4lleforsn%C3%A4s_bruk",
  },
  "3": {
    label: "Wikipedia: Hälleforsnäs bruks herrgård",
    url: "https://sv.wikipedia.org/wiki/H%C3%A4lleforsn%C3%A4s_bruks_herrg%C3%A5rd",
  },
  "4": {
    label: "Flen Municipality: Hälleforsnäs då och nu",
    url: "https://flen.se/kommun--politik/flens-kommunarkiv/flens-kommun-da-och-nu/-halleforsnas-da-och-nu",
  },
  "5": {
    label: "Gjuterimuseet: Bandyutställningen",
    url: "https://www.gjuterimuseum.se/projekt/lagenhetshus/",
  },
  "6": {
    label: "Flen Municipality: Ortsanalys 2007",
    url: "https://flen.se/download/18.95ab96d1892406caed60b/1688560805648/Ortsanalys_Hallaforsnas.pdf",
  },
  "7": { label: "Kolhusteatern: Om Kolhusteatern", url: "https://kolhusteatern.se/?page_id=56" },
  "8": { label: "Kolhusteatern: Kolhuset", url: "https://kolhusteatern.se/?page_id=57" },
  "9": {
    label: "SVT: Kulturhistoriskt värdefull byggnad förstörd i brand",
    url: "https://www.svt.se/nyheter/lokalt/sormland/kulturhistoriskt-vardefull-byggnad",
  },
  "10": {
    label: "Flen Municipality (Facebook): Hann du smaka på Luffare från Sigges kiosk?",
    url: "https://www.facebook.com/Flenskommunsormlandshjarta/posts/hann-du-smaka-p%C3%A5-luffare-fr%C3%A5n-sigges-kiosk-luffare-var-en-delikatess-best%C3%A5ende-a/955531596615522/",
  },
};

const villageLoaders: Record<string, () => Promise<Story[]>> = {
  halleforsnas: () => import("@/data/stories/halleforsnas").then((m) => m.stories),
  genk: () => import("@/data/stories/genk").then((m) => m.stories),
  leuven: () => import("@/data/stories/leuven").then((m) => m.stories),
};

async function loadAllStories(): Promise<Story[]> {
  const results = await Promise.all(
    Object.entries(villageLoaders).map(async ([villageId, loader]) => {
      const stories = await loader();
      return stories.map((s) => ({ ...s, villageId: s.villageId || villageId }));
    }),
  );
  return results.flat();
}

export const Route = createFileRoute("/dev/stories")({
  component: DevStoriesPage,
});

function DevStoriesPage() {
  const [langFilter, setLangFilter] = useState<Language | "all">("all");
  const [ageFilter, setAgeFilter] = useState<AgeGroup | "all">("all");
  const [villageFilter, setVillageFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["dev-stories"],
    queryFn: loadAllStories,
  });

  const filtered = stories.filter((s) => {
    if (langFilter !== "all" && s.language !== langFilter) return false;
    if (ageFilter !== "all" && !s.ageGroups.includes(ageFilter)) return false;
    if (villageFilter !== "all" && s.villageId !== villageFilter) return false;
    if (
      search &&
      !s.title.toLowerCase().includes(search.toLowerCase()) &&
      !s.id.toLowerCase().includes(search.toLowerCase()) &&
      !(s.text || "").toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Stories</h1>

      <div className="flex gap-2 mb-4 flex-wrap">
        <select
          value={langFilter}
          onChange={(e) => setLangFilter(e.target.value as Language | "all")}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="all">All languages</option>
          <option value="sv">Swedish</option>
          <option value="en">English</option>
        </select>

        <select
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value as AgeGroup | "all")}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="all">All ages</option>
          <option value="3-4">3-4</option>
          <option value="5-6">5-6</option>
          <option value="7-9">7-9</option>
          <option value="10-12">10-12</option>
          <option value="adult">Adult</option>
        </select>

        <select
          value={villageFilter}
          onChange={(e) => setVillageFilter(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="all">All villages</option>
          {villages.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search title, id or text..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-2 py-1 text-sm flex-1 min-w-[200px]"
        />

        <span className="text-sm text-muted-foreground self-center ml-auto">
          {filtered.length} / {stories.length} stories
        </span>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="p-2"></th>
                <th className="p-2">ID</th>
                <th className="p-2">Village</th>
                <th className="p-2">Lang</th>
                <th className="p-2">Ages</th>
                <th className="p-2">Title</th>
                <th className="p-2">Sources</th>
                <th className="p-2">Audio</th>
                <th className="p-2">Text</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <Fragment key={s.id}>
                  <tr
                    className="border-b hover:bg-muted/50 cursor-pointer"
                    onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                  >
                    <td className="p-2 text-lg">{s.emoji}</td>
                    <td className="p-2 font-mono text-xs">
                      <Link
                        to="/story/$storyId"
                        params={{ storyId: s.id }}
                        className="text-blue-600 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {s.id}
                      </Link>
                    </td>
                    <td className="p-2">
                      {villages.find((v) => v.id === s.villageId)?.name || s.villageId}
                    </td>
                    <td className="p-2 uppercase">{s.language}</td>
                    <td className="p-2">{s.ageGroups.join(", ")}</td>
                    <td className="p-2 font-medium">{s.title}</td>
                    <td className="p-2 text-xs">
                      {s.sources?.length
                        ? s.sources.map((src) => (
                            <a
                              key={src}
                              href={SOURCE_REF[src]?.url || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={SOURCE_REF[src]?.label || src}
                              className="inline-block mr-1 px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {src}
                            </a>
                          ))
                        : "—"}
                    </td>
                    <td className="p-2 text-center">
                      {s.audio ? (
                        <a
                          href={s.audio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-2 py-0.5 bg-green-100 text-green-800 rounded hover:bg-green-200 text-xs font-mono"
                          onClick={(e) => e.stopPropagation()}
                          title={s.audio}
                        >
                          ▶ {s.audio.split("/").pop()}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </td>
                    <td className="p-2 text-muted-foreground max-w-xs truncate">
                      {s.text
                        ? s.text
                            .split("\n")
                            .find((l) => l.trim())
                            ?.trim()
                        : "—"}
                    </td>
                  </tr>
                  {expanded === s.id && (
                    <tr key={`${s.id}-expanded`}>
                      <td colSpan={9} className="p-0">
                        <div className="bg-muted/20 border-b px-4 py-3">
                          <p className="text-xs font-semibold text-muted-foreground mb-1">
                            Subtitle:
                          </p>
                          <p className="text-sm mb-3">{s.subtitle}</p>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">
                            Reward:
                          </p>
                          <p className="text-sm mb-3">{s.reward}</p>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">Audio:</p>
                          <p className="text-sm mb-3">
                            {s.audio ? (
                              <a
                                href={s.audio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-700 hover:underline font-mono text-xs"
                              >
                                ▶ {s.audio}
                              </a>
                            ) : (
                              <span className="text-muted-foreground text-xs">None</span>
                            )}
                          </p>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">
                            Story text:
                          </p>
                          <div className="text-sm whitespace-pre-line bg-background border rounded p-3 mb-2 max-h-80 overflow-y-auto">
                            {s.text || "(no text)"}
                          </div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">
                            Sources:
                          </p>
                          {s.sources?.length ? (
                            s.sources.map((src) => (
                              <div key={src} className="text-xs mb-1">
                                <a
                                  href={SOURCE_REF[src]?.url || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  [{src}] {SOURCE_REF[src]?.label || src}
                                </a>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-muted-foreground">None</p>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
