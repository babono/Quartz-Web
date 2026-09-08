import Link from "next/link";
import { AppleLogo } from "@/components/AppleLogo";
import { QuartzLogo } from "@/components/QuartzLogo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <nav className="footer-nav" aria-label="Footer">
        <Link
          className="flex items-center gap-1 font-bold text-ink no-underline hover:text-white"
          href="/"
        >
          <QuartzLogo className="h-5 w-auto text-neon-purple" />
          <span>{site.name}</span>
        </Link>
        <div className="nav-links">
          <Link href="/support">Support</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </nav>
      <p>
        Built at{" "}
        {/* Inline rather than flexed so the credit still wraps as text on
            narrow screens. */}
        <AppleLogo className="inline-block h-[0.95em] w-auto -translate-y-[0.09em] align-middle text-ink" />{" "}
        <span className="text-ink">Apple Developer Academy Bali.</span>{" "}
        {site.name} Website © 2026.
      </p>
    </footer>
  );
}
