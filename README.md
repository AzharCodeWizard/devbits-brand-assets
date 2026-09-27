# DevBits — Brand Assets & Developer Page Media

Official brand identity assets, Google Play Console developer page banners, and logo icons for **DevBits** (`devbits`).

---

## 🎨 Brand Identity

### Primary Themes & Color Palettes

#### 1. Electric Mint & Charcoal (Primary Tech Brand)
- **Primary Mint Green**: `#3DDC97`
- **Deep Charcoal Navy**: `#0F172A`
- **Slate Text / Grid**: `#1E293B`, `#334155`
- **Pure White**: `#FFFFFF`

#### 2. Warm Creative & Isometric (Warm Editorial Brand)
- **Background Cream**: `#FAF8F5`
- **Dark Navy**: `#0F172A`
- **Warm Coral Tagline**: `#F43F5E`
- **Amber & Teal Accents**: `#F59E0B`, `#14B8A6`

---

## 📐 Assets Directory

### Icons (`/icons`)
All icons are strictly formatted to Google Play Developer requirements (**512 x 512 px, 24-bit RGB JPEG, no transparency, < 1 MB**):

- **[`db_icon_mint_512.jpg`](icons/db_icon_mint_512.jpg)**: Geometric "DB" monogram formed from small square pixel bits in electric mint green (`#3DDC97`) on deep charcoal navy (`#0F172A`) with subtle soft glow and rounded-square container.
- **[`devbits_3d_bracket_512.jpg`](icons/devbits_3d_bracket_512.jpg)**: 3D stylized 'd' bracket emblem infused with quotation marks in midnight violet and cyan.

### Banners (`/banners`)
All developer page header banners conform to Google Play Console exact specifications (**4096 x 2304 px, 16:9 aspect ratio, 24-bit RGB JPEG, < 1 MB**):

- **[`devbits_isometric_warm_banner_4096x2304.jpg`](banners/devbits_isometric_warm_banner_4096x2304.jpg)**:
  - **Slogan**: *"DevBits — Small bits. Big impact."*
  - **Design**: Warm cream background with tiny builder figures assembling pixel cubes, puzzle pieces, and phone screens on edges.
- **[`devbits_tech_mint_clean_banner_4096x2304.jpg`](banners/devbits_tech_mint_clean_banner_4096x2304.jpg)**:
  - **Design**: Deep charcoal navy background (`#0F172A`) with flowing scattered mint green pixel bits (`#3DDC97`) assembling into abstract phone screens and smartphone outlines. Clean empty center, no text.
- **[`devbits_tech_mint_slogan_banner_4096x2304.jpg`](banners/devbits_tech_mint_slogan_banner_4096x2304.jpg)**:
  - **Slogan**: *"Words That Inspire. Design That Connects."*
  - **Design**: Tech mint particle flow with centered typographic badge and tagline.
- **[`devbits_architectural_banner_4096x2304.jpg`](banners/devbits_architectural_banner_4096x2304.jpg)**:
  - **Slogan**: *"Words That Inspire. Design That Moves."*
  - **Design**: Architectural arches with soft neon gradients and right-aligned typography.
- **[`devbits_zen_quote_banner_4096x2304.jpg`](banners/devbits_zen_quote_banner_4096x2304.jpg)**:
  - **Slogan**: *"Inspire Your Mind. Elevate Your Day."*
  - **Design**: Obsidian slate texture with glowing ribbon curve and frosted glass quote marks.
- **[`devbits_apps_isometric_banner_4096x2304.jpg`](banners/devbits_apps_isometric_banner_4096x2304.jpg)**:
  - **Design**: Isometric floating app screens with gradient quotation bubbles.

### Generators (`/generators`)
Standalone scripts and HTML5 Canvas tools used to render 4096 x 2304 resolution banners with vector typography:
- `render_isometric_banner.html`
- `render_mint_banner.html`
- `render_banner.html`
- `prepare_isometric_banner.js`
- `prepare_mint_banner.js`
- `prepare_banners.js`
- `save_server.js`

---

## 📱 Google Play Console Requirements Summary
| Field | Dimensions | Format | Max File Size |
|---|---|---|---|
| **Developer Icon** | 512 x 512 px | JPEG or 24-bit PNG (no transparency) | 1 MB |
| **Header Image** | 4096 x 2304 px (16:9) | JPEG or 24-bit PNG (no transparency) | 1 MB |
| **Promotional Text** | Max 140 chars | Text | N/A |

---

*Maintained by DevBits Studio.*
