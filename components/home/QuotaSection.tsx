import Image from "next/image";
import { ShieldDemo } from "@/components/home/ShieldDemo";
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
  "neon-blue": "bg-neon-blue/20 border-neon-blue/30 text-neon-blue",
  "neon-purple": "bg-neon-purple/20 border-neon-purple/30 text-neon-purple",
  "neon-green": "bg-neon-green/20 border-neon-green/30 text-neon-green",
};

export function QuotaSection() {
  return (
    <section
      className="section-glow relative overflow-hidden py-20 md:py-32"
      id="quota"
      style={{ ["--section-glow" as string]: "#1307f5" }}
    >

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="order-2 flex-1 md:order-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neon-blue">
              01 — Doomscroll Quota
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold md:text-4xl">
              Social feeds are designed to{" "}
              <span className="text-highlight-blue">
                trap your attention.
              </span>{" "}
              We break the loop.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted">
              Quartz integrates natively with iOS Screen Time to set a hard daily
              doomscroll quota. Once your allotted time runs out, your selected
              apps are natively locked — no VPN workaround, no browser loophole.
              Your shield is at the OS level.
            </p>

            <div className="mb-8 flex flex-col gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold ${bubbleClasses[feature.color]}`}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="mb-0.5 text-sm font-semibold text-ink">
                      {feature.title}
                    </p>
                    <p className="text-sm text-muted">{feature.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The live quota ring, straight out of the app. */}
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4">
              <Image
                src={assetPath("/assets/quota-ring.webp")}
                alt="The Quartz home screen: a ring counting down 45 minutes of remaining doomscroll quota"
                width={560}
                height={698}
                className="h-24 w-auto"
              />
              <div>
                <p className="mb-1 text-sm font-semibold text-ink">
                  Your quota, always visible
                </p>
                <p className="text-sm text-muted">
                  The ring drains as you scroll. When it empties, the shield goes
                  up.
                </p>
              </div>
            </div>
          </div>

          {/* The shield itself */}
          <div className="order-1 flex flex-1 flex-col items-center gap-4 md:order-2">
            <ShieldDemo />
            <p className="max-w-[280px] text-center text-xs text-muted">
              Out of quota, reaching for a shielded app. This is the actual
              Quartz shield — it replaces the app at the OS level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
