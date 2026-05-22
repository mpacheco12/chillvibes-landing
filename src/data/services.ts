export type ServiceVariant = "a" | "b" | "c";

export interface Service {
  variant: ServiceVariant;
  /** Single character/glyph for the card icon. Ignored when `logo` is set. */
  glyph: string;
  /** Optional logo image path (served from /public). Renders inside the icon
   *  square instead of the glyph. The card switches to a neutral dark backplate. */
  logo?: string;
  num: string;
  title: { line1: string; line2: string };
  body: string;
  status: string[];
  /** Optional outbound link. When set, the entire card becomes clickable. */
  url?: string;
}

export const services: Service[] = [
  {
    variant: "b",
    glyph: "m",
    logo: "projects/meetn.png",
    num: "project_001 · live",
    title: { line1: "schedule by", line2: "cc'ing an ai" },
    body: "an ai scheduling assistant named book. cc book@meetn.ai in any email thread and it picks a time everyone can do, then sends the invite. no spreadsheets, no calendly link round-trips.",
    status: ["live · meetn.ai", "free 7-day trial"],
    url: "https://meetn.ai",
  },
  {
    variant: "b",
    glyph: "◐",
    num: "project_002 · stealth",
    title: { line1: "a thing", line2: "about ai" },
    body: "everyone has an ai thing. ours is a little less embarrassing than most. it solves a real problem we have every day. that's the bar.",
    status: ["🔒 stealth · waitlist later", 'codename: "decaf"'],
  },
  {
    variant: "c",
    glyph: "✦",
    num: "project_003 · scoping",
    title: { line1: "idea pile,", line2: "being shrunk" },
    body: "a notebook of things we might build next. some are great. some are terrible. we're allergic to roadmaps, but we'll pick one.",
    status: ["tbd · winter", "open to suggestions"],
  },
];
