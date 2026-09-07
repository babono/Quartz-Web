// Generates web-ready image variants from the full-resolution originals in
// assets-src/ into public/assets/. `output: "export"` has no image
// optimization server, so this runs once at build time instead.
//
// Widths are 2x the largest CSS size each image is ever displayed at.

import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets-src";
const OUT = "public/assets";

/** @type {{ file: string, width: number }[]} */
const images = [
  // Hero crystal: rendered at md:w-96 (384px). Sourced from the app's
  // logo-quartz-icon so the site and the App Store listing show the same art.
  { file: "app/logo-crystal.png", width: 768 },


  // Mini-game artwork, straight from the app's Attention Gym.
  { file: "app/game-memory.png", width: 560 },
  { file: "app/game-words.png", width: 560 },
  { file: "app/game-dots.png", width: 560 },

  // The doomscroll quota ring from the app's home screen.
  { file: "app/quota-ring.png", width: 560 },

  // Leaderboard podium.
  { file: "app/leaderboard.png", width: 840 },

  // Small UI icons — shipped at 3x their display size.
  { file: "app/ic-streak.png", width: 96 },
  { file: "app/ic-quartz.png", width: 96 },
];

async function fileSize(file) {
  return (await stat(file)).size;
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

await mkdir(OUT, { recursive: true });

for (const { file, width } of images) {
  const input = path.join(SRC, file);
  const name = path.parse(file).name;
  const output = path.join(OUT, `${name}.webp`);

  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  console.log(
    `  ${file}  ${kb(await fileSize(input))} -> ${name}.webp  ${kb(
      await fileSize(output),
    )}`,
  );
}

console.log(`Optimized ${images.length} images into ${OUT}/`);
