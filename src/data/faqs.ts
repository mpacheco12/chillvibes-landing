export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "why does this website exist if you don't sell anything yet?",
    a: 'because apparently you need one. also we got tired of explaining "yes the company is real" in DMs. now we can just send a link.',
  },
  {
    q: "can you build something for us?",
    a: "no, sorry. we're not an agency. we only build our own products. if you need a studio for hire, drop us a note and we'll happily send you a list of friends who do great work.",
  },
  {
    q: "what are you actually building?",
    a: 'three things. one is for indie devs. one involves ai (sorry). one is still a sticky note. see "in the lab" above for the full extent of what we can publicly say.',
  },
  {
    q: "are you raising? hiring?",
    a: "not raising. not actively hiring. if you're an excellent human who'd love to work on weird software with us, send a note anyway — we'll keep you in mind.",
  },
  {
    q: "is the mascot for sale?",
    a: "no. he has a name. it's a secret.",
  },
];
