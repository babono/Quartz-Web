import Image from "next/image";
import { assetPath } from "@/lib/site";

const games = [
  {
    icon: "🧠",
    name: "Memory Pattern",
    body: "Remember the sequence on the grid, then recreate it exactly before time runs out.",
    glow: "glow-magenta",
    bubble: "bg-neon-magenta/20 border-neon-magenta/30",
    accent: "text-neon-magenta",
  },
  {
    icon: "🔍",
    name: "Word Search",
    body: "Hunt hidden words hidden inside a scrambled letter grid. Beat the clock to win.",
    glow: "glow-green",
    bubble: "bg-neon-green/20 border-neon-green/30",
    accent: "text-neon-green",
  },
  {
    icon: "🔗",
    name: "Connect Dots",
    body: "Match colors and connect all the dots on the board. Paths can't cross.",
    glow: "glow-cyan",
    bubble: "bg-neon-cyan/20 border-neon-cyan/30",
    accent: "text-neon-cyan",
  },
  {
    icon: "🌊",
    name: "Wave Runner",
    body: "Ride the wave path and dodge incoming spikes. Reaction time is everything.",
    glow: "glow-purple",
    bubble: "bg-neon-purple/20 border-neon-purple/30",
    accent: "text-neon-purple",
  },
] as const;

export function GymSection() {
  return (
    <section className="relative py-20 md:py-32" id="gym">
      <div className="bg-orb w-[500px] h-[500px] -right-40 bottom-20 bg-neon-magenta opacity-10" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest text-neon-magenta uppercase mb-3">
            02 — Attention Gym
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t quit cold turkey.{" "}
            <span className="gradient-text-purple-blue">Train instead.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            When your quota runs low, don&apos;t panic. Head to the Attention Gym
            and earn +5 minutes of scroll time by completing focus-based arcade
            challenges. One game at a time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 grid grid-cols-2 gap-4">
            {games.map((game) => (
              <div
                key={game.name}
                className={`glass-card ${game.glow} flex flex-col gap-3`}
              >
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg ${game.bubble}`}
                  aria-hidden="true"
                >
                  {game.icon}
                </div>
                <h3 className="font-display text-base font-bold text-ink">
                  {game.name}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{game.body}</p>
                <span
                  className={`mt-auto text-xs font-semibold ${game.accent}`}
                >
                  +5 min quota
                </span>
              </div>
            ))}
          </div>

          <div className="flex-1 max-w-sm mx-auto lg:mx-0 flex justify-center lg:justify-end">
            <div className="glass-card glow-purple p-2">
              <Image
                src={assetPath("/assets/gamefix.webp")}
                alt="Quartz Attention Gym arcade game grid"
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
