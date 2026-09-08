import Image from "next/image";
import { assetPath } from "@/lib/site";

const rows = [
  { time: "0 min", multiplier: "1.00×", multiplierClass: "text-muted", saved: "45 min", reward: "45 Quartz" },
  { time: "60 min", multiplier: "1.20×", multiplierClass: "text-neon-cyan", saved: "40 min", reward: "48 Quartz" },
  { time: "120 min", multiplier: "1.40×", multiplierClass: "text-neon-cyan", saved: "35 min", reward: "49 Quartz" },
  { time: "180 min", multiplier: "1.60×", multiplierClass: "text-neon-purple", saved: "30 min", reward: "48 Quartz" },
  { time: "240 min", multiplier: "1.80×", multiplierClass: "text-neon-magenta", saved: "25 min", reward: "45 Quartz" },
  {
    time: "300 min ⚡",
    multiplier: "2.00× MAX",
    multiplierClass: "gradient-text-purple-blue font-extrabold",
    saved: "20 min",
    reward: "40 Quartz",
    max: true,
  },
] as const;

export function EconomySection() {
  return (
    <section
      className="section-glow relative overflow-hidden py-20 md:py-32"
      id="economy"
      style={{ ["--section-glow" as string]: "#a944fb" }}
    >

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest text-neon-purple uppercase mb-3">
            03 — Focus Economy
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Dopamine balancing{" "}
            <span className="gradient-text-purple-blue">by design.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Focus isn&apos;t just about blocking. It earns. The longer your focus
            session runs uninterrupted, the more your attention multiplier
            compounds — reaching up to 2.0× at 5 hours. Your remaining quota
            converts to Quartz at midnight.
          </p>
        </div>

        <div className="glass-card glow-purple max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="font-display text-lg font-bold text-ink mb-1">
              Compounding Effect Table
            </h3>
            <p className="text-muted text-sm">
              Quartz rewards scale with your focus time. End early and the surge
              multiplier is voided.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="economy-table">
              <thead>
                <tr>
                  <th scope="col">Focus Time</th>
                  <th scope="col">Multiplier</th>
                  <th scope="col">Quota Saved</th>
                  <th scope="col">Est. Reward</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.time}>
                    <td>{row.time}</td>
                    <td>
                      <span className={row.multiplierClass}>
                        {row.multiplier}
                      </span>
                    </td>
                    <td>{row.saved}</td>
                    <td>
                      <span
                        className={`inline-flex items-center gap-1.5 ${
                          "max" in row && row.max
                            ? "text-base font-bold text-neon-green"
                            : "font-bold text-neon-green"
                        }`}
                      >
                        <Image
                          src={assetPath("/assets/ic-quartz.webp")}
                          alt=""
                          width={96}
                          height={144}
                          className="h-3.5 w-auto"
                        />
                        {row.reward}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted italic">
            ⚠︎ Turning off your focus monitor early voids the compounding
            multiplier and resets your streak.
          </p>
        </div>
      </div>
    </section>
  );
}
