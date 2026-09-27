const fs = require('fs');

const bgPath = '/Users/azhar/.gemini/antigravity-ide/brain/19d6b729-d1b7-4129-979c-4d40f233050b/isometric_devbits_bg_1790494856023.jpg';
const b64 = 'data:image/jpeg;base64,' + fs.readFileSync(bgPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@600;700;800;900&family=Fredoka:wght@600;700&display=swap" rel="stylesheet">
<style>
  body { margin: 0; background: #FAF8F5; }
  canvas { width: 1024px; height: 576px; }
</style>
</head>
<body>
<canvas id="c" width="4096" height="2304"></canvas>
<script>
window.imgData = "${b64}";
window.renderBanner = async function() {
  await document.fonts.ready;
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  
  const img = new Image();
  img.src = window.imgData;
  await new Promise(r => img.onload = r);
  
  ctx.drawImage(img, 0, 0, 4096, 2304);

  // Exact center typography
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const centerX = 2048;
  const centerY = 1100;

  // "DevBits" in dark navy with rounded sans-serif
  ctx.font = '800 240px "Outfit", "Fredoka", sans-serif';
  ctx.fillStyle = '#0F172A';
  ctx.letterSpacing = '-2px';
  ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 12;
  ctx.fillText('DevBits', centerX, centerY - 60);

  // Tagline: "Small bits. Big impact." in warm coral
  ctx.shadowColor = 'transparent';
  ctx.font = '700 76px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillStyle = '#F43F5E'; // warm vibrant coral
  ctx.fillText('Small bits. Big impact.', centerX, centerY + 120);

  ctx.restore();

  // Export as high quality JPEG under 1MB
  return canvas.toDataURL('image/jpeg', 0.85);
};
</script>
</body>
</html>`;

fs.writeFileSync('/Users/azhar/Documents/Projects/ComposeQuotes/store/render_isometric_banner.html', html);
console.log('Isometric banner renderer HTML created');
