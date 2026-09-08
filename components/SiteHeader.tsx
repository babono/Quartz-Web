import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";
import { QuartzLogo } from "@/components/QuartzLogo";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link className="site-title" href="/">
          <QuartzLogo className="h-6 w-auto text-neon-purple" />
          <span>{site.name}</span>
        </Link>
        {/* Seven items no longer fit at the md breakpoint — they pushed the page
            wider than the viewport at 768px. */}
        <NavLinks className="nav-links hidden lg:flex" />
        <div>
          <a
            className="inline-flex items-center justify-center rounded-full bg-neon-purple/20 border border-neon-purple/30 px-4 py-1.5 text-xs font-semibold text-white no-underline hover:bg-neon-purple/40 transition-colors"
            href={site.testFlightUrl}
          >
            TestFlight
          </a>
        </div>
      </nav>
    </header>
  );
}
