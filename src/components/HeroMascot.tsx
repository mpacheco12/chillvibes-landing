export function HeroMascot() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
      <div className="mascot-orb" aria-hidden="true" />

      <span
        className="absolute z-30 font-display animate-twinkle"
        style={{
          top: "6%",
          left: "8%",
          color: "var(--color-purple)",
          animationDelay: "0s",
          fontSize: 36,
        }}
        aria-hidden="true"
      >
        ✦
      </span>
      <span
        className="absolute z-30 font-display animate-twinkle"
        style={{
          top: "14%",
          right: "10%",
          color: "var(--color-cyan)",
          animationDelay: "0.4s",
          fontSize: 28,
        }}
        aria-hidden="true"
      >
        ✦
      </span>
      <span
        className="absolute z-30 font-display animate-twinkle"
        style={{
          bottom: "18%",
          right: "4%",
          color: "var(--color-pink)",
          animationDelay: "0.9s",
          fontSize: 22,
        }}
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute z-30 font-display animate-twinkle"
        style={{
          top: "42%",
          right: "18%",
          color: "var(--color-green)",
          animationDelay: "1.3s",
          fontSize: 18,
        }}
        aria-hidden="true"
      >
        ✦
      </span>

      <img
        src={`${import.meta.env.BASE_URL}mascot.png`}
        alt="chill vibes mascot"
        className="relative z-20 w-[88%] h-auto mascot-shadow animate-float-y"
      />

      <div
        className="absolute z-40 rounded-[10px] border border-hairline-strong px-[14px] py-[10px] font-mono text-ink shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md animate-bob-a-slow whitespace-nowrap"
        style={{
          top: "8%",
          left: "-4%",
          background: "rgba(26,14,53,0.85)",
          fontSize: 12,
        }}
      >
        <span
          className="block font-mono whitespace-nowrap"
          style={{
            color: "var(--color-ink-dim)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          build_001
        </span>
        <span style={{ color: "var(--color-green)" }}>in progress</span>
      </div>

      <div
        className="absolute z-40 rounded-[10px] border border-hairline-strong px-[14px] py-[10px] font-mono text-ink shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md animate-bob-b whitespace-nowrap"
        style={{
          bottom: "18%",
          left: "-8%",
          background: "rgba(26,14,53,0.85)",
          fontSize: 12,
        }}
      >
        <span
          className="block font-mono whitespace-nowrap"
          style={{
            color: "var(--color-ink-dim)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          team size
        </span>
        <span style={{ color: "var(--color-green)" }}>small on purpose</span>
      </div>

      <div
        className="absolute z-40 rounded-[10px] border border-hairline-strong px-[14px] py-[10px] font-mono text-ink shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md animate-bob-a whitespace-nowrap"
        style={{
          top: "30%",
          right: "-6%",
          background: "rgba(26,14,53,0.85)",
          fontSize: 12,
        }}
      >
        <span
          className="block font-mono whitespace-nowrap"
          style={{
            color: "var(--color-ink-dim)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          mood
        </span>
        <span style={{ color: "var(--color-pink)" }}>unbothered</span>
      </div>
    </div>
  );
}
