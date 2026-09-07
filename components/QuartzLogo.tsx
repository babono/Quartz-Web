/**
 * The Quartz mark: a faceted crystal. Traced from the brand sheet in
 * assets-src/, so the proportions and corner radii match the app icon.
 *
 * Inline SVG rather than an image file — it is tiny, stays crisp at any size,
 * and inherits the surrounding text color via `currentColor`.
 */
export function QuartzLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 364 562"
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      role="img"
      aria-label="Quartz"
    >
      <path
        d="M169.8 14.3Q179 0 187.8 14.5L355.2 291.5Q364 306 354 319.8L188.5 548.2Q178.5 562 169.5 547.6L9 291.4Q0 277 9.2 262.7Z
           M182.9 64.9Q184 54 189.6 63.5L324.4 290.5Q330 300 319.5 303.1L164.5 348.9Q154 352 155.1 341.1Z
           M68.6 329.8Q64 322 71.7 326.7L136.3 366.3Q144 371 145.1 379.9L155.9 471.1Q157 480 152.4 472.2Z"
      />
    </svg>
  );
}
