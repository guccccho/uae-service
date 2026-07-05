import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const targets = [
  { slug: "shan-loong-logistics-energy", url: "https://w3.slc.com.tw/en/" },
  { slug: "okasan-livic-infrastructure", url: "https://www.okasanlivic.co.jp/" },
  { slug: "optiqb-ai-3d-display", url: "https://optiqb.com/" },
  { slug: "rembo-skincare", url: "https://rembo.jp/" },
];

const outDir = path.join(process.cwd(), "public", "media-previews");
const width = 1280;
const clipHeight = 520;

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });

for (const { slug, url } of targets) {
  console.log(`Capturing ${slug} …`);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(outDir, `${slug}.jpg`),
      type: "jpeg",
      quality: 82,
      clip: { x: 0, y: 0, width, height: clipHeight },
    });
    console.log(`  ✓ ${slug}.jpg`);
  } catch (err) {
    console.error(`  ✗ ${slug}:`, err.message);
  }
}

await browser.close();
console.log("Done.");
