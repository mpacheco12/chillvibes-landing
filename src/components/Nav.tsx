import { Brand } from "./Brand";

const links = [
  { href: "#lab", label: "in the lab" },
  { href: "#about", label: "about" },
  { href: "#faq", label: "faq" },
  { href: "#contact", label: "say hi" },
];

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-hairline backdrop-blur-md"
      style={{ background: "rgba(10,5,18,0.7)" }}
    >
      <div className="mx-auto flex max-w-[var(--container-page)] items-center justify-between gap-6 px-8 py-[14px]">
        <Brand href="#" />

        <div className="hidden gap-7 font-mono text-[13.5px] text-ink-soft min-[980px]:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary-glow group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] bg-green px-[22px] py-3 font-mono text-[13.5px] font-medium lowercase transition-transform duration-150 ease-out hover:-translate-y-0.5"
          style={{ color: "#0a1a0a", letterSpacing: "0.02em" }}
        >
          say hi{" "}
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
            ↗
          </span>
        </a>
      </div>
    </nav>
  );
}
