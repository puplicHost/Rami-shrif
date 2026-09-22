<template>
  <div class="page-wrapper about-page">
    <!-- Page Hero -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <SectionLabel text="عن المؤسسة" theme="dark" />
        <h1 class="display-title page-title">مؤسسة قانونية بفكر مختلف</h1>
        <p class="body-lead page-lead">
          نؤسس عملاً قانونياً يرتكز على الدقة، والموضوعية، والفهم المتعمق للوقائع قبل اتخاذ أي مسار.
        </p>
      </div>
    </section>

    <!-- Main Content: About Section with about.JPEG -->
    <section class="about-section fade-in-section" aria-label="من نحن">
      <div class="container">
        <div class="about-card-container">
          <!-- Right Column in RTL: Lawyer Photo -->
          <div class="about-photo-wrapper">
            <img
              src="/about.JPEG"
              alt="أ. رامي شريف - مؤسسة رامي شريف للمحاماة"
              class="about-photo-img"
              loading="lazy"
            />
          </div>

          <!-- Left Column in RTL: Text Block -->
          <div class="about-text-content">
            <div class="about-badge-line">
              <span class="badge-dash"></span>
              <span class="badge-title">من نحن؟</span>
              <span class="badge-dash badge-dash-long"></span>
            </div>

            <h2 class="about-main-title">
              <span>مؤسسة قانونية</span>
              <span>بفكر مختلف</span>
            </h2>

            <p class="about-description">
              رامي شريف للمحاماة هي مؤسسة قانونية<br class="hidden-xs" />
              تقدم خدمات المحاماة والاستشارات القانونية<br class="hidden-xs" />
              للأفراد والشركات والمؤسسات، وفق منهج قائم<br class="hidden-xs" />
              على الفهم الدقيق للوقائع، ودراسة المستندات،<br class="hidden-xs" />
              والتقييم الموضوعي للموقف القانوني قبل<br class="hidden-xs" />
              تحديد المسار الأنسب للتعامل معه.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="vision-card">
          <span class="vision-tag">رؤيتنا المستقبلية</span>
          <h3 class="vision-title">
            مرجع قانوني موثوق للأفراد والشركات والمؤسسات
          </h3>
          <p class="vision-text">
            نسعى لأن تكون مؤسسة رامي شريف للمحاماة الخيار القانوني الأول والموثوق به محلياً وإقليمياً، من خلال ترسيخ معايير مهنية صارمة قائمة على النزاهة العلمية والعملية.
          </p>
          <div class="vision-accent-line"></div>
        </div>
      </div>
    </section>

    <!-- Values Grid (قيمنا الأربعة) -->
    <section class="section bg-cream fade-in-section">
      <div class="container">
        <div class="values-header">
          <SectionLabel text="ركائز العمل" theme="light" align="center" />
          <h2 class="h1-title section-title-dark text-center">قيمنا المؤسسية</h2>
          <p class="section-intro-text text-dark-muted text-center">
            مبادئ ثابتة تحكم كل استشارة، وتوجه كل خطوة نتخذها دفاعاً عن حقوق موكلينا.
          </p>
        </div>

        <div class="values-grid">
          <div class="value-card" v-for="val in values" :key="val.title">
            <div class="value-icon-box">
              <span class="value-num">{{ val.num }}</span>
            </div>
            <h3 class="value-title">{{ val.title }}</h3>
            <p class="value-desc">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-tight bg-navy text-center fade-in-section">
      <div class="container">
        <h2 class="h2-title mb-4">هل تحتاج إلى استشارة قانونية مهنية وموضوعية؟</h2>
        <p class="body-lead mb-6 text-silver max-w-2xl mx-auto">
          تواصل معنا اليوم لمناقشة ملفك القانوني مع فريق متخصص يضع مصلحتك أولاً.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary">
          تواصل معنا الآن
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'من نحن | مؤسسة رامي شريف للمحاماة'
})

const values = [
  {
    num: '01',
    title: 'الدقة',
    desc: 'التحري العميق في تفاصيل الوقائع وبنود المستندات، وبناء الحجج على أسس نظامية محكمة لا تدع مجالاً للثغرات.'
  },
  {
    num: '02',
    title: 'الوضوح',
    desc: 'تقديم تقييم صريح ومباشر للموقف القانوني، وتوضيح نسب النجاح والمخاطر المترتبة على كل خيار دون تهويل أو تهوين.'
  },
  {
    num: '03',
    title: 'السرية',
    desc: 'حماية خصوصية موكلينا وبيانات ملفاتهم وفق أقصى درجات الأمان والالتزام الأخلاقي والمهني الراسخ.'
  },
  {
    num: '04',
    title: 'المسؤولية',
    desc: 'التعامل مع كل ملف باعتباره أمانة كبرى تستوجب التفاني التام والمتابعة المستمرة حتى تحقيق الغاية المشروعة.'
  }
]
</script>

<style scoped>
.page-hero {
  padding-top: 8rem;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.page-hero-container {
  max-width: 900px;
}

.page-title {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
}

.page-lead {
  max-width: 60ch;
}

.about-section {
  background-color: #F5F0E8; /* cream */
  padding: clamp(60px, 8vw, 100px) 0;
  border-bottom: 1px solid var(--color-cream-border);
}

.about-card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: clamp(24px, 4.5vw, 56px);
  max-width: 1080px;
  margin: 0 auto;
}

.about-photo-wrapper {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-photo-img {
  width: clamp(140px, 26vw, 340px);
  aspect-ratio: 4 / 5;
  height: auto;
  object-fit: cover;
  object-position: center 15%;
  border-radius: clamp(16px, 2.5vw, 24px);
  box-shadow: 0 12px 36px rgba(28, 41, 64, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.about-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  max-width: 580px;
}

.about-badge-line {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 14px;
}

.badge-dash {
  width: 20px;
  height: 1.5px;
  background-color: #8C584E;
  opacity: 0.85;
}

.badge-dash-long {
  width: 50px;
  height: 1.5px;
  background: linear-gradient(to left, #8C584E, transparent);
  opacity: 0.85;
}

.badge-title {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  font-weight: 600;
  color: #7A4237;
  letter-spacing: normal;
  white-space: nowrap;
}

.about-main-title {
  font-family: var(--font-body);
  font-size: clamp(1.85rem, 3.4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.25;
  color: #1C2940;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 2px;
  width: 100%;
}

.about-description {
  font-family: var(--font-body);
  font-size: clamp(0.92rem, 1.2vw, 1.05rem);
  font-weight: 500;
  line-height: 1.9;
  color: #1C2940;
  margin: 0;
  text-align: right;
  width: 100%;
}

@media (max-width: 768px) {
  .about-section {
    padding: clamp(40px, 8vw, 60px) 12px;
  }

  .about-card-container {
    flex-direction: row; /* maintains row on mobile */
    gap: 14px;
    align-items: center;
  }

  .about-photo-img {
    width: clamp(120px, 35vw, 160px);
    border-radius: 14px;
  }

  .about-text-content {
    align-items: flex-start;
    text-align: right;
  }

  .about-badge-line {
    gap: 8px;
    margin-bottom: 8px;
    justify-content: flex-start;
  }

  .badge-dash {
    width: 14px;
  }

  .badge-dash-long {
    width: 32px;
  }

  .badge-title {
    font-size: 0.82rem;
  }

  .about-main-title {
    font-size: clamp(1.15rem, 4.2vw, 1.55rem);
    margin-bottom: 10px;
    align-items: flex-start;
    text-align: right;
    gap: 0;
  }

  .about-description {
    font-size: clamp(0.72rem, 2.4vw, 0.85rem);
    line-height: 1.68;
    text-align: right;
  }

  .hidden-xs {
    display: none;
  }
}

.vision-card {
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: 2.75rem 2.25rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.vision-tag {
  font-size: 0.85rem;
  font-weight: 600;
  color: #DFC0BA;
  display: block;
  margin-bottom: 1rem;
}

.vision-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 1.25rem;
  color: var(--color-white);
}

.vision-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-silver);
  margin-bottom: 1.5rem;
}

.vision-accent-line {
  width: 44px;
  height: 3px;
  background-color: var(--color-brown);
}

.values-header {
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
}

.text-center {
  text-align: center;
}

.section-title-dark {
  color: var(--color-navy);
  margin-bottom: 0.75rem;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 640px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.value-card {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.25rem 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-icon-box {
  margin-bottom: 1.25rem;
}

.value-num {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-brown);
}

.value-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.75rem;
}

.value-desc {
  font-size: 0.925rem;
  line-height: 1.8;
  color: var(--color-muted-text);
}

.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.text-silver { color: var(--color-silver); }
.max-w-2xl { max-width: 42rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
</style>
