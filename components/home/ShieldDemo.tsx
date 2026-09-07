import { QuartzLogo } from "@/components/QuartzLogo";

/**
 * Shows what happens when your quota is gone and you reach for a shielded app.
 *
 * The copy, the button labels and the purple are taken verbatim from
 * BoahlilShieldConfiguration/ShieldConfigurationExtension.swift — this is the
 * depleted-quota branch (`hasQuota == false`), the one people actually hit.
 *
 * The whole loop is CSS keyframes on a shared 9s timeline, so it ships no
 * JavaScript and stops entirely under prefers-reduced-motion, which leaves the
 * shield resting in its visible state.
 */

// Abstract tiles rather than real app logos — the point is the shield, and
// nothing here should look like it is imitating another company's product.
const tiles = [
  "from-[#3b5bdb] to-[#1c7ed6]",
  "from-[#e8590c] to-[#f08c00]",
  "from-[#c2255c] to-[#a61e4d]",
  "from-[#2f9e44] to-[#66a80f]",
  "from-[#6741d9] to-[#3b5bdb]",
  "from-[#0c8599] to-[#1098ad]",
  "from-[#e03131] to-[#c2255c]",
  "from-[#5f3dc4] to-[#7048e8]",
];

export function ShieldDemo() {
  return (
    <div className="shield-demo relative mx-auto w-full max-w-[280px]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.25rem] border-[3px] border-line bg-black shadow-[0_0_60px_-15px_rgba(166,38,242,0.45)]">
        {/* ── The phone's home screen ── */}
        <div className="absolute inset-0 flex flex-col px-4 pt-3">
          <div className="mb-6 flex items-center justify-between px-1 text-[10px] font-semibold text-white/70">
            <span>9:41</span>
            <span aria-hidden="true">▮▮▮ ▮</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {tiles.map((tile, i) => (
              <div key={tile} className="flex flex-col items-center gap-1">
                <div
                  className={`shield-demo-tile h-11 w-11 rounded-[0.9rem] bg-gradient-to-br ${tile}`}
                  data-target={i === 1 ? "true" : undefined}
                />
                <span className="h-1 w-6 rounded-full bg-white/15" />
              </div>
            ))}
          </div>
        </div>

        {/* The tap that triggers it all */}
        <span className="shield-demo-tap absolute left-[calc(25%+0.55rem)] top-[3.55rem] h-11 w-11 rounded-[0.9rem] border-2 border-white/80" />

        {/* ── The shield ── */}
        <div className="shield-demo-shield absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/92 px-6 text-center backdrop-blur-md">
          <QuartzLogo className="h-14 w-auto text-neon-purple" />

          <p className="font-display text-xl font-bold text-white">
            You again? <span aria-hidden="true">👀</span>
          </p>

          <div className="space-y-1 text-[13px] leading-relaxed text-white/65">
            <p className="text-white/65">
              <span aria-hidden="true">💎</span> Instagram Blocked: 4x Today
            </p>
            <p className="font-semibold text-neon-magenta">
              <span aria-hidden="true">⏱️</span> Quota: Depleted
            </p>
          </div>

          <p className="text-[13px] leading-relaxed text-white/65">
            Train your focus in the Attention Gym to earn more doomscroll quota!
          </p>

          <div className="mt-1 flex w-full flex-col gap-2">
            <span className="rounded-full bg-shield py-2.5 text-[13px] font-semibold text-white">
              Close
            </span>
            <span className="rounded-full border border-white/15 py-2.5 text-[13px] font-semibold text-white">
              Train
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
