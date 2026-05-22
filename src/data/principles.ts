export interface Principle {
  digit1: string;
  digit2: string;
  title: string;
  body: string;
  tag: string;
}

export const principles: Principle[] = [
  {
    digit1: "0",
    digit2: "1",
    title: "own what we build",
    body: "every product is ours. no work-for-hire. it lets us pick problems that take years and not freak out about it.",
    tag: "rule one",
  },
  {
    digit1: "0",
    digit2: "2",
    title: "small on purpose",
    body: "we plan to stay small. small lets us move quickly, choose carefully, and stay weird.",
    tag: "on purpose",
  },
  {
    digit1: "0",
    digit2: "3",
    title: "ship in public-ish",
    body: "we'll talk openly about what we're building and what we just deleted. except the stealth ones — those are sworn to secrecy.",
    tag: "in public-ish",
  },
  {
    digit1: "0",
    digit2: "4",
    title: "calm by default",
    body: "no fake urgency. if something is on fire, we'll deal with it. if it isn't, we won't pretend it is.",
    tag: "calm by default",
  },
];
