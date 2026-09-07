import Link from "next/link";
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
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </nav>
      <p>
        Built with{" "}
        <a href="https://nextjs.org">Next.js.</a> {site.name} Website © 2026.
      </p>
    </footer>
  );
}
