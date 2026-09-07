"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

const sectionIds = navLinks
  .map((link) => link.href.split("#")[1])
  .filter((id): id is string => Boolean(id));

// Roughly the sticky header's height, so a section becomes current just as its
// top slides underneath it. Kept in step with `section[id]`'s scroll-margin-top.
const HEADER_OFFSET = 88;

/**
 * Tracks the section the reader is currently in: the last one whose top has
 * scrolled past the header.
 *
 * Deliberately *not* an IntersectionObserver "is it visible" test. The page has
 * stretches that belong to no nav item — the hero, the CTA banner between
 * Leaderboard and FAQ — and a visibility test blanks the whole nav out there.
 * "Last one passed" has no such gaps, and handles the end of the page for free.
 *
 * Reading five bounding rects inside a rAF-throttled scroll handler is cheap;
 * the loop only runs once per painted frame.
 */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // The Markdown pages share this header but have none of these sections.
    if (sections.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      let current: string | null = null;
      // sections are in document order, so the last match wins
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = section.id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}

export function NavLinks({ className }: { className?: string }) {
  const active = useActiveSection();

  return (
    <div className={className}>
      {navLinks.map((link) => {
        const id = link.href.split("#")[1];
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={id && id === active ? "true" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
