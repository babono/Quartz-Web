import Image from "next/image";
import { assetPath } from "@/lib/site";

/**
 * Accent colours and game order match AttentionGymView.swift; the artwork is
 * the app's own img-game-* assets. Wave Runner has no such asset in the app, so
 * it gets an inline SVG of its wave path in the matching violet.
 */
const games = [
  {
    name: "Memory Pattern",
    body: "Remember the pattern, repeat it!",
    art: "/assets/game-memory.webp",
    alt: "Memory Pattern: a grid lighting up a sequence to repeat",
    glow: "glow-magenta",
    ring: "border-neon-magenta/30",
    accent: "text-neon-magenta",
    delay: "0s",
  },
  {
    name: "Word Search",
    body: "Hunt hidden words, beat the clock",
    art: "/assets/game-words.webp",
    alt: "Word Search: a letter grid with found words highlighted",
    glow: "glow-green",
    ring: "border-neon-green/30",
    accent: "text-neon-green",
    delay: "0.4s",
  },
  {
    name: "Connect Dots",
    body: "Match & connect all the dots!",
    art: "/assets/game-dots.webp",
    alt: "Connect Dots: coloured dots joined by paths across a board",
    glow: "glow-cyan",
    ring: "border-neon-cyan/30",
    accent: "text-neon-cyan",
    delay: "0.8s",
  },
  {
    name: "Wave Runner",
    body: "Ride the wave path, dodge spikes!",
    art: null,
    alt: null,
    glow: "glow-violet",
    ring: "border-neon-violet/30",
    accent: "text-neon-violet",
    delay: "1.2s",
  },
] as const;

function WaveArt() {
  return (
    <svg
      viewBox="0 0 200 240"
      className="h-full w-full"
      role="img"
      aria-label="Wave Runner: a neon path winding between obstacles"
    >
      <path
        d="M100 236C60 208 140 190 100 162S60 116 100 88 140 42 100 14"
        fill="none"
        stroke="#ad38ff"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M100 236V14" stroke="#ad38ff" strokeWidth="1.5" opacity="0.35" />
      {[54, 110, 166].map((cy, i) => (
        <circle
          key={cy}
          cx={i === 1 ? 122 : 78}
          cy={cy}
          r="9"
          fill="#0a0b0d"
          stroke="#ad38ff"
          strokeWidth="3"
        />
      ))}
      <path d="M100 176l9 16H91z" fill="#f22e9e" />
    </svg>
  );
}

export function GymSection() {
  return (
    <section
      className="section-glow relative overflow-hidden py-20 md:py-32"
      id="gym"
      style={{ ["--section-glow" as string]: "#f22e9e" }}
    >

      <div className="container-custom relative z-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neon-magenta">
            02 — Attention Gym
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Don&apos;t quit cold turkey.{" "}
            <span className="text-highlight-magenta">Train instead.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            When your quota runs low, don&apos;t panic. Head to the Attention Gym
            and earn back scroll time by completing focus-based arcade
            challenges. One game at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.name}
              className={`glass-card ${game.glow} float-card flex flex-col gap-4 p-5`}
              style={{ animationDelay: game.delay }}
            >
              <div
                className={`overflow-hidden rounded-xl border ${game.ring} bg-black/40`}
              >
                <div className="relative mx-auto aspect-[5/6] w-full max-w-[190px] p-2">
                  {game.art ? (
                    <Image
                      src={assetPath(game.art)}
                      alt={game.alt ?? ""}
                      width={560}
                      height={672}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <WaveArt />
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <h3 className="font-display text-base font-bold text-ink">
                  {game.name}
                </h3>
                <p className="text-xs leading-relaxed text-muted">{game.body}</p>
              </div>

              <span
                className={`self-start rounded-full border px-3 py-1 text-xs font-semibold ${game.ring} ${game.accent}`}
              >
                +5 min quota
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Every win adds quota back to your day — earned, not taken.
        </p>
      </div>
    </section>
  );
}
