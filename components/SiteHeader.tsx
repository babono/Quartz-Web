import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link className="site-title" href="/">
          <span className="text-neon-purple mr-1" aria-hidden="true">
            ◆
          </span>
          <span>{site.name}</span>
        </Link>
        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
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
