import { marqueeItems } from "../data/marquee";

function Track() {
  // Two copies of the content for a seamless -50% translateX loop.
  const copies = [marqueeItems, marqueeItems];
  return (
    <span className="inline-flex items-center gap-12">
      {copies.flatMap((items, ci) =>
        items.map((text, i) => (
          <span
            key={`${ci}-${i}`}
            className="inline-flex items-center gap-12 whitespace-nowrap"
          >
            {text}
            <i className="text-pink" aria-hidden="true">
              ★
            </i>
          </span>
        ))
      )}
    </span>
  );
}

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-hairline py-[18px]"
      style={{ background: "rgba(26,14,53,0.4)" }}
      aria-label="What we build"
    >
      <div
        className="marquee-track flex gap-12 font-mono uppercase whitespace-nowrap animate-marquee"
        style={{
          width: "max-content",
          fontSize: 13.5,
          color: "var(--color-ink-soft)",
          letterSpacing: "0.16em",
        }}
      >
        <Track />
        <Track />
      </div>
    </section>
  );
}
