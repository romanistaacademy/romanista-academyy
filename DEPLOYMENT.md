# 🚀 ROMANISTA Website - Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All TypeScript errors resolved
- [ ] No console warnings
- [ ] All components properly imported
- [ ] All external links verified
- [ ] Contact information updated
- [ ] Social media links tested

### ✅ Content Review
- [ ] Academy information accurate
- [ ] All Arabic text correct
- [ ] Prices updated
- [ ] Phone numbers correct
- [ ] Email address correct
- [ ] Location details accurate

### ✅ Functionality Testing
- [ ] Navigation works on all devices
- [ ] All buttons functional
- [ ] Forms submitting correctly
- [ ] Maps loading properly
- [ ] Videos/embedded content working
- [ ] Animations smooth on target devices

### ✅ Performance
- [ ] Bundle size acceptable
- [ ] Page loads quickly
- [ ] Images optimized
- [ ] No memory leaks
- [ ] Smooth animations

### ✅ Accessibility
- [ ] Color contrast adequate
- [ ] Text readable
- [ ] Links have proper labels
- [ ] Forms have labels
- [ ] Keyboard navigation works

### ✅ SEO
- [ ] Meta tags correct
- [ ] Title tag optimized
- [ ] Description accurate
- [ ] Heading structure proper
- [ ] Mobile-friendly

---

## 🏗️ Build Process

### 1. Local Build Test
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 2. Build Output
```
dist/index.html  (411.89 KB)
- Gzip: 119.99 KB
- Single file build
- All assets inlined
```

### 3. Verify Build
```bash
# Check dist folder exists
ls -la dist/

# Should contain:
# - index.html (single file)
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: 
- Automatic deployments
- CDN included
- Free SSL
- Environment variables
- Analytics built-in

**Steps**:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Alternative - Connect GitHub**:
1. Push code to GitHub
2. Go to vercel.com
3. Import project from GitHub
4. Configure settings
5. Deploy automatically

### Option 2: Netlify

**Pros**:
- Easy GitHub integration
- Continuous deployment
- Free SSL
- Form handling
- Analytics

**Steps**:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Alternative - Connect GitHub**:
1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: GitHub Pages

**Steps**:
1. Create repository on GitHub
2. Add to vite.config.ts:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ...
})
```
3. Create GitHub Actions workflow
4. Push to main branch
5. Enable GitHub Pages in settings

### Option 4: Traditional Hosting (cPanel, etc.)

**Steps**:
```bash
# Build locally
npm run build

# FTP/SFTP the dist folder to your server
# Point domain to the dist folder
# Or rename dist to public_html
```

**File Structure on Server**:
```
public_html/
├── index.html
├── assets/
│   ├── index-*.js
│   └── style-*.css
└── (all other assets)
```

---

## ⚙️ Environment Configuration

### For Vercel
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_APP_TITLE": "أكاديمية الرومانيستا"
  }
}
```

### For Netlify
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "npm run dev"
  port = 3000

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔐 SSL/HTTPS Setup

### Automatic (Vercel, Netlify)
- SSL certificates are automatic
- HTTPS enforced by default
- No additional setup needed

### Manual Setup
1. Obtain SSL certificate (Let's Encrypt recommended)
2. Install on server
3. Configure web server
4. Redirect HTTP to HTTPS

---

## 📧 Email Configuration

### For Contact Form

#### Option 1: EmailJS (Easiest)
```tsx
// Install
npm install @emailjs/browser

// Initialize in component
import emailjs from '@emailjs/browser';

emailjs.init("YOUR_PUBLIC_KEY");

// Send email
const sendEmail = (formData) => {
  emailjs.send("service_id", "template_id", formData)
    .then(() => console.log("Sent"))
    .catch((err) => console.error(err));
};
```

#### Option 2: Formspree
```tsx
// Update fetch URL in Feedback.tsx
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

#### Option 3: Backend API
```tsx
// Create backend endpoint
fetch('https://your-backend.com/api/email', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

---

## 🗺️ Google Maps Configuration

### Current Implementation
- Using embedded iframe
- Public location (no API key required)

### Upgrade to Interactive Map
```tsx
// Install
npm install @react-google-maps/api

// Configure in component
const { GoogleMap, MarkerF } = require('@react-google-maps/api');

// Add Google Maps API key to environment
VITE_GOOGLE_MAPS_KEY=your_api_key
```

---

## 📱 Mobile App Wrapper (Optional)

### Wrap as PWA
Add to `index.html`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#dc2626">
```

Create `public/manifest.json`:
```json
{
  "name": "أكاديمية الرومانيستا",
  "short_name": "الرومانيستا",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#dc2626"
}
```

---

## 🚀 Deployment Walkthrough

### Step 1: Final Testing
```bash
npm run build
npm run preview
# Test at http://localhost:4173
```

### Step 2: Prepare Repository
```bash
# Initialize git if not done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: ROMANISTA Academy Website"

# Create GitHub repository and push
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify
```bash
# Option A: Via CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod

# Option B: Via Web Interface
# 1. Go to netlify.com
# 2. Click "New site from Git"
# 3. Select GitHub repository
# 4. Build settings:
#    - Command: npm run build
#    - Directory: dist
# 5. Deploy
```

### Step 4: Configure Domain
```bash
# Netlify
# 1. Go to Site Settings
# 2. Add custom domain
# 3. Update DNS records
# 4. Wait for SSL certificate (automatic)
```

### Step 5: Verify Deployment
- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] Forms working
- [ ] Links functional
- [ ] Mobile responsive
- [ ] Performance acceptable

---

## 📊 Post-Deployment Tasks

### Analytics Setup

#### Google Analytics
```html
<!-- Add to index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Vercel Analytics (Built-in)
- Automatically included if using Vercel
- View in Vercel Dashboard

### SEO Verification
- [ ] Google Search Console setup
- [ ] Sitemap submission
- [ ] Robots.txt configured
- [ ] Meta tags verified
- [ ] Mobile-friendly test passed

### Performance Monitoring
- [ ] Lighthouse audit
- [ ] Page speed test
- [ ] Core Web Vitals check
- [ ] Error monitoring enabled

---

## 🔄 Updates & Maintenance

### Update Content
```bash
# Make changes locally
# Test with npm run dev
# Build with npm run build
# Push to GitHub (auto-deploys on Netlify)
git add .
git commit -m "Update content"
git push origin main
```

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest

# Test changes
npm run build
```

### Monitor Health
- Set up error tracking (Sentry, etc.)
- Monitor uptime
- Track analytics
- Review user feedback

---

## 🆘 Troubleshooting Deployment

### Build Fails
```bash
# Clear cache
rm -rf node_modules
npm install

# Rebuild
npm run build

# Check for errors in console
```

### Site Loads Incorrectly
- [ ] Check base path in vite.config.ts
- [ ] Verify routing in components
- [ ] Check for incorrect paths
- [ ] Clear browser cache (Ctrl+Shift+Delete)

### Form Not Working
- [ ] Verify email service configuration
- [ ] Check for CORS issues
- [ ] Test email service separately
- [ ] Review server logs

### Slow Performance
- [ ] Optimize images
- [ ] Enable gzip compression
- [ ] Check CDN configuration
- [ ] Reduce bundle size
- [ ] Enable caching headers

### Domain Issues
- [ ] Verify DNS records
- [ ] Check A record pointing to server
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Test with nslookup

---

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] No sensitive data in code
- [ ] Environment variables configured
- [ ] CORS properly configured
- [ ] Input validation on forms
- [ ] Rate limiting on backend
- [ ] No console errors
- [ ] Dependencies up to date

---

## 📈 Performance Optimization

### Before Deployment

```bash
# Audit with Lighthouse
npm install -g lighthouse
lighthouse https://your-site.com

# Check bundle size
npm run build
# Check dist/ folder size
```

### Optimization Tips
1. **Images**: Use next-gen formats (WebP)
2. **Code**: Remove unused dependencies
3. **Caching**: Enable browser caching
4. **CDN**: Use CDN for assets
5. **Compression**: Enable gzip/brotli
6. **Lazy Loading**: Implement for heavy components

---

## 📞 Support Resources

### Documentation
- Vite: https://vitejs.dev/guide/
- React: https://react.dev/
- Tailwind: https://tailwindcss.com/docs/

### Hosting
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/

### Tools
- Google PageSpeed: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] All links verified
- [ ] Contact information updated
- [ ] Email service configured
- [ ] Domain registered
- [ ] DNS configured
- [ ] SSL certificate installed
- [ ] Build tested locally
- [ ] Build passes on server
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms working
- [ ] Analytics configured
- [ ] Monitoring enabled
- [ ] Backups configured
- [ ] Team has access
- [ ] Documentation updated
- [ ] Go live!

---

## 🎉 Launch Success!

Your ROMANISTA Football Academy website is now live and ready to convert visitors into registered players!

**Congratulations! 🏆**

---

**Deployment Guide Version**: 1.0.0
**Last Updated**: 2024
**Status**: Ready to Deploy ✅
