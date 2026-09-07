import Image from "next/image";
import Link from "next/link";
import { assetPath, site } from "@/lib/site";

function AppleIcon() {
  return (
    <svg
      className="w-4 h-4 inline mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="bg-orb w-[600px] h-[600px] -top-40 -right-40 bg-neon-purple" />
      <div className="bg-orb w-[400px] h-[400px] top-1/2 -left-20 bg-neon-blue" />

      <div className="container-custom relative z-10 flex flex-col items-center text-center gap-10 md:flex-row md:text-left md:gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-flex items-center self-center md:self-start gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-xs font-semibold text-neon-purple">
            <span aria-hidden="true">◆</span>
            <span>Now on TestFlight</span>
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            <span className="gradient-text-purple-blue">Reduce Noise.</span>
            <br />
            Regain Focus.
          </h1>

          <p className="max-w-lg text-lg text-muted leading-relaxed">
            Break the infinite doomscroll loop. Shield your feeds, complete focus
            arcade challenges to earn screen time, and stack Quartz as you master
            your attention.
          </p>

          <div className="flex flex-col sm:flex-row items-center self-center md:self-start gap-4 mt-2">
            <a className="glowing-btn gap-2" href={site.testFlightUrl}>
              <AppleIcon />
              Download on TestFlight
            </a>
            <Link className="btn-secondary" href="/#quota">
              How it Works
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
          <Image
            src={assetPath("/assets/crystal.webp")}
            alt="Quartz Crystal — your focus currency"
            width={768}
            height={1030}
            priority
            className="w-full h-full object-contain pulse-breathing drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
