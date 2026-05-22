import { Brand } from "./Brand";

// Each line is padded to the longest line's width so `text-align: center`
// centers them as a coherent block instead of shifting each line
// independently (which scrambles the column alignment).
const asciiArtLines = [
  "  /$$$$$$  /$$       /$$ /$$ /$$       /$$    /$$ /$$ /$$                                 /$$$$$$",
  " /$$__  $$| $$      |__/| $$| $$      | $$   | $$|__/| $$                                |_  $$_/",
  "| $$  \\__/| $$$$$$$  /$$| $$| $$      | $$   | $$ /$$| $$$$$$$   /$$$$$$   /$$$$$$$        | $$   /$$$$$$$   /$$$$$$$",
  "| $$      | $$__  $$| $$| $$| $$      |  $$ / $$/| $$| $$__  $$ /$$__  $$ /$$_____/        | $$  | $$__  $$ /$$_____/",
  "| $$      | $$  \\ $$| $$| $$| $$       \\  $$ $$/ | $$| $$  \\ $$| $$$$$$$$|  $$$$$$         | $$  | $$  \\ $$| $$",
  "| $$    $$| $$  | $$| $$| $$| $$        \\  $$$/  | $$| $$  | $$| $$_____/ \\____  $$        | $$  | $$  | $$| $$",
  "|  $$$$$$/| $$  | $$| $$| $$| $$         \\  $/   | $$| $$$$$$$/|  $$$$$$$ /$$$$$$$/       /$$$$$$| $$  | $$|  $$$$$$$ /$$",
  " \\______/ |__/  |__/|__/|__/|__/          \\_/    |__/|_______/  \\_______/|_______/       |______/|__/  |__/ \\_______/|__/",
];
const asciiArtWidth = Math.max(...asciiArtLines.map((l) => l.length));
const asciiArt = asciiArtLines
  .map((l) => l.padEnd(asciiArtWidth))
  .join("\n");

export function Footer() {
  return (
    <footer
      className="border-t border-hairline pt-[60px] pb-8"
      style={{ background: "#070310" }}
    >
      <div className="mx-auto max-w-[var(--container-page)] px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 min-[980px]:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 min-[980px]:col-span-1">
            <Brand href="#" />
            <p
              className="mt-[14px] max-w-[280px] text-ink-soft"
              style={{ fontSize: 13, lineHeight: 1.55 }}
            >
              a tiny software studio building our own products. no clients, no
              investors, no decks. just things we want to use.
            </p>
          </div>

          <div>
            <h6
              className="m-0 mb-4 font-mono font-medium uppercase text-ink-dim"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              this site
            </h6>
            <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
              <li>
                <a
                  href="#about"
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#lab"
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  in the lab
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  faq
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  say hi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6
              className="m-0 mb-4 font-mono font-medium uppercase text-ink-dim"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              contact
            </h6>
            <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
              <li>
                <a
                  href="mailto:hi@chillvibessoftware.com"
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  hi@chillvibessoftware.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6
              className="m-0 mb-4 font-mono font-medium uppercase text-ink-dim"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              legal
            </h6>
            <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}legal/privacy.html`}
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  privacy
                </a>
              </li>
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}legal/terms.html`}
                  className="font-mono text-ink-soft transition-colors hover:text-ink"
                  style={{ fontSize: 13.5 }}
                >
                  terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <pre
          className="m-0 mt-6 overflow-hidden whitespace-pre text-center font-mono text-ink-dim"
          style={{ fontSize: 7, lineHeight: 1.15, opacity: 0.45 }}
          aria-hidden="true"
        >
          {asciiArt}
        </pre>

        <div
          className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono uppercase text-ink-dim"
          style={{ fontSize: 11, letterSpacing: "0.06em" }}
        >
          <span>© 2026 chill vibes inc · made remotely, made on purpose</span>
          <div className="flex gap-6">
            <span>v0.1 — "just a website"</span>
            <span>all systems green</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
