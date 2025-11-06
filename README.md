# شركاء النجاح | Success Partners

A modern, clean website for Success Partners - an Iraqi company specializing in engineering services, real estate development, commercial agencies, and general trading.

## 🎨 Brand Identity

- **Primary Color (Trusty Blue):** `#154762`
- **Secondary Color (Growth Green):** `#39BA9F`
- **Font:** Inter (placeholder for Loew Next Arabic)
- **Design:** Modern, clean with generous white space

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Build for production
npm run build
```

### Deploy to Cloudflare

```bash
# Deploy to Cloudflare Workers
npm run deploy

# Preview deployment
npm run preview
```

## 📁 Project Structure

```
├── app/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer with links
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services section
│   │   └── Contact.tsx      # Contact form
│   ├── privacy/             # Privacy policy page
│   ├── imprint/             # Imprint/legal page
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── public/                  # Static assets
│   └── logo.svg            # Company logo
└── next.config.ts          # Next.js configuration
```

## 🌟 Features

- **Modern Design:** Clean, minimal design with smooth animations
- **RTL Support:** Full Arabic language support with right-to-left layout
- **Responsive:** Mobile-first design that works on all devices
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Fast Performance:** Built with Next.js 15 and optimized for speed
- **Cloudflare Ready:** Configured for Cloudflare Workers deployment

## 📄 Pages

- **Home:** Landing page with hero, about, services, and contact sections
- **Privacy Policy:** Comprehensive privacy policy in Arabic
- **Imprint:** Legal information and company details

## 🔧 Tech Stack

- **Framework:** Next.js 15.4.6
- **React:** 19.1.0
- **Styling:** TailwindCSS 4
- **Icons:** Lucide React
- **Deployment:** Cloudflare Workers via @opennextjs/cloudflare
- **Language:** TypeScript

## 📞 Contact Information

- **Phone:** +964 775 555 4017 / +964 785 555 4017
- **Email:** info@successpartners-iq.com
- **Instagram:** @successpartnersiq
- **LinkedIn:** @successpartnersiq

## 📝 Next Steps

1. **Add Company Logo:** Replace `/public/logo.svg` with the actual company logo
2. **Add Real Images:** Replace placeholder images with high-quality company photos
3. **Font Update:** Install and configure Loew Next Arabic font
4. **Content Review:** Review and update all Arabic content
5. **Form Backend:** Implement contact form submission backend
6. **Analytics:** Add Google Analytics or similar tracking
7. **Domain Setup:** Configure custom domain for Cloudflare deployment

## 🎯 Development Notes

- The website uses Inter font as a placeholder. Update to Loew Next Arabic when available.
- All text is in Arabic with RTL support enabled.
- Images are currently using placeholders - update with actual company photos.
- Contact form currently logs to console - implement backend integration.
- Color scheme follows brand guidelines: #154762 (Blue) and #39BA9F (Green).

---

Built with ❤️ for Success Partners
