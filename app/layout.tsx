import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";

// Stack Sans — the typeface the iOS app uses (SIL OFL 1.1, see fonts/OFL.txt).
// One variable file spans the whole 200-700 axis, so every weight the app uses
// (Regular 400, SemiBold 600, Bold 700) comes from a single 50KB request.
const stackSans = localFont({
  src: "../fonts/StackSansText-Variable.woff2",
  // The font's default instance is ExtraLight; declaring the full axis stops
  // the browser clamping every weight to it.
  weight: "200 700",
  variable: "--font-stack-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Reduce Noise. Regain Focus. — ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `Reduce Noise. Regain Focus. — ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Reduce Noise. Regain Focus. — ${site.name}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={stackSans.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
