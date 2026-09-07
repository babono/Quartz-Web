import Image from "next/image";
import { assetPath } from "@/lib/site";

const perks = [
  {
    icon: "🔥",
    title: "Daily Streaks",
    body: "Keep your focus monitor active every day to build a streak. Miss a day and it resets.",
  },
  {
    icon: "🏆",
    title: "Quartz Rankings",
    body: "Your Quartz balance determines your rank on the global leaderboard.",
  },
  {
    icon: "📊",
    title: "Reflect & Improve",
    body: "Weekly reflections and daily habit snapshots help you understand your scrolling patterns.",
  },
] as const;

export function LeaderboardSection() {
  return (
    <section className="relative py-20 md:py-32" id="rank">
      <div className="bg-orb w-[400px] h-[400px] -right-20 top-0 bg-neon-green opacity-10" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="glass-card glow-green p-2 max-w-xs w-full">
              <Image
                src={assetPath("/assets/rank-fix.webp")}
                alt="Quartz leaderboard showing ranked users and streak badges"
                width={640}
                height={1392}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest text-neon-green uppercase mb-3">
              04 — Leaderboard
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Mindful phone use is better{" "}
              <span className="text-neon-green">with stakes.</span>
            </h2>
            <p className="text-muted text-base mb-6 leading-relaxed">
              Stack your active streak days. Climb the Quartz leaderboard.
              Reflect daily on your digital habits. Quartz turns screen-time
              discipline into something worth competing for.
            </p>
            <div className="flex flex-col gap-4">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-xl" aria-hidden="true">
                    {perk.icon}
                  </span>
                  <div>
                    <p className="text-ink font-semibold text-sm mb-0.5">
                      {perk.title}
                    </p>
                    <p className="text-muted text-sm">{perk.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
