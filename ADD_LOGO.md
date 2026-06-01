# 🎨 كيفية إضافة شعار الأكاديمية

## الخطوة 1️⃣: جهز صورة الشعار

- اسم الصورة: `logo.png` أو أي اسم تريده
- الصيغة: PNG، JPG، SVG
- الحجم المثالي: 200x200 بكسل أو أكبر
- الخلفية: شفافة (اختياري)

---

## الخطوة 2️⃣: ضع الصورة في المجلد الصحيح

### المسار:
```
project-root/
└── public/
    └── images/
        └── logo.png (ضع الصورة هنا)
```

### إذا لم يكن هناك مجلد images:
1. افتح مجلد `public`
2. أنشئ مجلد جديد اسمه `images`
3. ضع الصورة فيه

---

## الخطوة 3️⃣: عدل ملف Header.tsx

### افتح:
```
src/components/Header.tsx
```

### ابحث عن هذا الكود (حوالي السطر 12):
```tsx
<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center font-bold text-white text-xl border-2 border-white/30">
  {/* Replace with: <img src="/path-to-your-logo.png" alt="ROMANISTA Logo" className="w-full h-full object-contain" /> */}
  R
</div>
```

### استبدله بـ:

#### الخيار 1️⃣: صورة عادية
```tsx
<img 
  src="/images/logo.png" 
  alt="ROMANISTA Logo" 
  className="w-12 h-12 rounded-lg object-contain" 
/>
```

#### الخيار 2️⃣: صورة مع إطار
```tsx
<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center border-2 border-white/30 overflow-hidden">
  <img 
    src="/images/logo.png" 
    alt="ROMANISTA Logo" 
    className="w-full h-full object-contain p-1" 
  />
</div>
```

#### الخيار 3️⃣: صورة مع تأثير عند التمرير
```tsx
<motion.div
  whileHover={{ scale: 1.1 }}
  className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center border-2 border-white/30 overflow-hidden cursor-pointer"
>
  <img 
    src="/images/logo.png" 
    alt="ROMANISTA Logo" 
    className="w-full h-full object-contain p-1" 
  />
</motion.div>
```

---

## مثال كامل

### الكود الأصلي:
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-3 cursor-pointer"
>
  {/* Logo */}
  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center font-bold text-white text-xl border-2 border-white/30">
    R
  </div>
  <div className="hidden sm:block">
    <p className="text-sm font-bold text-white">ROMANISTA</p>
    <p className="text-xs text-gray-400">الرومانيستا</p>
  </div>
</motion.div>
```

### الكود الجديد مع الصورة:
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-3 cursor-pointer"
>
  {/* Logo Image */}
  <img 
    src="/images/logo.png" 
    alt="ROMANISTA Logo" 
    className="w-12 h-12 rounded-lg object-contain" 
  />
  <div className="hidden sm:block">
    <p className="text-sm font-bold text-white">ROMANISTA</p>
    <p className="text-xs text-gray-400">الرومانيستا</p>
  </div>
</motion.div>
```

---

## ✅ اختبار الشعار

### الخطوة 1: شغل الموقع
```bash
npm run dev
```

### الخطوة 2: افتح في المتصفح
```
http://localhost:5173
```

### الخطوة 3: انظر للـ Header
- الشعار يجب أن يظهر في الزاوية اليسرى
- بجانب كلمة "ROMANISTA"

### الخطوة 4: إذا لم يظهر:
- تحقق من اسم الملف
- تأكد من اسم المجلد `images`
- حاول مسح الـ Cache (Ctrl+Shift+Delete)
- أعد تحميل الصفحة (F5)

---

## 📐 أحجام الصور المقترحة

### قياسات مختلفة:

| الحجم | الجودة | للاستخدام |
|------|-------|----------|
| 50x50 | صغير | للشاشات الصغيرة فقط |
| 100x100 | وسط | مقبول لكن قد لا يكون واضح |
| 200x200 | جيد جداً | مثالي للـ Header |
| 300x300 | ممتاز | الأفضل للجودة العالية |
| 500x500 | عالي جداً | احتياطي للشاشات الكبيرة |

**الخيار الأفضل**: **200x200** أو **256x256**

---

## 🎨 نصائح لتصميم الشعار

✅ **للتصميم الجيد:**
- الخلفية شفافة (PNG)
- شكل مربع
- لون يتناسب مع الأحمر والذهبي
- وضوح عالي
- خط بسيط وقابل للقراءة

❌ **تجنب:**
- الألوان الفاتحة جداً
- النصوص الكثيرة
- الخلفية البيضاء
- الصور المعقدة

---

## 🔄 تغيير الشعار لاحقاً

إذا أردت تغيير الشعار:
1. ضع صورة جديدة في `public/images/`
2. غير اسم الملف في `Header.tsx`
3. احفظ
4. الموقع يحدث تلقائياً

---

## 🆘 في حالة المشاكل

### المشكلة: الصورة لا تظهر
```
الحل:
1. تأكد من اسم الملف (حروف صغيرة)
2. تحقق من المسار: /images/logo.png
3. مسح الـ Cache (Ctrl+Shift+Delete)
4. أعد تحميل الصفحة (F5 أو Ctrl+R)
```

### المشكلة: الصورة مشوهة
```
الحل:
1. تأكد من حجم الصورة
2. الصورة يجب أن تكون مربعة
3. استخدم object-contain في CSS
```

### المشكلة: الصورة لونها غريب
```
الحل:
1. استخدم صورة PNG بخلفية شفافة
2. أو عدل الـ Background Color
3. أو أضف filter في CSS
```

---

## 💻 كود CSS إضافي (إذا احتجت)

### إذا أردت تأثيرات إضافية:

#### تأثير التدرج:
```tsx
<img 
  src="/images/logo.png" 
  alt="ROMANISTA Logo" 
  className="w-12 h-12 rounded-lg object-contain hover:opacity-80 transition-opacity" 
/>
```

#### تأثير الظل:
```tsx
<div className="w-12 h-12 rounded-lg shadow-lg shadow-red-600/50 overflow-hidden">
  <img 
    src="/images/logo.png" 
    alt="ROMANISTA Logo" 
    className="w-full h-full object-contain" 
  />
</div>
```

#### تأثير الدوران عند التمرير:
```tsx
<motion.img
  whileHover={{ rotate: 5 }}
  src="/images/logo.png" 
  alt="ROMANISTA Logo" 
  className="w-12 h-12 rounded-lg object-contain cursor-pointer" 
/>
```

---

## ✅ الخطوات الملخصة

1. ✅ جهز صورة الشعار (200x200)
2. ✅ ضعها في `public/images/logo.png`
3. ✅ افتح `src/components/Header.tsx`
4. ✅ استبدل كود الـ R بكود الصورة
5. ✅ احفظ الملف
6. ✅ الموقع يحدث تلقائياً
7. ✅ تحقق من الـ Header

---

## 🎉 تم!

شعار الأكاديمية الآن جاهز ويظهر في الـ Header! 🚀

**احتجت مساعدة؟** أخبرني! 😊
