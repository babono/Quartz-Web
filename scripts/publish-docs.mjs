// GitHub Pages for this repo is configured as "deploy from branch main, folder
// /docs" (build_type: legacy), so the exported site has to be committed into
// docs/. This copies out/ there and adds the .nojekyll marker that stops Jekyll
// from discarding Next.js's /_next/ directory.

import { cp, rm, writeFile } from "node:fs/promises";

const OUT = "out";
const DOCS = "docs";

await rm(DOCS, { recursive: true, force: true });
await cp(OUT, DOCS, { recursive: true });
await writeFile(`${DOCS}/.nojekyll`, "");

console.log(`Published ${OUT}/ -> ${DOCS}/ (with .nojekyll)`);
