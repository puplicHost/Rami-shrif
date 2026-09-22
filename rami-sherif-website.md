# مؤسسة رامي شريف للمحاماة — Agent Context File

## مهمتك

أنت agent مسؤول عن بناء موقع **مؤسسة رامي شريف للمحاماة** كاملاً بـ **Vue.js فقط** (SPA — بدون Nuxt، بدون backend، بدون أي dependencies إضافية غير Vue Router).

**قبل ما تكتب أي كود:**
- استخدم الـ `frontend-design` skill الموجود عندك واقرأه كامل.
- طبّق مبادئ الـ design planning: color tokens، type scale، layout concept، principles — قبل ما تبدأ الكود.
- الـ reference هو موبايل ديزاين، لكن الموقع لازم يكون **fully responsive**: موبايل + desktop كلاهما متظبطين بالكامل.

---

## Visual Direction (مستخرجة من الـ reference والـ logo)

### Color Palette

```
--color-navy:       #1C2940   /* Primary dark — backgrounds, navbar, hero overlay */
--color-brown:      #5A342D   /* Accent — CTAs, highlights, borders */
--color-silver:     #C4C4C4   /* Secondary text, dividers, icons */
--color-cream:      #F5F0E8   /* Light sections background */
--color-white:      #FFFFFF   /* Cards, text on dark */
--color-dark-text:  #1A1A1A   /* Body text on light backgrounds */
```

### Typography

- **Arabic only** — الموقع عربي بالكامل، direction: RTL
- استخدم `Cairo` أو `Tajawal` من Google Fonts للـ body
- استخدم `Noto Naskh Arabic` أو `Amiri` للـ display headlines الكبيرة
- Type scale:
  - Display: 48–64px / bold
  - H1: 36–42px / bold
  - H2: 28–32px / semibold
  - H3: 20–24px / medium
  - Body: 16px / regular / line-height: 1.8
  - Label: 13px / medium / letter-spacing طبيعي (مش all-caps)

### Design Principles

1. **Premium Legal Institution** — مش "محامي شخصي"، دي مؤسسة قانونية
2. الـ dark sections (navy) للـ hero والـ CTAs والـ corporate section
3. الـ light sections (cream/white) للـ cards والـ content sections
4. White space كبير — مش مزدحم
5. الـ animations: fade-in عند الـ scroll بس، مش كل عنصر عنده animation منفردة
6. مفيش scales أو columns أو رموز قانونية كليشيه
7. الـ cards: border-radius خفيف (8px)، shadow خفيف جداً، مش كل حاجة في كارد
8. الـ brown `#5A342D` هو الـ accent للـ CTAs والـ underlines والـ highlights — مش ذهبي صريح

---

## Project Structure

```
src/
├── main.js
├── App.vue
├── router/index.js
├── assets/
│   ├── logo.png          ← اللوجو المرفق
│   └── styles/
│       └── global.css    ← CSS variables + reset + typography
├── components/
│   ├── layout/
│   │   ├── NavBar.vue
│   │   └── FooterSection.vue
│   └── ui/
│       ├── SectionLabel.vue
│       ├── PracticeCard.vue
│       ├── ServiceCard.vue
│       └── StepItem.vue
└── views/
    ├── HomePage.vue
    ├── AboutPage.vue
    ├── MethodologyPage.vue
    ├── CorporatePage.vue
    ├── IndividualsPage.vue
    ├── ContactPage.vue
    ├── practice-areas/
    │   └── PracticeAreaPage.vue   ← dynamic route /practice-areas/:slug
    └── services/
        └── ServicePage.vue        ← dynamic route /services/:slug
```

---

## Vue Router

```js
// routes
{ path: '/', component: HomePage }
{ path: '/about', component: AboutPage }
{ path: '/methodology', component: MethodologyPage }
{ path: '/corporate', component: CorporatePage }
{ path: '/individuals', component: IndividualsPage }
{ path: '/contact', component: ContactPage }
{ path: '/practice-areas/:slug', component: PracticeAreaPage }
{ path: '/services/:slug', component: ServicePage }
```

---

## HomePage.vue — Sections (بالترتيب)

### 1. NavBar
- Logo (الصورة المرفقة `logo.png`) + اسم المؤسسة نصياً بجانبه
- Links: الرئيسية / من نحن / منهجنا / مجالات العمل / خدماتنا / للشركات / للأفراد / تواصل معنا
- CTA button: "احجز استشارة" — لون brown
- Mobile: logo + hamburger، الـ menu ينزل كـ drawer من الجانب
- الـ navbar تبقى sticky، تغير الـ background لما يحصل scroll (تبقى semi-transparent → solid navy)

---

### 2. Hero Section
- **Full screen** — height: 100vh
- Background: صورة قانونية داكنة (مكتب + كتب) + overlay `rgba(28, 41, 64, 0.82)`
- Layout desktop: النص على اليمين، المساحة الصورة على اليسار
- Layout mobile: centered، النص فوق، CTA تحت

**المحتوى:**
```
[Label صغير]: مؤسسة رامي شريف للمحاماة

[Headline كبيرة — 3 أسطر]:
نفهم الملف…
نُقيّم الموقف…
ونختار المسار القانوني الأنسب.

[Supporting copy]:
مؤسسة قانونية تقدم خدمات المحاماة والاستشارات القانونية
للأفراد والشركات والمؤسسات.

[Primary CTA]: احجز استشارة قانونية  ← brown background
[Secondary CTA]: تعرّف على منهجنا   ← outlined
```
- Scroll indicator بسيط في الأسفل (animated arrow أو dot)

---

### 3. فلسفتنا — Philosophy Strip
- Section قصيرة جداً، background: cream
- **الجملة الكبيرة في المنتصف:**

```
الإجراء القانوني ليس نقطة البداية.
```
- تحتها بالـ body size:
```
البداية الصحيحة هي فهم المشكلة، وتقييم الموقف القانوني،
وتحديد الخيارات المتاحة، ثم اختيار المسار الأنسب.
```
- تحتها flow بصري أفقي (مش numbered markers):
```
فهم  ←  تقييم  ←  خيارات  ←  اختيار  ←  متابعة
```
- الـ arrows أو الفصل يكون بـ line رفيعة بلون brown خفيف

---

### 4. منهجنا في العمل — The 6 Steps (Visual Centerpiece)
- هذه أهم section في الصفحة — تستحق أكبر attention
- Background: navy dark
- Desktop: 3 خطوات × 2 rows في grid
- Mobile: vertical timeline — خطوط رأسية تربط الخطوات

**المحتوى:**
```
[Label]: منهجنا في العمل
[Headline]: نبدأ بالفهم… قبل الإجراء
[Intro]: نتعامل مع كل ملف باعتباره حالة قانونية مستقلة.

01 — دراسة الوقائع
فهم تفاصيل الموضوع والظروف المحيطة به.

02 — مراجعة المستندات
فحص وتحليل المستندات والبيانات.

03 — تقييم الموقف القانوني
تحديد المركز القانوني ونقاط القوة والتحديات والمخاطر.

04 — تحديد الخيارات
دراسة المسارات القانونية والبدائل المتاحة.

05 — اختيار المسار الأنسب
اختيار الحل وفق وقائع الملف وأهداف العميل.

06 — المتابعة والتنفيذ
متابعة الإجراءات وإطلاع العميل على التطورات.
```
- الـ step numbers تكون كبيرة، لون brown، كـ visual element مش مجرد label
- CTA في الأسفل: "تعرف على منهجنا بالتفصيل" → `/methodology`

---

### 5. مجالات العمل — Practice Areas
- Background: white
- Desktop: 3 cards في row
- Mobile: 2 cards في row (المنازعات المالية تكون full width أو وحدها)
- كل كارد فيه: أيقونة بسيطة (SVG line icon) + عنوان + نص قصير جداً + سهم
- الكليك على الكارد → `/practice-areas/:slug`

**الـ Cards:**
```
القانون المدني       | slug: civil
القانون التجاري      | slug: commercial
قانون الشركات       | slug: corporate-law
الأحوال الشخصية     | slug: personal-status
المنازعات المالية    | slug: financial-disputes
```

---

### 6. خدماتنا القانونية — Services
- Background: cream
- Layout: **Accordion على الموبايل** / Grid على الديسك توب
- مش كل الخدمات كاملة هنا — عنوان + جملة واحدة + كليك يودي على `/services/:slug`

```
الاستشارات القانونية      | slug: consultation
صياغة ومراجعة العقود     | slug: contracts
إدارة المنازعات           | slug: disputes
التمثيل القانوني          | slug: representation
الدعم القانوني للشركات    | slug: corporate-support
```

---

### 7. للشركات والمؤسسات — Corporate Teaser
- Background: صورة corporate داكنة + overlay navy
- **Section موجزة جداً** — مش كل المحتوى هنا

```
[Label]: للشركات والمؤسسات
[Headline]: خبرة تتجاوز النص القانوني
[Text — جملتين بس]:
العمل القانوني مع الشركات لا يتطلب المعرفة القانونية فحسب،
بل يستلزم فهم طبيعة النشاط والتحديات المرتبطة به.

[CTA]: اكتشف كيف ندعم الشركات → /corporate
```

---

### 8. للأفراد — Individuals Teaser
- Background: cream
- Split section: نص على اليمين، عنصر بصري هادئ على اليسار

```
[Label]: للأفراد
[Headline]: كل ملف له خصوصيته
[Text]:
نقدم للأفراد خدمات المحاماة والاستشارات القانونية
من خلال دراسة الحالة وتقييم الموقف القانوني.

[CTA]: تحدث معنا حول ملفك → /individuals
```

---

### 9. Final CTA Section
- Background: navy داكن جداً
- Minimal جداً — النص فقط + زرار

```
[Headline كبيرة]:
لديك ملف قانوني؟
ابدأ بفهم موقفك.

[Text صغير]:
تواصل مع مؤسسة رامي شريف للمحاماة لمناقشة ملفك
وتقييم الموقف القانوني وتحديد الخيارات المتاحة.

[Primary CTA]: احجز استشارة قانونية
[Secondary CTA]: تواصل معنا → /contact
```

---

### 10. Footer
```
[Logo + اسم المؤسسة]
[Tagline]: نفهم الملف… نُقيّم الموقف… ونختار المسار القانوني الأنسب.

[Navigation links — نفس الـ navbar]

[Contact]: يتم وضعها لاحقاً من العميل — placeholder دلوقتي

[Bottom bar]:
© مؤسسة رامي شريف للمحاماة — جميع الحقوق محفوظة
```

---

## الصفحات الفرعية — Content

### /about — من نحن
```
Hero: "مؤسسة قانونية بفكر مختلف"

من نحن:
رامي شريف للمحاماة مؤسسة قانونية تقدم خدمات المحاماة والاستشارات القانونية
للأفراد والشركات والمؤسسات وفق منهج مهني قائم على الفهم الدقيق للوقائع،
ودراسة المستندات، والتقييم الموضوعي للموقف القانوني.

رؤيتنا:
نسعى لأن تكون مؤسسة رامي شريف للمحاماة مرجعاً قانونياً موثوقاً
للأفراد والشركات والمؤسسات.

قيمنا (4 عناصر في Grid):
الدقة / الوضوح / السرية / المسؤولية
```

---

### /methodology — منهجنا
```
الـ 6 خطوات بالتفصيل الكامل
+ الفلسفة الكاملة خلف كل خطوة
```

---

### /corporate — للشركات
```
خبرة تتجاوز النص القانوني (النص الكامل)
+
الدعم القانوني يبدأ قبل النزاع (النص الكامل)
+
القطاعات: الصناعة والتجارة / الشحن البحري / الشحن الدولي / الخدمات اللوجستية / المقاولات / التوريدات العامة
+
خبراتنا المؤسسية (الشركات الخمس المذكورة)
+
لماذا مؤسسة رامي شريف (الـ 5 reasons)
```

---

### /individuals — للأفراد
```
كل ملف له خصوصيته (النص الكامل)
+ مجالات خدمة الأفراد
+ CTA للتواصل
```

---

### /contact — تواصل معنا
```
Form: الاسم / رقم الهاتف / موضوع الاستشارة / رسالة
(Form static — بدون backend، يظهر success message فقط)
+ بيانات التواصل placeholder
```

---

### /practice-areas/:slug — مجالات العمل
```
Dynamic page تشتغل بـ data object في Vue:

const practiceAreas = {
  'civil': {
    title: 'القانون المدني',
    headline: 'المنازعات والحقوق المدنية',
    body: 'التعامل مع المنازعات والموضوعات المدنية، ودراسة الحقوق والالتزامات والمراكز القانونية للأطراف وفق طبيعة كل نزاع.'
  },
  'commercial': {
    title: 'القانون التجاري',
    headline: 'الدعم القانوني في المعاملات التجارية',
    body: 'تقديم الدعم القانوني في المنازعات والمعاملات التجارية، ودراسة المراكز القانونية والالتزامات المرتبطة بالنشاط التجاري.'
  },
  'corporate-law': {
    title: 'قانون الشركات',
    headline: 'الخدمات القانونية للشركات',
    body: 'تقديم الخدمات القانونية المرتبطة بالشركات ومعاملاتها، ومراجعة وصياغة العقود والمستندات، ودراسة المراكز القانونية والتعامل مع النزاعات.'
  },
  'personal-status': {
    title: 'الأحوال الشخصية',
    headline: 'مسائل الأحوال الشخصية',
    body: 'تقديم الخدمات القانونية في مسائل الأحوال الشخصية، من خلال دراسة الوقائع والمستندات وتقييم الموقف القانوني وفق ظروف كل حالة.'
  },
  'financial-disputes': {
    title: 'المنازعات المالية',
    headline: 'دراسة المنازعات ذات الطابع المالي',
    body: 'دراسة المنازعات ذات الطابع المالي، وتحليل المستندات والالتزامات والمراكز القانونية للأطراف، وتحديد المسار القانوني المناسب.'
  }
}
```

---

### /services/:slug — الخدمات
```js
const services = {
  'consultation': {
    title: 'الاستشارات القانونية',
    body: 'دراسة موضوع الاستشارة، وتقييم الموقف القانوني، وتوضيح الخيارات والمسارات المتاحة.'
  },
  'contracts': {
    title: 'صياغة ومراجعة العقود',
    body: 'مراجعة وصياغة العقود والمستندات القانونية، مع التركيز على وضوح الحقوق والالتزامات وتحديد المخاطر القانونية والحد منها.'
  },
  'disputes': {
    title: 'إدارة المنازعات',
    body: 'دراسة النزاع وتقييم المركز القانوني، ووضع المسار القانوني المناسب ومتابعة الإجراءات المرتبطة به.'
  },
  'representation': {
    title: 'التمثيل القانوني',
    body: 'تمثيل العملاء أمام المحاكم والجهات المختصة وفق طبيعة القضية والإجراءات القانونية المطلوبة.'
  },
  'corporate-support': {
    title: 'الدعم القانوني للشركات',
    body: 'تقديم الدعم القانوني للشركات والمؤسسات في العقود والمعاملات والالتزامات القانونية والمنازعات.'
  }
}
```

---

## Responsive Guidelines

### Breakpoints
```css
/* Mobile first */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
```

### Mobile-specific rules
- Navbar: logo + hamburger فقط، drawer menu من اليمين
- Hero: text centered، font size يصغر تناسبياً
- منهجنا الـ 6 خطوات: vertical timeline مع connector line
- Cards: column واحد أو 2 columns حسب المحتوى
- مجالات العمل: 2×2 grid + الخامسة full width
- الـ accordion للخدمات على الموبايل

### Desktop-specific rules
- Navbar: full links visible
- Hero: split layout — text right, image left
- منهجنا: 3×2 grid
- Cards: 3 في row
- Split sections: 50/50

---

## Logo Usage

- الـ logo المرفق (`logo.png`) يُستخدم في الـ navbar والـ footer
- على الـ dark backgrounds: الـ logo الأبيض/سيلفر
- على الـ light backgrounds: الـ logo الداكن
- Height الـ logo في الـ navbar: 48px موبايل / 56px ديسك توب

---

## ملاحظات تقنية مهمة

1. **Vue Router** — `createWebHashHistory` عشان يشتغل static بدون server
2. **RTL** — `dir="rtl"` على الـ `<html>` tag، و `direction: rtl` في الـ CSS
3. **Google Fonts** — يتحمل من الـ `<head>` مباشرة
4. **Images** — استخدم Unsplash URLs مؤقتاً للـ hero وال corporate backgrounds (قانون/مكتب/مستندات)
   - Hero: `https://images.unsplash.com/photo-1589829545856-d10d557cf95f` (law books)
   - Corporate: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf` (corporate meeting)
5. **No external UI libraries** — vanilla Vue + CSS فقط
6. **Scroll animations** — `IntersectionObserver` بسيط، مش كل عنصر عنده animation
7. **`prefers-reduced-motion`** — يحترمها ويوقف الـ animations

---

## Brand Voice (للـ copy داخل الكود)

- الجملة الأساسية: **"نفهم الملف… نُقيّم الموقف… ونختار المسار القانوني الأنسب."**
- الـ tone: رسمي، هادئ، واثق — مش مبالغ في البيع
- الـ CTAs: فعل واضح ("احجز" / "تحدث" / "اكتشف") — مش "اعرف أكثر" generic
- لا labels بـ all-caps نهائياً
- لا emojis أو icons كليشيه (scales، hammer، etc)

---

## Prompt للـ Logo (إذا احتجت تعمل variant بـ SVG أو تستخدمه)

```
Generate a premium Arabic calligraphy logo for "رامي شريف للمحاماة" (Rami Sherif Law Firm).
The existing logo uses a classical column (عمود إغريقي) as the main shape,
with Arabic calligraphy integrated inside the column.

Color palette to use:
- Primary dark navy: #1C2940
- Warm brown accent: #5A342D
- Silver/light grey for the calligraphy: #C4C4C4

Style: Premium, corporate, legal institution — NOT traditional gold & scales.
The feeling should be: Trust + Precision + Calm + Authority.
No excessive ornamentation. Clean, architectural, timeless.
```
