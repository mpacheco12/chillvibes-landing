import type { Faq } from "../data/faqs";

interface FaqItemProps {
  faq: Faq;
  isLast?: boolean;
}

export function FaqItem({ faq, isLast }: FaqItemProps) {
  return (
    <details
      className={`px-1 py-[22px] ${isLast ? "" : "border-b border-hairline"}`}
    >
      <summary
        className="flex cursor-default list-none items-center justify-between font-display font-bold text-ink"
        style={{
          fontSize: 22,
          letterSpacing: "-0.02em",
        }}
      >
        <span className="flex-1 pr-4">{faq.q}</span>
        <span
          className="shrink-0 whitespace-nowrap font-mono text-ink-dim"
          style={{ fontSize: 14 }}
          aria-hidden="true"
        >
          [ + ]
        </span>
      </summary>
      <p
        className="mt-[14px] text-ink-soft"
        style={{ fontSize: 15, lineHeight: 1.6 }}
      >
        {faq.a}
      </p>
    </details>
  );
}
