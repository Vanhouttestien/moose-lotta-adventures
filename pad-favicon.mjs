import { PNG } from "pngjs";
import fs from "fs";

const src = "./public/moose-lotta-pointer.png";
const data = fs.readFileSync(src);
const png = PNG.sync.read(data);
const w = png.width,
  h = png.height;
const size = Math.max(w, h);

const squared = new PNG({ width: size, height: size, fill: true });
for (let i = 0; i < squared.data.length; i++) squared.data[i] = 0;

const ox = (size - w) >> 1;
const oy = (size - h) >> 1;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const si = (y * w + x) * 4;
    const di = ((oy + y) * size + (ox + x)) * 4;
    squared.data[di] = png.data[si];
    squared.data[di + 1] = png.data[si + 1];
    squared.data[di + 2] = png.data[si + 2];
    squared.data[di + 3] = png.data[si + 3];
  }
}

const buf = PNG.sync.write(squared);
fs.writeFileSync(src, buf);
console.log(`Padded ${w}x${h} -> ${size}x${size}`);
