# CA Anshul Gupta & Associates — Website

A modern, premium, fully-responsive Chartered Accountant website built with **plain HTML, CSS, and JavaScript**. No build step, no frameworks — just open and deploy.

## 📂 Structure

```
ca-site/
├── index.html      # Home
├── about.html      # About / Profile / Gallery
├── services.html   # 8 services with hover animations
├── contact.html    # Contact info, form, embedded Google Map
├── css/
│   └── styles.css  # Full design system
├── js/
│   └── main.js     # Navbar, mobile menu, AOS, counters, form
└── README.md
```

## 🎨 Design

- **Theme:** Dark blue + White + Gold accents
- **Fonts:** Poppins (body) + Playfair Display (brand mark) — loaded from Google Fonts
- **Icons:** Font Awesome 6 (CDN)
- **Animations:** AOS (Animate On Scroll) + custom CSS keyframes

## ✨ Features

- ✅ Responsive (mobile + tablet + desktop)
- ✅ Sticky navbar with scroll effect
- ✅ Mobile hamburger menu
- ✅ Hero with floating animated cards
- ✅ Animated number counters in stats
- ✅ Service cards with hover lift + gold accent
- ✅ Image gallery with hover zoom
- ✅ Working **Call** (`tel:`) buttons
- ✅ Working **WhatsApp** (`wa.me`) buttons
- ✅ Floating Call + WhatsApp buttons (always visible)
- ✅ Embedded Google Map iframe
- ✅ Contact form with success state
- ✅ Smooth scrolling
- ✅ Fade-in scroll animations (AOS)

## ⚙️ Customization

Search and replace these placeholders across all files:

| Placeholder            | Replace with                                   |
| ---------------------- | ---------------------------------------------- |
| `Anshul Gupta`          | The CA's name (e.g. `Rajesh Sharma`)           |
| `[City]`               | Your city (e.g. `Mumbai`)                      |
| `[Your Office Address]`| Full street address                            |
| `+91XXXXXXXXXX`        | Phone number for `tel:` and `wa.me` (no spaces, with country code, no `+` for `wa.me`) |
| `+91 XXXXX XXXXX`      | Display version of the phone number            |
| `hello@yourca.com`     | Your email address                             |

### Update the Google Map

Open `contact.html`, find the `<iframe>` in `.map-wrap`, and replace its `src` with your office's embed URL from Google Maps → Share → Embed a map.

### Add real images

Replace the `.img-placeholder` divs (in `about.html` gallery and profile) with `<img>` tags pointing to files in `images/`.

## 🚀 Deploy

Upload the entire folder to any static host:
- **Netlify**: drag & drop the folder onto netlify.app/drop
- **Vercel**: `vercel deploy`
- **GitHub Pages**: push to a repo, enable Pages
- **Any web host**: upload via FTP

No build, no Node, no install. Just static files.
