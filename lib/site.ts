export const site = {
  name: "Quartz",
  author: "Quartz Team",
  url: "https://www.quartz-focus.com",
  testFlightUrl: "https://testflight.apple.com/join/G8ufCuTB",
  description:
    "Quartz is a gamified screen-time manager and digital wellness sanctuary that helps you break the infinite scrolling loop.",
} as const;

export const navLinks = [
  { href: "/#quota", label: "Doomscroll Quota" },
  { href: "/#gym", label: "Attention Gym" },
  { href: "/#economy", label: "Focus Economy" },
  { href: "/#rank", label: "Leaderboard" },
  { href: "/#faq", label: "FAQ" },
] as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a /public asset URL with the deployment basePath. */
export function assetPath(pathname: string): string {
  return `${basePath}${pathname}`;
}
