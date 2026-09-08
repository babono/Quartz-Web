import type { ReactNode } from "react";

/**
 * Each of these maps to something real in the app:
 *   Larger Text        241 `.font(.custom(..., relativeTo:))` call sites, so
 *                      every label scales with Dynamic Type
 *   Reduce Motion      `@Environment(\.accessibilityReduceMotion)`, checked
 *                      before each repeating animation starts
 *   VoiceOver          accessibilityLabel / accessibilityElement across views
 *   Dark Interface     `.preferredColorScheme(.dark)`
 */

type Feature = {
  name: string;
  body: string;
  icon: ReactNode;
  glow: string;
  ring: string;
  accent: string;
};

const features: Feature[] = [
  {
    name: "Larger Text",
    body: "Text sizes scale with your system setting, staying readable without breaking the layout.",
    icon: (
      <>
        <path d="M2 22L8 6l6 16" />
        <path d="M4.2 16.5h7.6" />
        <path d="M15 22l5.5-13L26 22" />
        <path d="M17 17.5h7" />
      </>
    ),
    glow: "glow-purple",
    ring: "border-neon-purple/30 bg-neon-purple/10",
    accent: "text-neon-purple-bright",
  },
  {
    name: "Reduce Motion",
    body: "Turns off the glowing effects, screen transitions and gameplay animations for anyone sensitive to movement.",
    icon: (
      <>
        <circle cx="14" cy="14" r="6" />
        <circle cx="14" cy="14" r="10.5" strokeDasharray="1.5 3.5" />
      </>
    ),
    glow: "glow-green",
    ring: "border-neon-green/30 bg-neon-green/10",
    accent: "text-neon-green",
  },
  {
    name: "Sufficient Contrast",
    body: "High-contrast text and interface elements keep everything legible for low-vision users.",
    icon: (
      <>
        <circle cx="14" cy="14" r="9" />
        <path d="M14 5v18a9 9 0 000-18z" fill="currentColor" stroke="none" />
      </>
    ),
    glow: "glow-amber",
    ring: "border-neon-amber/30 bg-neon-amber/10",
    accent: "text-neon-amber",
  },
  {
    name: "Voice Control",
    body: "Every button carries a spoken label, so the whole app can be driven hands-free with voice commands.",
    icon: (
      <>
        <path d="M6 11v6" />
        <path d="M10 7v14" />
        <path d="M14 4v20" />
        <path d="M18 8v12" />
        <path d="M22 11v6" />
      </>
    ),
    glow: "glow-cyan",
    ring: "border-neon-cyan/30 bg-neon-cyan/10",
    accent: "text-neon-cyan",
  },
  {
    name: "VoiceOver",
    body: "Spoken descriptions explain your focus metrics, the game boards, and what each screen is doing.",
    icon: (
      <>
        <path d="M4 11v6h4l5 4V7l-5 4z" />
        <path d="M18 10a5 5 0 010 8" />
        <path d="M21.5 7a9 9 0 010 14" />
      </>
    ),
    glow: "glow-violet",
    ring: "border-neon-violet/30 bg-neon-violet/10",
    accent: "text-neon-violet",
  },
  {
    name: "Dark Interface",
    body: "A neon-on-black layout throughout, chosen to cut eye strain and visual noise.",
    icon: (
      <>
        <path d="M22 17.5A9.5 9.5 0 0110.5 6a9 9 0 1011.5 11.5z" />
      </>
    ),
    glow: "glow-magenta",
    ring: "border-neon-magenta/30 bg-neon-magenta/10",
    accent: "text-neon-magenta",
  },
];

export function AccessibilitySection() {
  return (
    <section
      className="section-glow relative overflow-hidden py-20 md:py-32"
      id="accessibility"
      style={{ ["--section-glow" as string]: "#ad38ff" }}
    >
      <div className="container-custom relative z-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neon-violet">
            06 — Accessibility
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            An app about attention{" "}
            <span className="text-highlight-purple">everyone can use.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Quartz supports the iOS accessibility settings you already have
            switched on — it reads your preferences rather than asking you to
            configure anything twice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`glass-card ${feature.glow} flex flex-col gap-3 p-6`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${feature.ring}`}
              >
                <svg
                  viewBox="0 0 28 28"
                  className={`h-5 w-5 ${feature.accent}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className={`font-display text-base font-bold ${feature.accent}`}>
                {feature.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
