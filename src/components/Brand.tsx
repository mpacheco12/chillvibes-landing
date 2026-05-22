interface BrandProps {
  href?: string;
}

export function Brand({ href = "#" }: BrandProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 shrink-0"
      aria-label="chill vibes inc."
    >
      <img
        src={`${import.meta.env.BASE_URL}mascot.png`}
        alt=""
        className="h-8 w-auto block shrink-0"
      />
      <span
        className="font-display font-bold leading-none whitespace-nowrap"
        style={{ fontSize: 22, letterSpacing: "-0.025em" }}
      >
        <span className="text-ink">chill </span>
        <span className="grad-text-wm-b">vibes</span>
        <span
          className="grad-text-wm-c ml-1"
          style={{ fontSize: 18 }}
        >
          inc._
        </span>
      </span>
    </a>
  );
}
