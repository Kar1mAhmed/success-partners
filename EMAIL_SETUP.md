# Email Form Setup Instructions

## Overview
The contact form is configured to use **Web3Forms** - a free, reliable email service that doesn't require a backend server.

## Setup Steps

### 1. Get Your Free Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started Free"
3. Enter your email address (info@successpartners-iq.com)
4. Verify your email
5. Copy your **Access Key**

### 2. Add Access Key to the Project

Open `app/contact/ContactPageClient.tsx` and replace this line:

```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Replace with your actual key
```

With your actual access key:

```typescript
access_key: 'YOUR_ACTUAL_KEY_FROM_WEB3FORMS',
```

### 3. Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox (info@successpartners-iq.com)

## Features Included

✅ **Form Validation** - All required fields validated
✅ **Loading States** - Shows spinner while submitting
✅ **Success/Error Toasts** - Beautiful popup notifications
✅ **Copy to Clipboard** - Click phone/email to copy
✅ **Smooth Animations** - Scroll animations on all sections
✅ **Mobile Responsive** - Works perfectly on all devices

## Alternative Email Solutions

If you prefer a different solution, here are alternatives:

### Option 1: EmailJS (Free)
- Visit [emailjs.com](https://www.emailjs.com)
- Similar to Web3Forms
- Requires account setup

### Option 2: Custom Backend API
- Create your own API endpoint
- Use Nodemailer or SendGrid
- More control but requires backend

### Option 3: Cloudflare Email Workers
- Since you're deploying to Cloudflare
- Use Cloudflare Email Routing
- Free with Cloudflare Pages

## Current Configuration

- **Service**: Web3Forms
- **Recipient**: info@successpartners-iq.com
- **From Name**: موقع شركاء النجاح
- **Reply-To**: User's email from form

## Troubleshooting

**Form not sending?**
- Check that you've added your access key
- Verify your email is verified on Web3Forms
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify email address on Web3Forms dashboard
- Test with a different email address

**Toast not showing?**
- Check browser console for errors
- Ensure Toast component is imported correctly

## Need Help?

Contact Web3Forms support or check their documentation at [https://docs.web3forms.com](https://docs.web3forms.com)
