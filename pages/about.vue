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

    <!-- Main Content & Vision -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-col">
            <h2 class="h2-title content-heading">من نحن</h2>
            <div class="divider-brown"></div>
            <p class="body-regular about-paragraph">
              <strong>رامي شريف للمحاماة</strong> مؤسسة قانونية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات والمؤسسات وفق منهج مهني قائم على الفهم الدقيق للوقائع، ودراسة المستندات، والتقييم الموضوعي للموقف القانوني.
            </p>
            <p class="body-regular about-paragraph">
              نؤمن بأن مهنة المحاماة لا تقتصر على إدارة الإجراءات أمام المحاكم، بل تمتد إلى كونها شراكة استراتيجية لحماية المصالح واستباق المخاطر وصياغة الحلول الأكثر كفاءة واستدامة.
            </p>
          </div>

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

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 992px) {
  .about-grid {
    grid-template-columns: 1.25fr 0.85fr;
  }
}

.content-heading {
  color: var(--color-navy);
}

.about-paragraph {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--color-dark-text);
  margin-bottom: 1.25rem;
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
