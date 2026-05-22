import { Nav } from "./components/Nav";
import { HeroMascot } from "./components/HeroMascot";
import { Marquee } from "./components/Marquee";
import { ServiceCard } from "./components/ServiceCard";
import { PrincipleStep } from "./components/PrincipleStep";
import { FaqItem } from "./components/FaqItem";
import { SignupForm } from "./components/SignupForm";
import { Footer } from "./components/Footer";
import { services } from "./data/services";
import { principles } from "./data/principles";
import { faqs } from "./data/faqs";

export function App() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Nav />

      {/* HERO ─────────────────────────── */}
      <section className="relative overflow-hidden pt-[60px] pb-[100px]">
        <div className="mx-auto grid max-w-[var(--container-page)] items-center gap-12 px-8 min-[980px]:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div
              className="inline-flex max-w-full items-center gap-2 overflow-hidden whitespace-nowrap font-mono uppercase text-green"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
              }}
            >
              <span aria-hidden="true" className="shrink-0 font-bold">
                {">_"}
              </span>
              you found the website. cool.
            </div>

            <h1
              className="my-[18px] mb-[28px] font-display font-bold"
              style={{
                fontSize: "clamp(60px, 8.4vw, 132px)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
              }}
            >
              <span className="block text-ink">we make</span>
              <span className="block grad-text-saas">saas.</span>
              <span className="block">
                <span className="text-ink">that's </span>
                <span className="grad-text-vibes">the bit._</span>
              </span>
            </h1>

            <p
              className="m-0 mb-9 max-w-[520px] text-ink-soft"
              style={{ fontSize: 18, lineHeight: 1.55 }}
            >
              chill vibes inc. is a brand-new software studio building{" "}
              <em
                className="not-italic font-mono"
                style={{ color: "var(--color-green)" }}
              >
                its own
              </em>{" "}
              products. no clients, no investors, no decks. just a few
              developers making things we want to use.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#lab"
                className="btn-primary-glow group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] bg-green px-[22px] py-3 font-mono text-[13.5px] font-medium lowercase transition-transform duration-150 ease-out hover:-translate-y-0.5"
                style={{ color: "#0a1a0a", letterSpacing: "0.02em" }}
              >
                what we're building{" "}
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                  ↗
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] border border-hairline-strong px-[22px] py-3 font-mono text-[13.5px] font-medium lowercase text-ink transition-[transform,background,border-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-purple"
                style={{
                  background: "transparent",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(167,139,250,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                say hi
              </a>
            </div>

            <div
              className="mt-9 flex flex-wrap gap-7 font-mono text-ink-soft"
              style={{ fontSize: 12.5 }}
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <span
                  className="block h-2 w-2"
                  style={{
                    background: "var(--color-green)",
                    boxShadow: "0 0 12px var(--color-green)",
                  }}
                  aria-hidden="true"
                />
                est. recently
              </span>
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <span
                  className="block h-2 w-2"
                  style={{
                    background: "var(--color-pink)",
                    boxShadow: "0 0 12px var(--color-pink)",
                  }}
                  aria-hidden="true"
                />
                products shipped: 1
              </span>
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <span
                  className="block h-2 w-2"
                  style={{
                    background: "var(--color-cyan)",
                    boxShadow: "0 0 12px var(--color-cyan)",
                  }}
                  aria-hidden="true"
                />
                vibes: high
              </span>
            </div>
          </div>

          <HeroMascot />
        </div>
      </section>

      <Marquee />

      {/* ABOUT ─────────────────────────── */}
      <section id="about" className="py-[120px] max-[979px]:py-[80px]">
        <div className="mx-auto max-w-[920px] px-8">
          <div className="mb-16 flex max-w-[780px] flex-col gap-4">
            <div
              className="inline-flex items-center gap-2 whitespace-nowrap font-mono uppercase text-green"
              style={{ fontSize: 11, letterSpacing: "0.18em" }}
            >
              <span className="font-bold" aria-hidden="true">
                {">_"}
              </span>
              about
            </div>
            <h2
              className="m-0 font-display font-bold text-ink"
              style={{
                fontSize: "clamp(44px, 5.6vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              so, <span className="grad-text">what is this?_</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-12 text-ink-soft min-[980px]:grid-cols-2"
            style={{ fontSize: 17, lineHeight: 1.7 }}
          >
            <p className="m-0">
              chill vibes inc. is a new software company that builds{" "}
              <strong
                className="text-ink"
                style={{ fontWeight: 500 }}
              >
                its own
              </strong>{" "}
              SaaS products. we are not an agency. we won't build something for
              you. we are very politely the wrong vendor for that.
            </p>
            <p className="m-0">
              we made this website because we were told that businesses need
              websites. so here it is. our first product, meetn.ai, is live.
              more are cooking.
            </p>
          </div>
        </div>
      </section>

      {/* IN THE LAB ─────────────────────────── */}
      <section id="lab" className="py-[120px] max-[979px]:py-[80px]">
        <div className="mx-auto max-w-[var(--container-page)] px-8">
          <div className="mb-16 flex max-w-[780px] flex-col gap-4">
            <div
              className="inline-flex items-center gap-2 whitespace-nowrap font-mono uppercase text-green"
              style={{ fontSize: 11, letterSpacing: "0.18em" }}
            >
              <span className="font-bold" aria-hidden="true">
                {">_"}
              </span>
              in the lab
            </div>
            <h2
              className="m-0 font-display font-bold text-ink"
              style={{
                fontSize: "clamp(44px, 5.6vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              what we're <span className="grad-text">cooking_</span>
            </h2>
            <p
              className="m-0 max-w-[600px] text-ink-soft"
              style={{ fontSize: 17, lineHeight: 1.55 }}
            >
              three projects. one is live, two are cooking. all are real.
              drop your email at the bottom and we'll tell you the next one
              ships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[18px] min-[980px]:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.num} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES ─────────────────────────── */}
      <section className="py-[120px] max-[979px]:py-[80px]">
        <div className="mx-auto max-w-[var(--container-page)] px-8">
          <div className="mb-16 flex max-w-[780px] flex-col gap-4">
            <div
              className="inline-flex items-center gap-2 whitespace-nowrap font-mono uppercase text-green"
              style={{ fontSize: 11, letterSpacing: "0.18em" }}
            >
              <span className="font-bold" aria-hidden="true">
                {">_"}
              </span>
              how we work
            </div>
            <h2
              className="m-0 font-display font-bold text-ink"
              style={{
                fontSize: "clamp(44px, 5.6vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              a few rules <span className="grad-text">we keep</span>_
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-2 border-t border-hairline min-[980px]:grid-cols-4">
            {principles.map((p, i) => (
              <PrincipleStep
                key={p.title}
                principle={p}
                index={i}
                total={principles.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ─────────────────────────── */}
      <section id="faq" className="py-[120px] max-[979px]:py-[80px]">
        <div className="mx-auto max-w-[920px] px-8">
          <div className="mb-16 flex max-w-[780px] flex-col gap-4">
            <div
              className="inline-flex items-center gap-2 whitespace-nowrap font-mono uppercase text-green"
              style={{ fontSize: 11, letterSpacing: "0.18em" }}
            >
              <span className="font-bold" aria-hidden="true">
                {">_"}
              </span>
              you asked, we typed
            </div>
            <h2
              className="m-0 font-display font-bold text-ink"
              style={{
                fontSize: "clamp(44px, 5.6vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              questions <span className="grad-text">we expect_</span>
            </h2>
          </div>

          <div className="flex flex-col border-t border-hairline">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isLast={i === faqs.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA ─────────────────────────── */}
      <section id="contact" className="pt-[60px] pb-[120px]">
        <div className="mx-auto max-w-[var(--container-page)] px-8">
          <div
            className="cta-scan relative grid items-center gap-12 overflow-hidden rounded-[24px] border border-hairline-strong p-[80px_64px] max-[979px]:p-[48px_32px] max-[979px]:text-center min-[980px]:grid-cols-[1.4fr_1fr]"
            style={{
              background:
                "linear-gradient(135deg, rgba(196,80,255,0.12), rgba(109,213,255,0.08), rgba(255,109,200,0.12))",
            }}
          >
            <div>
              <div
                className="mb-4 inline-flex items-center gap-2 whitespace-nowrap font-mono uppercase text-green"
                style={{ fontSize: 11, letterSpacing: "0.18em" }}
              >
                <span className="font-bold" aria-hidden="true">
                  {">_"}
                </span>
                stay in the loop
              </div>
              <h2
                className="m-0 font-display font-bold"
                style={{
                  fontSize: "clamp(44px, 5.4vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                }}
              >
                we'll tell you
                <br />
                <em className="not-italic grad-text-cta">when we ship._</em>
              </h2>
              <p
                className="my-[18px] mb-7 max-w-[480px] text-ink-soft max-[979px]:mx-auto"
                style={{ fontSize: 17, lineHeight: 1.55 }}
              >
                drop your email and we'll send one short note when the next
                thing is live. no newsletter, no funnels, no "10 ways"
                listicles. just a heads up.
              </p>

              <SignupForm />
            </div>

            <div className="relative z-10 flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}mascot.png`}
                alt=""
                className="h-auto w-full max-w-[260px] mascot-shadow-mini animate-float-y-fast"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
