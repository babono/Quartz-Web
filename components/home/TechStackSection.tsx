import type { ReactNode } from "react";

/**
 * Every claim here is checked against the app source at
 * /Users/babono/Dev/boahlil — CloudKit (Services/CloudKitService.swift, the
 * public database), Family Controls and DeviceActivity (both entitled and
 * imported across the app and its three extensions).
 *
 * The icons are drawn rather than lifted from Apple's framework artwork: the
 * originals are Apple trademarks and don't belong on a third-party site.
 */

function IconCode() {
  return (
    <>
      <path d="M9 8l-5 6 5 6" />
      <path d="M19 8l5 6-5 6" />
      <path d="M16.5 5l-5 18" />
    </>
  );
}

function IconCloud() {
  return (
    <>
      <path d="M8.5 22a5 5 0 011-9.9 6.5 6.5 0 0112.4-1.6A4.75 4.75 0 0121.5 22z" />
      <path d="M14 15v6" />
      <path d="M11 18l3-3 3 3" />
    </>
  );
}

function IconHourglass() {
  return (
    <>
      <path d="M8 4h12" />
      <path d="M8 24h12" />
      <path d="M9.5 4v4.2c0 2.4 4.5 3.9 4.5 5.8s-4.5 3.4-4.5 5.8V24" />
      <path d="M18.5 4v4.2c0 2.4-4.5 3.9-4.5 5.8s4.5 3.4 4.5 5.8V24" />
    </>
  );
}

function IconActivity() {
  return (
    <>
      <path d="M3 14h4l3-8 4 16 3-8h6" />
    </>
  );
}

type Tech = {
  name: string;
  body: string;
  icon: ReactNode;
  glow: string;
  ring: string;
  accent: string;
};

const stack: Tech[] = [
  {
    name: "Swift & SwiftUI",
    body: "Powering native, high-performance fluid user interfaces and the four interactive mini-games.",
    icon: <IconCode />,
    glow: "glow-purple",
    ring: "border-neon-purple/30 bg-neon-purple/10",
    accent: "text-neon-purple-bright",
  },
  {
    name: "CloudKit",
    body: "Enabling seamless cross-device sync, secure Sign in with Apple, and the real-time global leaderboard — all in Apple's iCloud, with no server of our own.",
    icon: <IconCloud />,
    glow: "glow-green",
    ring: "border-neon-green/30 bg-neon-green/10",
    accent: "text-neon-green",
  },
  {
    name: "Screen Time API & Family Controls",
    body: "Deep iOS integration to monitor device activity, manage focus quotas, and shield apps at the OS level.",
    icon: <IconHourglass />,
    glow: "glow-amber",
    ring: "border-neon-amber/30 bg-neon-amber/10",
    accent: "text-neon-amber",
  },
  {
    name: "Device Activity Extensions",
    body: "Running efficiently in the background to accurately track app usage and enforce your doomscroll limits.",
    icon: <IconActivity />,
    glow: "glow-cyan",
    ring: "border-neon-cyan/30 bg-neon-cyan/10",
    accent: "text-neon-cyan",
  },
];

export function TechStackSection() {
  return (
    <section
      className="section-glow relative overflow-hidden py-20 md:py-32"
      id="tech"
      style={{ ["--section-glow" as string]: "#338cff" }}
    >
      <div className="container-custom relative z-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neon-cyan">
            05 — Tech Stack
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Built natively, <span className="text-highlight-blue">on Apple&apos;s own rails.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            No cross-platform shell, no VPN trickery, no server holding your
            data. Quartz is a native iOS app that leans on the frameworks Apple
            built for exactly this job.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className={`glass-card ${tech.glow} flex flex-col gap-4 p-6`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${tech.ring}`}
              >
                <svg
                  viewBox="0 0 28 28"
                  className={`h-6 w-6 ${tech.accent}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {tech.icon}
                </svg>
              </span>
              <h3 className={`font-display text-lg font-bold ${tech.accent}`}>
                {tech.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{tech.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
