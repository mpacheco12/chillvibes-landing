import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const endpoint = import.meta.env.VITE_SHEET_ENDPOINT ?? "";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    // No endpoint configured: mirror the prototype's "show ok and clear"
    // so the page still feels alive in local previews.
    if (!endpoint) {
      setStatus("success");
      setEmail("");
      return;
    }

    setStatus("submitting");
    try {
      // Apps Script web apps don't return CORS headers by default, so we
      // can't read the response. Fire-and-forget with no-cors + form-
      // encoded body is the canonical pattern — the row still lands.
      const body = new URLSearchParams({ email });
      await fetch(endpoint, {
        method: "POST",
        body,
        mode: "no-cors",
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="m-0 mb-5 flex max-w-[480px] flex-wrap items-center gap-2"
    >
      <input
        type="email"
        required
        autoComplete="email"
        placeholder="your@email"
        aria-label="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-[200px] flex-1 rounded-[10px] border border-hairline-strong px-4 py-3 font-mono text-ink outline-none transition-[border-color,background] duration-150 ease-out placeholder:text-ink-dim focus:border-green"
        style={{
          background: "rgba(10,5,18,0.5)",
          fontSize: 13.5,
        }}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary-glow group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] bg-green px-[22px] py-3 font-mono text-[13.5px] font-medium lowercase transition-transform duration-150 ease-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        style={{ color: "#0a1a0a", letterSpacing: "0.02em" }}
      >
        {status === "submitting" ? "sending…" : "notify me"}{" "}
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
          ↗
        </span>
      </button>
      <span
        className="block w-full font-mono uppercase text-green transition-opacity duration-300"
        style={{
          fontSize: 11.5,
          letterSpacing: "0.06em",
          marginTop: 4,
          opacity: status === "success" ? 1 : 0,
        }}
        aria-live="polite"
      >
        → on the list. thanks.
      </span>
      {status === "error" ? (
        <span
          className="block w-full font-mono uppercase text-pink"
          style={{ fontSize: 11.5, letterSpacing: "0.06em", marginTop: 4 }}
          role="alert"
        >
          → couldn't send. try emailing us directly.
        </span>
      ) : null}
    </form>
  );
}
