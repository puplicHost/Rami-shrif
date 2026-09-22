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
  background-color: #F7F3EC; /* Exact warm cream from screenshot */
  padding: clamp(48px, 6vw, 90px) 0;
  border-bottom: 1px solid var(--color-cream-border);
}

.about-card-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: clamp(20px, 3.5vw, 48px);
  max-width: 1040px;
  margin: 0 auto;
}

.about-photo-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
}

.about-photo-img {
  width: clamp(145px, 26vw, 320px);
  height: 100%;
  min-height: 250px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: clamp(16px, 2vw, 22px);
  box-shadow: 0 10px 30px rgba(28, 41, 64, 0.12);
}

.about-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: right;
  max-width: 560px;
}

.about-badge-line {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 12px;
}

.badge-dash {
  width: 16px;
  height: 1.5px;
  background-color: #9B7068;
  opacity: 0.8;
}

.badge-dash-long {
  width: 48px;
  height: 1.5px;
  background: linear-gradient(to left, #9B7068, transparent);
  opacity: 0.8;
}

.badge-title {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  color: #8C5A52; /* warm brown */
  letter-spacing: normal;
  white-space: nowrap;
}

.about-main-title {
  font-family: var(--font-body);
  font-size: clamp(1.85rem, 3.4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.25;
  color: #162740; /* deep rich solid navy from image */
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 2px;
  width: 100%;
}

.about-description {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.85;
  color: #37475B; /* softer dark slate navy from image */
  margin: 0;
  text-align: right;
  width: 100%;
}

@media (max-width: 768px) {
  .about-section {
    padding: 32px 14px;
  }

  .about-card-container {
    flex-direction: row;
    gap: 14px;
    align-items: stretch;
  }

  .about-photo-img {
    width: clamp(130px, 37vw, 155px);
    height: 100%;
    min-height: 245px;
    border-radius: 16px;
    object-position: center 20%;
  }

  .about-text-content {
    align-items: flex-start;
    text-align: right;
    justify-content: center;
  }

  .about-badge-line {
    gap: 6px;
    margin-bottom: 6px;
    justify-content: flex-start;
  }

  .badge-dash {
    width: 12px;
  }

  .badge-dash-long {
    width: 28px;
  }

  .badge-title {
    font-size: 0.8rem;
    color: #8C5A52;
  }

  .about-main-title {
    font-size: clamp(1.28rem, 4.4vw, 1.48rem);
    line-height: 1.22;
    color: #162740;
    margin-bottom: 8px;
    align-items: flex-start;
    text-align: right;
    gap: 0;
  }

  .about-description {
    font-size: clamp(10.5px, 2.75vw, 12px);
    line-height: 1.72;
    color: #37475B;
    text-align: right;
    font-weight: 500;
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
