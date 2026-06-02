// Converts the source photos under ../proyectos into optimized webp assets
// for the website. Idempotent: rebuilds public/projects/<slug>.webp (cover)
// and public/projects/<slug>/NN.webp (gallery) for each mapped project.
//
// Run with: node scripts/process-projects.mjs
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.resolve(ROOT, '..', 'proyectos');
const OUT = path.join(ROOT, 'public', 'projects');

const IMG_RE = /\.(jpe?g|png|webp|heic)$/i;
const MAX_W = 1600;
const QUALITY = 80;

// Explicit manifest: which source files belong to which project slug.
// `dir` is relative to ../proyectos. `only`/`exclude` filter files by name.
// `cover` forces a specific file as the card cover (else first sorted).
const MANIFEST = [
  { slug: 'parque-industrial-chihuahua', dir: 'INDUSTRIAL/CEDI CHIHUAHUA' },
  { slug: 'centro-logistico-slp',        dir: 'INDUSTRIAL/CEDIS SLP' },
  { slug: 'centro-logistico-oaxaca',     dir: 'INDUSTRIAL/CEDIS OAX' },
  { slug: 'v5-elite',  dir: 'INDUSTRIAL/ELITE 8 DE JULIO', only: ['V5.png'] },
  { slug: 'v6-v7-elite', dir: 'INDUSTRIAL/ELITE 8 DE JULIO',
    exclude: ['V5.png'], cover: 'V7.png' },
  { slug: 'strike-22',       dir: 'COMERCIAL/STRIKE 22', cover: '01.png' },
  { slug: 'ilusion-bowl',    dir: 'COMERCIAL/GRUPO ILUSION BOWL', cover: 'DSC_4714.JPG' },
  { slug: 'uncommon-society', dir: 'COMERCIAL/UNCOMMON SOCIETY' },
  { slug: 'vino-sin-prisa',  dir: 'COMERCIAL/VINO SIN PRISA' },
  { slug: 'casa-mt',         dir: 'RESIDENCIAL/CASA MT', cover: 'FACHADA 02.jpg' },
];

const naturalSort = (a, b) => a.localeCompare(b, 'es', { numeric: true, sensitivity: 'base' });

async function listImages(dir, { only, exclude } = {}) {
  const all = (await fs.readdir(dir)).filter(f => IMG_RE.test(f));
  let files = all;
  if (only) files = only.filter(f => all.includes(f));
  if (exclude) files = files.filter(f => !exclude.includes(f));
  return files.sort(naturalSort);
}

async function toWebp(srcFile, destFile) {
  await sharp(srcFile)
    .rotate() // honor EXIF orientation
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(destFile);
}

async function run() {
  const summary = [];
  for (const entry of MANIFEST) {
    const srcDir = path.join(SRC, entry.dir);
    let files;
    try {
      files = await listImages(srcDir, entry);
    } catch (e) {
      console.error(`! Missing source dir: ${entry.dir}`);
      continue;
    }
    if (files.length === 0) {
      console.error(`! No images for ${entry.slug} in ${entry.dir}`);
      continue;
    }

    // Order: cover first, then the rest in natural order.
    const coverName = entry.cover && files.includes(entry.cover) ? entry.cover : files[0];
    const ordered = [coverName, ...files.filter(f => f !== coverName)];

    // Fresh gallery dir
    const galleryDir = path.join(OUT, entry.slug);
    await fs.rm(galleryDir, { recursive: true, force: true });
    await fs.mkdir(galleryDir, { recursive: true });

    const galleryPaths = [];
    for (let i = 0; i < ordered.length; i++) {
      const n = String(i + 1).padStart(2, '0');
      const dest = path.join(galleryDir, `${n}.webp`);
      await toWebp(path.join(srcDir, ordered[i]), dest);
      galleryPaths.push(`/projects/${entry.slug}/${n}.webp`);
    }
    // Cover = first gallery image, also written to /projects/<slug>.webp
    await toWebp(path.join(srcDir, coverName), path.join(OUT, `${entry.slug}.webp`));

    summary.push({ slug: entry.slug, count: ordered.length, cover: coverName });
    console.log(`✓ ${entry.slug.padEnd(28)} ${ordered.length} img  (cover: ${coverName})`);
  }
  console.log('\nDone. Projects processed:', summary.length);
}

run().catch(e => { console.error(e); process.exit(1); });
