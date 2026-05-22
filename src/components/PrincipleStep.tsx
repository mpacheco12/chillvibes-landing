import type { Principle } from "../data/principles";

interface PrincipleStepProps {
  principle: Principle;
  index: number;
  total: number;
}

export function PrincipleStep({
  principle,
  index,
  total,
}: PrincipleStepProps) {
  // Responsive border logic, encapsulated:
  // - 4-col layout: every step has a right border except the last.
  // - 2-col layout (≤979px): hide the right border on odd indices.
  const noRight4 = index === total - 1;
  const noRight2 = index % 2 === 1;
  const borderClasses = [
    noRight4
      ? "min-[980px]:border-r-0"
      : "min-[980px]:border-r min-[980px]:border-hairline",
    noRight2
      ? "max-[979px]:border-r-0"
      : "max-[979px]:border-r max-[979px]:border-hairline",
  ].join(" ");

  return (
    <div
      className={`relative flex min-h-[280px] flex-col gap-[14px] p-[32px_24px_0] ${borderClasses}`}
    >
      <div
        className="font-display font-bold text-ink-dim"
        style={{
          fontSize: 46,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {principle.digit1}
        <em className="not-italic" style={{ color: "var(--color-green)" }}>
          {principle.digit2}
        </em>
      </div>

      <h3
        className="m-0 font-display font-bold text-ink"
        style={{
          fontSize: 24,
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
        }}
      >
        {principle.title}
      </h3>

      <p
        className="m-0 text-ink-soft"
        style={{ fontSize: 13.5, lineHeight: 1.55 }}
      >
        {principle.body}
      </p>

      <span
        className="mt-auto border-t border-dashed border-hairline py-2 font-mono uppercase text-ink-dim"
        style={{ fontSize: 10.5, letterSpacing: "0.12em" }}
      >
        {principle.tag}
      </span>
    </div>
  );
}
