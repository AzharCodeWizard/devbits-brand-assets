const fs = require('fs');

const bgPath = '/Users/azhar/.gemini/antigravity-ide/brain/19d6b729-d1b7-4129-979c-4d40f233050b/db_tech_banner_bg_1790494618956.jpg';
const b64 = 'data:image/jpeg;base64,' + fs.readFileSync(bgPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
</head>
<body style="background:#0F172A; margin:0;">
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

  // Position text in the open center/right space between the particles: x: 2350, y: 920
  ctx.save();
  ctx.translate(2350, 920);

  // Pill badge: DEVBITS
  ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
  ctx.strokeStyle = 'rgba(61, 220, 151, 0.4)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(0, 0, 420, 84, 42);
  ctx.fill();
  ctx.stroke();

  // Mint green dot in pill with subtle glow
  ctx.shadowColor = '#3DDC97';
  ctx.shadowBlur = 15;
  ctx.fillStyle = '#3DDC97';
  ctx.beginPath();
  ctx.arc(46, 42, 10, 0, Math.PI * 2);
  ctx.fill();

  // Text in pill
  ctx.shadowColor = 'transparent';
  ctx.font = '600 32px "Plus Jakarta Sans"';
  ctx.fillStyle = '#E2E8F0';
  ctx.letterSpacing = '4px';
  ctx.fillText('DEVBITS APPS', 78, 52);

  // Headline line 1: Words That Inspire.
  ctx.font = '800 128px "Outfit"';
  ctx.letterSpacing = '-1px';
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 8;
  ctx.fillText('Words That Inspire.', 0, 260);

  // Headline line 2: Design That Connects. (electric mint gradient)
  const grad = ctx.createLinearGradient(0, 280, 1100, 410);
  grad.addColorStop(0, '#3DDC97'); // electric mint green
  grad.addColorStop(1, '#6EE7B7'); // light emerald
  ctx.fillStyle = grad;
  ctx.fillText('Design That Connects.', 0, 410);

  // Subtitle
  ctx.shadowColor = 'transparent';
  ctx.font = '400 48px "Plus Jakarta Sans"';
  ctx.fillStyle = 'rgba(226, 232, 240, 0.85)';
  ctx.letterSpacing = '0.5px';
  ctx.fillText('Minimalist Android experiences crafted for daily inspiration.', 0, 525);

  ctx.restore();

  return canvas.toDataURL('image/jpeg', 0.82);
};
</script>
</body>
</html>`;

fs.writeFileSync('/Users/azhar/Documents/Projects/ComposeQuotes/store/render_mint_banner.html', html);
console.log('Mint banner HTML generated');
