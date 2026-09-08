import Image from "next/image";
import Link from "next/link";
import { AppleLogo } from "@/components/AppleLogo";
import { assetPath, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="section-glow section-glow-strong relative flex min-h-screen items-center overflow-hidden"
      style={{ ["--section-glow" as string]: "#a626f2" }}
    >

      <div className="container-custom relative z-10 flex flex-col items-center text-center gap-10 md:flex-row md:text-left md:gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-flex items-center self-center md:self-start gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-xs font-semibold text-neon-purple">
            <span aria-hidden="true">◆</span>
            <span>Now on TestFlight</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            <span className="text-highlight-purple">Reduce Noise.</span>
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
              <AppleLogo className="mr-1 inline h-4 w-4" />
              Download on TestFlight
            </a>
            <Link className="btn-secondary" href="/#quota">
              How it Works
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
          <Image
            src={assetPath("/assets/logo-crystal.webp")}
            alt="Quartz Crystal — your focus currency"
            width={768}
            height={1021}
            priority
            className="w-full h-full object-contain pulse-breathing drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
