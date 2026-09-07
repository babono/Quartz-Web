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
  // Hero crystal: rendered at md:w-96 (384px).
  { file: "crystal.png", width: 768 },
  // Phone screenshots: rendered inside max-w-xs (320px) cards.
  { file: "homefix.png", width: 640 },
  { file: "gamefix.png", width: 640 },
  { file: "rank-fix.png", width: 640 },
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
