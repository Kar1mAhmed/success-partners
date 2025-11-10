# Metadata & SEO Setup Guide

## ✅ What's Already Configured

### 1. **Open Graph (OG) Tags** - For Social Media Sharing
- **OG Image**: `/og.png` (1200x630px recommended)
- **Title**: شركاء النجاح | حلول متكاملة في العراق
- **Description**: Full company description
- **Type**: Website
- **Locale**: ar_IQ (Arabic - Iraq)

When someone shares your website on Facebook, LinkedIn, or WhatsApp, they'll see:
- Your logo/brand image
- Company name and description
- Professional preview card

### 2. **Twitter Cards** - For Twitter/X Sharing
- **Card Type**: Large image summary
- **Image**: Same as OG image
- Optimized for Twitter sharing

### 3. **SEO Keywords**
Comprehensive Arabic and English keywords including:
- شركاء النجاح
- Success Partners Iraq
- شركات هندسية في العراق
- تطوير عقاري بغداد
- And 12+ more relevant keywords

### 4. **Robots & Search Engines**
- ✅ Indexing enabled
- ✅ Following links enabled
- ✅ robots.txt created
- ✅ Sitemap reference added

### 5. **Mobile App Metadata**
- ✅ PWA manifest.json
- ✅ Theme color (#154762)
- ✅ Apple mobile web app support
- ✅ RTL direction support

### 6. **Favicon & Icons**
- ✅ SVG logo as favicon
- ✅ Manifest for app icons

## 📋 Your OG Image (`/og.png`)

Place your OG image in the `public` folder with these specs:

**Recommended Dimensions:**
- Width: 1200px
- Height: 630px
- Format: PNG or JPG
- Max size: 8MB (but keep under 1MB for faster loading)

**What to Include:**
- Company logo
- Company name in Arabic: شركاء النجاح
- Tagline or key services
- Brand colors (#154762, #39BA9F)
- Clean, professional design

**Tools to Create OG Images:**
- Canva (free templates)
- Figma
- Adobe Photoshop
- Online OG image generators

## 🔍 Testing Your Metadata

### Facebook/Meta Debugger
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter: https://successpartners-iq.com
3. Click "Scrape Again" to refresh cache
4. Check preview

### Twitter Card Validator
1. Visit: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Check preview

### LinkedIn Post Inspector
1. Visit: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. Check preview

### Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter your URL
3. Check structured data

## 📊 Analytics Setup (Recommended)

### Google Analytics
Add to `app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Google Search Console
1. Visit: https://search.google.com/search-console
2. Add property: successpartners-iq.com
3. Verify ownership
4. Submit sitemap

## 🗺️ Sitemap (Next Step)

Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://successpartners-iq.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://successpartners-iq.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://successpartners-iq.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://successpartners-iq.com/imprint',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
```

## 🎯 Current Metadata Summary

| Feature | Status | Location |
|---------|--------|----------|
| Page Title | ✅ | app/layout.tsx |
| Description | ✅ | app/layout.tsx |
| Keywords | ✅ | app/layout.tsx |
| OG Tags | ✅ | app/layout.tsx |
| Twitter Cards | ✅ | app/layout.tsx |
| Favicon | ✅ | app/layout.tsx |
| Manifest | ✅ | app/manifest.json |
| Robots.txt | ✅ | public/robots.txt |
| OG Image | ⏳ | Add to public/og.png |
| Sitemap | ⏳ | Create app/sitemap.ts |
| Analytics | ⏳ | Optional |

## 📱 Contact Information in Metadata

Already included:
- 📧 Email: info@successpartners-iq.com
- 📞 Phone: +964 775 555 4017, +964 785 555 4017
- 📍 Location: العراق (Iraq)
- 📱 Instagram: @successpartnersiq
- 💼 LinkedIn: company/successpartnersiq

## 🚀 Next Steps

1. ✅ Add your `og.png` image to `/public` folder
2. ⏳ Create sitemap.ts (optional but recommended)
3. ⏳ Set up Google Analytics (optional)
4. ⏳ Submit to Google Search Console
5. ⏳ Test social media sharing on all platforms

Your website is now fully optimized for SEO and social media sharing! 🎉
