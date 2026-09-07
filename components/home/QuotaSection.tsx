import Image from "next/image";
import { assetPath } from "@/lib/site";

const features = [
  {
    color: "neon-blue",
    title: "Set your daily quota",
    body: "Define exactly how many minutes of scroll time you allow yourself each day.",
  },
  {
    color: "neon-purple",
    title: "Native OS-level shielding",
    body: "Quartz uses Apple's Screen Time API to block selected apps at the system level — unbypassable.",
  },
  {
    color: "neon-green",
    title: "Track remaining quota live",
    body: "A real-time countdown ring shows your remaining scroll budget at all times.",
  },
] as const;

// Tailwind scans source files literally, so the per-feature classes are written
// out in full rather than composed from the `color` key at runtime.
const bubbleClasses: Record<(typeof features)[number]["color"], string> = {
  "neon-blue":
    "bg-neon-blue/20 border-neon-blue/30 text-neon-blue",
  "neon-purple":
    "bg-neon-purple/20 border-neon-purple/30 text-neon-purple",
  "neon-green":
    "bg-neon-green/20 border-neon-green/30 text-neon-green",
};

export function QuotaSection() {
  return (
    <section className="relative py-20 md:py-32 bg-surface/30" id="quota">
      <div className="bg-orb w-[400px] h-[400px] -left-40 top-20 bg-neon-blue opacity-10" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-xs font-bold tracking-widest text-neon-blue uppercase mb-3">
              01 — Doomscroll Quota
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Social feeds are designed to{" "}
              <span className="gradient-text-cyan-blue">
                trap your attention.
              </span>{" "}
              We break the loop.
            </h2>
            <p className="text-muted text-base mb-6 leading-relaxed">
              Quartz integrates natively with iOS Screen Time to set a hard daily
              doomscroll quota. Once your allotted time runs out, your selected
              apps are natively locked — no VPN workaround, no browser loophole.
              Your shield is at the OS level.
            </p>
            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold ${bubbleClasses[feature.color]}`}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-ink font-semibold text-sm mb-0.5">
                      {feature.title}
                    </p>
                    <p className="text-muted text-sm">{feature.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <div className="relative glass-card glow-blue p-2 max-w-xs w-full">
              <Image
                src={assetPath("/assets/homefix.webp")}
                alt="Quartz home screen showing the doomscroll quota timer ring"
                width={640}
                height={1392}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
