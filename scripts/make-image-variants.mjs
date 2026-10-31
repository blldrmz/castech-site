// Generates smaller copies of large catalogue photos (name.w480.webp, name.w960.webp)
// and writes src/content/imageVariants.json, which the <img srcSet> helper reads.
// Run after adding or replacing photos:  node scripts/make-image-variants.mjs
import sharp from "sharp";
import { readdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = "public";
const WIDTHS = [480, 960];
const manifest = {};

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (/\.webp$/i.test(entry.name) && !/\.w\d+\.webp$/i.test(entry.name)) await handle(full);
  }
}

async function handle(file) {
  const { width } = await sharp(file).metadata();
  const made = [];
  for (const w of WIDTHS) {
    if (width <= w * 1.25) continue;
    const out = file.replace(/\.webp$/i, `.w${w}.webp`);
    const exists = await stat(out).then(() => true, () => false);
    if (!exists) await sharp(file).resize({ width: w }).webp({ quality: 78 }).toFile(out);
    made.push(w);
  }
  if (made.length) manifest["/" + path.relative(ROOT, file).split(path.sep).join("/")] = [...made, width];
}

await walk(ROOT);
await writeFile("src/content/imageVariants.json", JSON.stringify(manifest, null, 0) + "\n");
console.log(`${Object.keys(manifest).length} images have smaller variants`);
