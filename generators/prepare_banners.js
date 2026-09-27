const fs = require('fs');
const path = require('path');

const img1Path = '/Users/azhar/.gemini/antigravity-ide/brain/19d6b729-d1b7-4129-979c-4d40f233050b/minimal_art_illustration_1790494219663.jpg';
const img2Path = '/Users/azhar/.gemini/antigravity-ide/brain/19d6b729-d1b7-4129-979c-4d40f233050b/minimal_aesthetic_bg_1790494202604.jpg';

const b64_1 = 'data:image/jpeg;base64,' + fs.readFileSync(img1Path).toString('base64');
const b64_2 = 'data:image/jpeg;base64,' + fs.readFileSync(img2Path).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Banner Generator</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  body {
    margin: 0;
    padding: 20px;
    background: #0f1117;
    color: #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  canvas {
    width: 1024px;
    height: 576px;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    display: block;
    margin-bottom: 20px;
  }
</style>
</head>
<body>
<h1>Developer Banner Renderer (4096 x 2304)</h1>
<canvas id="c" width="4096" height="2304"></canvas>

<script>
window.imgData1 = "${b64_1}";
window.imgData2 = "${b64_2}";

window.renderVariant = async function(variantNum) {
  await document.fonts.ready;
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  
  const bgUrl = variantNum === 1 ? window.imgData1 : window.imgData2;
  const img = new Image();
  img.src = bgUrl;
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
  });

  ctx.clearRect(0, 0, 4096, 2304);
  ctx.drawImage(img, 0, 0, 4096, 2304);

  if (variantNum === 1) {
    // Architectural Art variant:
    // Illustration is on the left/center arches. Right side is vast open space (x: 2300 to 3900)
    
    // Subtle radial ambient glow behind text to ensure crisp legibility
    const glow = ctx.createRadialGradient(3100, 1152, 100, 3100, 1152, 900);
    glow.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
    glow.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(2000, 400, 2000, 1500);

    ctx.save();
    ctx.translate(2350, 930);

    // Pill badge: DEVBITS STUDIO
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(0, 0, 480, 84, 42);
    ctx.fill();
    ctx.stroke();

    // Dot in pill
    ctx.fillStyle = '#38bdf8'; // bright cyan
    ctx.beginPath();
    ctx.arc(46, 42, 10, 0, Math.PI * 2);
    ctx.fill();

    // Text in pill
    ctx.font = '600 32px "Plus Jakarta Sans"';
    ctx.fillStyle = '#e2e8f0';
    ctx.letterSpacing = '4px';
    ctx.fillText('DEVBITS STUDIO', 78, 52);

    // Main Slogan (Headline)
    ctx.font = '800 130px "Outfit"';
    ctx.letterSpacing = '-1px';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 10;
    ctx.fillText('Words That Inspire.', 0, 260);

    // Second line of headline with warm gradient
    const textGrad = ctx.createLinearGradient(0, 280, 1200, 410);
    textGrad.addColorStop(0, '#f43f5e'); // rose
    textGrad.addColorStop(0.5, '#fb923c'); // warm coral
    textGrad.addColorStop(1, '#a855f7'); // soft violet
    ctx.fillStyle = textGrad;
    ctx.fillText('Design That Moves.', 0, 410);

    // Subtitle / Slogan description
    ctx.shadowColor = 'transparent';
    ctx.font = '400 48px "Plus Jakarta Sans"';
    ctx.fillStyle = 'rgba(226, 232, 240, 0.8)';
    ctx.letterSpacing = '0.5px';
    ctx.fillText('Crafting minimalist, uplifting apps designed for daily mindfulness.', 0, 525);

    ctx.restore();

  } else if (variantNum === 2) {
    // Zen Minimalist Quote Curve variant:
    // Place elegant slogan on the left side (x: 400), balanced with the glowing quote on the right
    ctx.save();
    ctx.translate(450, 950);

    // Pill badge: DEVBITS
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(0, 0, 360, 84, 42);
    ctx.fill();
    ctx.stroke();

    // Dot in pill
    ctx.fillStyle = '#a855f7'; // purple
    ctx.beginPath();
    ctx.arc(46, 42, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '600 32px "Plus Jakarta Sans"';
    ctx.fillStyle = '#e2e8f0';
    ctx.letterSpacing = '4px';
    ctx.fillText('DEVBITS', 78, 52);

    // Headline
    ctx.font = '800 136px "Outfit"';
    ctx.letterSpacing = '-1px';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 35;
    ctx.shadowOffsetY = 10;
    ctx.fillText('Inspire Your Mind.', 0, 260);

    const grad = ctx.createLinearGradient(0, 280, 1100, 410);
    grad.addColorStop(0, '#c084fc');
    grad.addColorStop(1, '#67e8f9');
    ctx.fillStyle = grad;
    ctx.fillText('Elevate Your Day.', 0, 410);

    ctx.shadowColor = 'transparent';
    ctx.font = '400 48px "Plus Jakarta Sans"';
    ctx.fillStyle = 'rgba(203, 213, 225, 0.8)';
    ctx.letterSpacing = '0.5px';
    ctx.fillText('Minimalist Android experiences for reflection and focus.', 0, 525);

    ctx.restore();
  }

  // Export as high quality JPEG, adjust to keep under 1MB
  return canvas.toDataURL('image/jpeg', 0.82);
};
</script>
</body>
</html>`;

fs.writeFileSync('/Users/azhar/Documents/Projects/ComposeQuotes/store/render_banner.html', htmlContent);
console.log('render_banner.html generated successfully');
