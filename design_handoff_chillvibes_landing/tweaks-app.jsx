// tweaks-app.jsx — Tweaks for chill vibes inc. landing

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#0a0512", "#ff6dc8", "#6dd5ff", "#a78bfa", "#5af542"],
  "displayFont": "Bricolage Grotesque",
  "headline1": "we make",
  "headlineGrad": "saas.",
  "headline3a": "that's ",
  "headline3b": "the bit._",
  "showScanlines": true,
  "showSparkles": true
}/*EDITMODE-END*/;

const PALETTES = [
  ["#0a0512", "#ff6dc8", "#6dd5ff", "#a78bfa", "#5af542"], // brand default
  ["#000000", "#ff3d8a", "#00d4ff", "#9d4dff", "#39ff88"], // higher-contrast neon
  ["#0e1117", "#ffb86b", "#76e2c0", "#c0a8ff", "#ffe57e"], // warm dusk
  ["#0c0a16", "#f15bb5", "#9b5de5", "#00bbf9", "#00f5d4"], // synthwave
  ["#fdf6ec", "#d63384", "#0d6efd", "#6610f2", "#198754"]  // light mode (experiment)
];

const DISPLAY_FONTS = ["Bricolage Grotesque", "Space Grotesk", "Instrument Serif", "JetBrains Mono"];

function applyTweaks(t) {
  const root = document.documentElement;
  const [bg, pink, cyan, purple, green] = t.palette;
  root.style.setProperty('--bg', bg);
  root.style.setProperty('--bg-2', mix(bg, purple, 0.12));
  root.style.setProperty('--bg-3', mix(bg, purple, 0.22));
  root.style.setProperty('--pink', pink);
  root.style.setProperty('--pink-soft', mix(pink, '#ffffff', 0.45));
  root.style.setProperty('--cyan', cyan);
  root.style.setProperty('--purple', purple);
  root.style.setProperty('--magenta', mix(pink, purple, 0.4));
  root.style.setProperty('--green', green);

  // light mode adjustment for ink
  const isLight = isLightColor(bg);
  root.style.setProperty('--ink', isLight ? '#1a0f2e' : '#f4eada');
  root.style.setProperty('--ink-soft', isLight ? '#5e4c7a' : '#a796c5');
  root.style.setProperty('--ink-dim', isLight ? '#9989b3' : '#6a577e');
  root.style.setProperty('--hairline', isLight ? 'rgba(102,16,242,.18)' : 'rgba(167,139,250,.18)');
  root.style.setProperty('--hairline-strong', isLight ? 'rgba(102,16,242,.35)' : 'rgba(167,139,250,.35)');

  // body bg gradient orbs
  document.body.style.backgroundImage = `
    radial-gradient(900px 600px at 85% -10%, ${rgba(purple,.22)}, transparent 70%),
    radial-gradient(800px 500px at -10% 30%, ${rgba(cyan,.14)}, transparent 70%),
    radial-gradient(700px 500px at 50% 110%, ${rgba(pink,.18)}, transparent 70%)
  `;

  root.style.setProperty('--display', `'${t.displayFont}', 'Space Grotesk', ui-sans-serif, system-ui, sans-serif`);

  // Headline edits
  const h1 = document.querySelector('.hero h1');
  if (h1) {
    h1.innerHTML = `
      <span class="line we">${escapeHtml(t.headline1)}</span>
      <span class="line saas">${escapeHtml(t.headlineGrad)}</span>
      <span class="line"><span class="ship">${escapeHtml(t.headline3a)}</span><span class="vibes">${escapeHtml(t.headline3b)}</span></span>
    `;
  }

  // toggle scanlines / sparkles
  const scan = document.querySelector('.scanlines');
  if (scan) scan.style.display = t.showScanlines ? '' : 'none';
  document.querySelectorAll('.spark').forEach(el => el.style.display = t.showSparkles ? '' : 'none');
}

function mix(a, b, t) {
  const pa = hexToRgb(a), pb = hexToRgb(b);
  const r = Math.round(pa[0] * (1 - t) + pb[0] * t);
  const g = Math.round(pa[1] * (1 - t) + pb[1] * t);
  const bl = Math.round(pa[2] * (1 - t) + pb[2] * t);
  return `rgb(${r}, ${g}, ${bl})`;
}
function hexToRgb(h) {
  if (h.startsWith('rgb')) {
    const m = h.match(/\d+/g).map(Number);
    return [m[0], m[1], m[2]];
  }
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}
function rgba(h, a) {
  const [r,g,b] = hexToRgb(h);
  return `rgba(${r},${g},${b},${a})`;
}
function isLightColor(h) {
  const [r,g,b] = hexToRgb(h);
  return (r*0.299 + g*0.587 + b*0.114) > 150;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Palette" />
      <TweakColor
        label="Brand"
        value={t.palette}
        options={PALETTES}
        onChange={(v) => setTweak('palette', v)}
      />

      <TweakSection label="Typography" />
      <TweakSelect
        label="Display font"
        value={t.displayFont}
        options={DISPLAY_FONTS}
        onChange={(v) => setTweak('displayFont', v)}
      />

      <TweakSection label="Hero" />
      <TweakText label="Line 1" value={t.headline1} onChange={(v) => setTweak('headline1', v)} />
      <TweakText label="Gradient line" value={t.headlineGrad} onChange={(v) => setTweak('headlineGrad', v)} />
      <TweakText label="Line 3 (a)" value={t.headline3a} onChange={(v) => setTweak('headline3a', v)} />
      <TweakText label="Line 3 (b, gradient)" value={t.headline3b} onChange={(v) => setTweak('headline3b', v)} />

      <TweakSection label="Effects" />
      <TweakToggle label="CRT scanlines" value={t.showScanlines} onChange={(v) => setTweak('showScanlines', v)} />
      <TweakToggle label="Sparkles" value={t.showSparkles} onChange={(v) => setTweak('showSparkles', v)} />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<App />);
