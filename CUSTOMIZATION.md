# 🎨 ROMANISTA Website - Customization Guide

## 📝 How to Update Content

### 1. Academy Information

#### Update Academy Name/Logo
**File**: `src/components/Header.tsx` & `src/components/Footer.tsx`
```tsx
// Change in Header
<p className="text-sm font-bold text-white">ROMANISTA</p>
<p className="text-xs text-gray-400">الرومانيستا</p>

// Change in Footer
<p className="text-sm font-bold text-white">ROMANISTA</p>
```

#### Update Tagline
**File**: `src/components/Hero.tsx`
```tsx
// Current
<p className="text-lg md:text-xl text-gray-300 mb-8">نصنع نجوم المستقبل</p>

// Change to your tagline
<p className="text-lg md:text-xl text-gray-300 mb-8">Your New Tagline</p>
```

---

### 2. Hero Section

**File**: `src/components/Hero.tsx`

#### Update Hero Description
```tsx
<motion.p
  variants={itemVariants}
  className="text-sm md:text-base text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
>
  أكاديمية احترافية لتدريب كرة القدم تهدف إلى اكتشاف المواهب الشابة...
  {/* Update this text */}
</motion.p>
```

#### Update Statistics Cards
```tsx
const stats = [
  { value: '+100', label: 'لاعب' },
  { value: '+10', label: 'مدربين' },
  { value: '+50', label: 'بطولة' },
  { value: '+10', label: 'سنوات خبرة' },
];
```

---

### 3. About Section

**File**: `src/components/About.tsx`

#### Update Main Content
```tsx
<p className="text-gray-300 leading-relaxed text-lg">
  أكاديمية الرومانيستا هي أكاديمية احترافية لتدريب كرة القدم...
  {/* Update all paragraphs here */}
</p>
```

#### Update Achievement Cards
```tsx
const achievements = [
  {
    icon: Trophy,
    title: 'تأسيس الأكاديمية',
    description: 'تأسست عام 2016 بهدف اكتشاف المواهب الشابة',
  },
  // Update the rest
];
```

---

### 4. Age Groups Section

**File**: `src/components/AgeGroups.tsx`

#### Update Age Groups List
```tsx
const ageGroups = [
  '2010', '2011', '2012', '2013', '2014',
  '2015', '2016', '2017', '2018', '2019',
  '2020', '2021'
  // Add or remove years as needed
];
```

#### Update Info Banner
```tsx
<p className="text-gray-300">
  برامج تدريب متخصصة للاعبين من عمر 5 سنوات حتى 16 سنة
  {/* Update age range here */}
</p>
```

---

### 5. Pricing Section

**File**: `src/components/Pricing.tsx`

#### Update Pricing Packages
```tsx
const packages = [
  {
    name: 'تمرين واحد أسبوعياً',
    price: 7,  // Change price
    description: 'الاشتراك الأساسي',
    features: [
      'جلسة تدريب واحدة أسبوعياً',
      'مشرف متخصص',
      // Add/remove features
    ],
    popular: false,
  },
  // Update second package
];
```

---

### 6. Location Section

**File**: `src/components/Location.tsx`

#### Update Location Details
```tsx
<div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
  <p className="text-gray-300 font-medium mb-2">الملعب:</p>
  <p className="text-white text-lg font-bold">ملعب الفوكس</p>  {/* Change stadium name */}
  <p className="text-gray-400 text-sm mt-2">بجانب مقبرة الإنجليز</p>  {/* Change landmark */}
</div>
```

#### Update Phone Number
```tsx
<a href="tel:76888392" className="text-white font-bold hover:text-red-500">
  76888392  {/* Update phone */}
</a>
```

#### Update Google Maps Link
```tsx
<iframe
  src="https://maps.google.com/maps?..."
  title="موقع أكاديمية الرومانيستا"
/>
// Update the src URL for your location
```

---

### 7. Contact Section

**File**: `src/components/Contact.tsx`

#### Update Contact Methods
```tsx
const contactMethods = [
  {
    icon: Phone,
    title: 'اتصل بنا',
    description: 'للحصول على استفسارات سريعة',
    action: 'اتصل الآن',
    link: 'tel:76888392',  // Update phone
    value: '76888392',  // Update phone
  },
  // Update other methods
];
```

---

### 8. Social Media Section

**File**: `src/components/SocialMedia.tsx`

#### Update Social Links
```tsx
const socialLinks = [
  {
    name: 'Instagram',
    icon: '📸',
    url: 'https://www.instagram.com/romanista_fa',  // Update URL
    followers: '@romanista_fa',
    color: 'from-pink-600 to-red-600',
  },
  // Update other platforms
];
```

---

### 9. Feedback Form

**File**: `src/components/Feedback.tsx`

#### Update Email Address
```tsx
// In the email body creation
const emailBody = `
اسم الشخص: ${formData.name}
رقم الهاتف: ${formData.phone}
الرسالة: ${formData.message}
`;

// Update in the formspree or your service
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // Use your actual form service
});
```

#### Update Email Display
```tsx
<p className="text-center text-gray-400 text-xs">
  سيتم إرسال رسالتك إلى: YOUR_EMAIL@example.com
  {/* Update email address */}
</p>
```

---

### 10. Footer

**File**: `src/components/Footer.tsx`

#### Update Footer Links
```tsx
const footerLinks = [
  { title: 'الرئيسية', href: '#hero' },
  { title: 'عن الأكاديمية', href: '#about' },
  // Update as needed
];
```

#### Update Contact Information
```tsx
<div>
  <p className="text-gray-400">الهاتف:</p>
  <a href="tel:76888392" className="text-red-500 hover:text-red-400 font-bold">
    76888392  {/* Update phone */}
  </a>
</div>

<div>
  <p className="text-gray-400">البريد:</p>
  <a href="mailto:ROMANISTAACADEMY@GMAIL.COM" className="text-red-500">
    ROMANISTAACADEMY@GMAIL.COM  {/* Update email */}
  </a>
</div>
```

---

## 🎨 Color Customization

### Change Primary Color (Red)
Find all occurrences of `red-600`, `red-700`, `red-500` and replace:

```css
/* Old */
from-red-600 to-red-700

/* New - Example: Change to blue */
from-blue-600 to-blue-700
```

### Common Color Classes to Update:
```
Text: text-red-500, text-red-600
Background: bg-red-600, bg-red-700
Border: border-red-600, border-red-500
Gradient From: from-red-600
Gradient To: to-red-700
Shadow: shadow-red-600
```

### Change Secondary Color (Gold)
Replace all `yellow-500`, `yellow-600`, `yellow-400`:

```css
/* Old */
to-yellow-500

/* New - Example: Change to orange */
to-orange-500
```

---

## 🔤 Typography Customization

### Change Main Font
**File**: `index.html`
```html
<!-- Current -->
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />

<!-- Change to different Arabic font -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
```

**File**: `src/index.css`
```css
/* Update font family */
* {
  font-family: "YOUR_FONT", sans-serif;
}
```

### Change Display Font
**File**: `index.html`
```html
<!-- Current -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />

<!-- Change to different font -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_DISPLAY_FONT:wght@700;800;900&display=swap" rel="stylesheet" />
```

---

## 🔗 Update External Links

### Registration Link
**Files**: 
- `src/components/Header.tsx` (line 51, 67)
- `src/components/Hero.tsx` (line 65, 72)
- `src/components/Pricing.tsx` (line 96)
- `src/components/Registration.tsx` (line 82)

```tsx
// Old
href="https://romanista-regestration-776263.netlify.app/"

// New
href="YOUR_NEW_REGISTRATION_URL"
```

### Social Media Links
**File**: `src/components/SocialMedia.tsx`
```tsx
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/YOUR_USERNAME',  // Update
    followers: '@YOUR_USERNAME',
  },
  // Update all social links
];
```

---

## 🎬 Animation Customization

### Change Animation Duration
**Example in Hero.tsx:**
```tsx
transition={{ duration: 0.6 }}  // Change 0.6 to your preferred duration
```

### Adjust Stagger Delay
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Change to 0.05 for faster, 0.2 for slower
      delayChildren: 0.2,
    },
  },
};
```

### Modify Hover Effects
```tsx
whileHover={{ y: -10 }}  // Change -10 to -5 or -15 for different elevation
whileHover={{ scale: 1.05 }}  // Change 1.05 to 1.1 for more scale
```

---

## 📱 Responsive Breakpoint Changes

### Current Breakpoints (Tailwind):
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Example: Change Grid Layout
```tsx
// Current - 2 cols on mobile, 3 on tablet, 4 on desktop
className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"

// Change to your preference
className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
```

---

## 🔧 Form Customization

### Add New Form Fields
**File**: `src/components/Feedback.tsx`

```tsx
// Add to formData state
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  message: '',
  email: '',  // Add new field
});

// Add input field in JSX
<motion.div>
  <label className="block text-sm font-bold text-white mb-2">البريد الإلكتروني</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg..."
  />
</motion.div>
```

### Change Email Service
**File**: `src/components/Feedback.tsx`

Replace the `handleSubmit` function with your email service:

**Option 1: Using EmailJS**
```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  emailjs.send('service_id', 'template_id', formData, 'public_key')
    .then(() => setSubmitted(true))
    .catch(() => setError('حدث خطأ'));
};
```

**Option 2: Using Your Backend**
```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://your-backend.com/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) setSubmitted(true);
};
```

---

## 📊 Update Statistics

**File**: `src/components/Stats.tsx`

```tsx
const stats = [
  { value: 150, label: 'لاعب مسجل' },      // Update value and label
  { value: 15, label: 'مدربين متخصصين' },
  { value: 75, label: 'بطولة مكتسبة' },
  { value: 8, label: 'سنوات الخبرة' },
];
```

---

## 🚀 Deploy Changes

### Build the Project
```bash
npm run build
```

### Test Changes Locally
```bash
npm run dev
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Your Server
```bash
# Copy dist/ folder to your hosting
# Update DNS if needed
# Test on live server
```

---

## 🔍 SEO Updates

### Update Meta Tags
**File**: `index.html`
```html
<meta name="description" content="أكاديمية الرومانيستا - تدريب احترافي لكرة القدم">
<!-- Update description -->

<title>أكاديمية الرومانيستا | Romanista Football Academy</title>
<!-- Update title -->
```

### Add Open Graph Tags
```html
<meta property="og:title" content="أكاديمية الرومانيستا">
<meta property="og:description" content="تدريب احترافي لكرة القدم">
<meta property="og:image" content="image-url">
<meta property="og:url" content="your-website-url">
```

---

## ✅ Testing Checklist

After customization:
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on desktop browsers
- [ ] Check animations are smooth
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check spelling and grammar
- [ ] Verify images load correctly
- [ ] Test social media links
- [ ] Check color contrast for accessibility
- [ ] Test registration button
- [ ] Verify responsive layout
- [ ] Test on different browsers

---

## 🆘 Troubleshooting

### Animations Not Working
- Check if Framer Motion is installed: `npm install framer-motion`
- Verify component has proper motion wrapper

### Fonts Not Loading
- Check internet connection
- Clear browser cache
- Verify Google Fonts URL is correct

### Colors Look Different
- Clear browser cache
- Check Tailwind is properly configured
- Verify color class names are correct

### Form Not Submitting
- Check email service is configured
- Verify internet connection
- Check browser console for errors
- Test email address is correct

---

## 📚 Helpful Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev/
- **Google Fonts**: https://fonts.google.com/
- **Lucide Icons**: https://lucide.dev/

---

**Version**: 1.0.0
**Last Updated**: 2024
**Status**: Ready for Customization ✅
