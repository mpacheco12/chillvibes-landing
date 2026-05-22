import type { Service } from "../data/services";

const glyphTint: Record<Service["variant"], { bg: string; color: string }> = {
  a: { bg: "rgba(255,109,200,0.1)", color: "var(--color-pink)" },
  b: { bg: "rgba(109,213,255,0.1)", color: "var(--color-cyan)" },
  c: { bg: "rgba(167,139,250,0.1)", color: "var(--color-purple)" },
};

// When a logo image is supplied we drop the tinted glyph backplate — the
// logo already carries its own color identity and a neutral square avoids
// fighting it.
const logoPlate = { bg: "rgba(10,5,18,0.5)", color: "var(--color-ink)" };

export function ServiceCard({ service }: { service: Service }) {
  const tint = service.logo ? logoPlate : glyphTint[service.variant];
  const cardClasses =
    "svc relative flex min-h-[340px] flex-col gap-[18px] overflow-hidden rounded-[18px] border border-hairline p-[32px_28px_28px] transition-[transform,border-color] duration-[250ms] ease-out hover:-translate-y-1 hover:border-hairline-strong";
  const cardStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, var(--color-bg-3) 0%, var(--color-bg-2) 100%)",
  };

  const body = (
    <>
      <div className="svc-hotspot" aria-hidden="true" />

      <div className="flex items-start justify-between">
        <div
          className="flex h-[54px] w-[54px] items-center justify-center rounded-[12px] border border-hairline-strong font-display font-semibold overflow-hidden"
          style={{
            background: tint.bg,
            color: tint.color,
            fontSize: 30,
          }}
          aria-hidden="true"
        >
          {service.logo ? (
            <img
              src={`${import.meta.env.BASE_URL}${service.logo}`}
              alt=""
              className="h-[34px] w-[34px] object-contain"
            />
          ) : (
            service.glyph
          )}
        </div>
        <div
          className="flex items-center gap-2 font-mono uppercase text-ink-dim"
          style={{ fontSize: 11, letterSpacing: "0.14em" }}
        >
          {service.num}
          {service.url ? (
            <span
              className="text-green transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              aria-hidden="true"
            >
              ↗
            </span>
          ) : null}
        </div>
      </div>

      <h3
        className="m-0 font-display font-bold text-ink"
        style={{
          fontSize: 30,
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
        }}
      >
        {service.title.line1}
        <br />
        {service.title.line2}
      </h3>

      <p
        className="m-0 text-ink-soft"
        style={{ fontSize: 14.5, lineHeight: 1.55 }}
      >
        {service.body}
      </p>

      <ul
        className="m-0 mt-auto flex list-none flex-col gap-[6px] p-0 font-mono text-ink-soft"
        style={{ fontSize: 12.5 }}
      >
        {service.status.map((s) => (
          <li key={s} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="shrink-0 text-green"
              style={{ fontWeight: 700 }}
            >
              {">"}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </>
  );

  if (service.url) {
    return (
      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${cardClasses}`}
        style={cardStyle}
      >
        {body}
      </a>
    );
  }

  return (
    <article className={cardClasses} style={cardStyle}>
      {body}
    </article>
  );
}
