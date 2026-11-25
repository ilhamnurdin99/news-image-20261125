const fs = require('node:fs');
const path = require('node:path');

// Entry for make.fun news-image-20261125: the front page image for
// Wednesday, 25 November 2026 lives in this repo as entry.png; the program
// copies it to the grader's output dir as entry.png.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const src = path.join(__dirname, 'entry.png');
const size = fs.statSync(src).size;
if (size > 1024 * 1024) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, path.join(outDir, 'entry.png'));
