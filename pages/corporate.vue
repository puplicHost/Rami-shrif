<template>
  <div class="page-wrapper corporate-page">
    <!-- Page Hero with Corporate Background -->
    <section class="corporate-hero bg-navy">
      <div class="hero-bg-layer">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
          alt="اجتماع أعمال واستشارات قانونية للشركات"
          class="hero-img"
        />
        <div class="hero-overlay-dark"></div>
      </div>

      <div class="container relative z-10">
        <SectionLabel text="قطاع الشركات والمؤسسات" theme="dark" />
        <h1 class="display-title page-title">خبرة تتجاوز النص القانوني</h1>
        <p class="body-lead page-lead">
          العمل القانوني مع الشركات لا يتطلب المعرفة القانونية فحسب، بل يستلزم فهم طبيعة النشاط والتحديات المرتبطة به وسرعة حركة السوق.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/contact" class="btn btn-primary">
            طلب عرض خدمات للشركات
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Deep Section 1: الدعم القانوني يبدأ قبل النزاع -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="split-narrative">
          <div class="narrative-content">
            <span class="narrative-tag">الوقاية التعاقدية</span>
            <h2 class="h1-title narrative-title">الدعم القانوني يبدأ قبل النزاع</h2>
            <div class="divider-brown"></div>
            <p class="body-regular narrative-text">
              في عالم الأعمال المعاصر، لا يُقاس المستشار القانوني الناجح بعدد القضايا التي يربحها في المحاكم فحسب، بل بعدد الأزمات والنزاعات التي نجح في تجنيب الشركة خوضها من الأساس.
            </p>
            <p class="body-regular narrative-text">
              نقدم لشركائنا منظومة دعم قانوني وقائي مستمرة؛ تبدأ من مراجعة العقود وصياغة بنودها بصرامة، وتقييم المخاطر التشغيلية والمالية مع الموردين والعملاء والجهات الحكومية، وضمان الامتثال التام لكافة القوانين واللوائح المنظمة.
            </p>
          </div>

          <div class="narrative-stat-card">
            <div class="stat-item">
              <span class="stat-number">01</span>
              <div class="stat-text">
                <strong>التحصين المسبق للعقود:</strong>
                <p>صياغة تمنع التفسيرات المزدوجة وتضع ضمانات التنفيذ الصارمة.</p>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-number">02</span>
              <div class="stat-text">
                <strong>الامتثال وحوكمة الشركات:</strong>
                <p>مواءمة الهيكل القانوني وقرارات مجالس الإدارة مع أحكام القانون التجاري.</p>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-number">03</span>
              <div class="stat-text">
                <strong>إدارة المخاطر والوساطة التجارية:</strong>
                <p>حل الخلافات في مهدها دون الإخلال باستمرارية الأنشطة التشغيلية.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sectors Section (القطاعات التي نخدمها) -->
    <section class="section bg-cream fade-in-section">
      <div class="container">
        <div class="section-center-head">
          <SectionLabel text="مجالات التخصص المؤسسي" theme="light" align="center" />
          <h2 class="h1-title section-title-dark text-center">القطاعات الاقتصادية المستهدفة</h2>
          <p class="section-intro-text text-dark-muted text-center">
            تراكمت خبراتنا عبر التعامل مع مختلف القطاعات التجارية والصناعية الأكثر حيوية في السوق.
          </p>
        </div>

        <div class="sectors-grid">
          <div class="sector-card" v-for="sec in sectors" :key="sec.title">
            <div class="sector-icon-box">
              <component :is="'span'" class="sector-symbol">{{ sec.symbol }}</component>
            </div>
            <h3 class="sector-title">{{ sec.title }}</h3>
            <p class="sector-desc">{{ sec.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. خبراتنا المؤسسية -->
    <section class="section bg-navy-dark text-white fade-in-section">
      <div class="container">
        <div class="section-center-head">
          <SectionLabel text="خبراتنا المؤسسية" theme="dark" align="center" />
          <h2 class="h1-title text-center text-white">خبرة عملية عبر قطاعات متنوعة</h2>
          <p class="section-intro-text text-silver text-center">
            اكتسبت المؤسسة خبرة عملية من التعامل مع شركات ومؤسسات تعمل في قطاعات متنوعة، بما أتاح فهمًا أوسع لطبيعة الأنشطة والتحديات القانونية المرتبطة بها.
          </p>
        </div>

        <div class="corporate-entities-grid">
          <div class="entity-card" v-for="entity in corporateEntities" :key="entity.name">
            <div class="entity-badge">{{ entity.category }}</div>
            <h3 class="entity-name">{{ entity.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- لماذا مؤسسة رامي شريف (الـ 5 reasons) -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="section-center-head">
          <SectionLabel text="القيمة المضافة" theme="light" align="center" />
          <h2 class="h1-title section-title-dark text-center">لماذا تختار مؤسسة رامي شريف لشراكتك القانونية؟</h2>
          <p class="section-intro-text text-dark-muted text-center">
            خمس ركائز جوهرية تجعلنا الخيار المفضل لإدارات الشركات ومجالس الإدارة:
          </p>
        </div>

        <div class="reasons-stack">
          <div class="reason-row" v-for="(reason, rIdx) in reasons" :key="reason.title">
            <div class="reason-index-box">
              <span class="reason-index">0{{ rIdx + 1 }}</span>
            </div>
            <div class="reason-text-box">
              <h3 class="reason-title">{{ reason.title }}</h3>
              <p class="reason-body">{{ reason.desc }}</p>
            </div>
          </div>
        </div>

        <div class="corporate-cta-banner">
          <div class="banner-inner">
            <div>
              <h3 class="banner-title">هل ترغب في تأسيس شراكة قانونية مستدامة لشركتك؟</h3>
              <p class="banner-sub">حدد موعداً لمناقشة احتياجات مؤسستك وحجم أعمالك واقتراح باقة الخدمات المناسبة.</p>
            </div>
            <NuxtLink to="/contact" class="btn btn-primary">
              طلب اجتماع استشاري
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'للشركات والمؤسسات | مؤسسة رامي شريف للمحاماة'
})

const sectors = [
  {
    symbol: '⚙️',
    title: 'الصناعة والتجارة',
    desc: 'صياغة عقود خطوط الإنتاج، التوريد، التوزيع الحصري، وحماية الملكية الصناعية والتعامل مع النزاعات الجمركية.'
  },
  {
    symbol: '🚢',
    title: 'الشحن البحري',
    desc: 'معاملات سندات الشحن، منازعات مشارطة المشاريع البحرية، ومسؤوليات الناقل البحري والتأمين على البضائع.'
  },
  {
    symbol: '✈️',
    title: 'الشحن الدولي',
    desc: 'إجراءات العبور الدولي واللوجستيات العابرة للحدود والنزاعات المرتبطة بالاتفاقيات الدولية والتخليص الجمركي.'
  },
  {
    symbol: '📦',
    title: 'الخدمات اللوجستية',
    desc: 'عقود التخزين والإيداع والتوصيل، وعقود أساطيل النقل، وتحديد المسؤوليات التعاقدية والتأمينية.'
  },
  {
    symbol: '🏗️',
    title: 'المقاولات والإنشاءات',
    desc: 'صياغة عقود الفيديك (FIDIC)، مطالبات التمديد الزمني والتعويضات، وحسم نزاعات مقاولي الباطن.'
  },
  {
    symbol: '📋',
    title: 'التوريدات العامة والمناقصات',
    desc: 'الاشتراك في المزايدات والمناقصات الحكومية والخاصة، وفحص كراسات الشروط، وصياغة خطابات الضمان.'
  }
]

const corporateEntities = [
  {
    name: 'شركة الفاروق للصناعة والتجارة',
    category: 'الصناعة والتجارة'
  },
  {
    name: 'غرفة التجارة والصناعة البرازيلية',
    category: 'البيئة المؤسسية والتجارية'
  },
  {
    name: 'شركة إيچبشن لوجستيك للشحن البحري',
    category: 'الشحن البحري والخدمات اللوجستية'
  },
  {
    name: 'GRL للشحن الدولي والخدمات اللوجستية',
    category: 'الشحن الدولي والخدمات اللوجستية'
  },
  {
    name: 'مجموعة قاصد خير للمقاولات والتوريدات العامة',
    category: 'المقاولات والتوريدات'
  }
]

const reasons = [
  {
    title: 'فهم عميق لبيئة الأعمال والتشغيل اليومي',
    desc: 'لا ننظر إلى المسألة بنظرة أكاديمية جامدة، بل ندرك كيف تؤثر القرارات القانونية على الدورة المالية للشركة وسير أعمالها اليومية.'
  },
  {
    title: 'الوقاية القانونية وحماية العقود قبل نشوء النزاع',
    desc: 'نعمل على تحصين كافة التعاملات والمستندات بأسلوب وقائي يغلق الثغرات قبل تحول أي خلاف بسيط إلى نزاع قضائي معقد.'
  },
  {
    title: 'سرعة الاستجابة ومرونة الحلول الاستراتيجية',
    desc: 'سرعة التجاوب القانوني مع الإدارات التنفيذية تضمن اتخاذ قرارات تجارية سليمة في اللحظة المناسبة دون تأخير معطل.'
  },
  {
    title: 'تقييم المخاطر المالية والتعاقدية بدقة متناهية',
    desc: 'نضع أمام القيادة التنفيذية تحليلاً واضحاً للتكلفة مقابل المردود والمخاطر المحتملة لكل خطوة تعاقدية أو قضائية.'
  },
  {
    title: 'التمثيل الاحترافي أمام كافة الهيئات القضائية والتحكيمية',
    desc: 'حضور مرافع قوي ومذكرات صلبة تستند إلى دراسة فاحصة وشهادات خبرة مدعمة بأحدث السوابق القضائية.'
  }
]
</script>

<style scoped>
.corporate-hero {
  position: relative;
  padding-top: 8rem;
  padding-bottom: 5rem;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-bg-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.35);
}

.hero-overlay-dark {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(20, 30, 48, 0.95) 0%,
    rgba(28, 41, 64, 0.85) 60%,
    rgba(20, 30, 48, 0.95) 100%
  );
}

.relative { position: relative; }
.z-10 { z-index: 10; }

.page-title {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
}

.page-lead {
  max-width: 65ch;
  margin-bottom: 2rem;
}

.split-narrative {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 992px) {
  .split-narrative {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.narrative-tag {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-brown);
  display: block;
  margin-bottom: 0.5rem;
}

.narrative-title {
  color: var(--color-navy);
  margin-bottom: 0.75rem;
}

.narrative-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--color-dark-text);
  margin-bottom: 1.25rem;
}

.narrative-stat-card {
  background: var(--color-cream);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.stat-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-brown);
  background: var(--color-white);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--color-cream-border);
}

.stat-text strong {
  display: block;
  font-size: 1rem;
  color: var(--color-navy);
  margin-bottom: 0.25rem;
}

.stat-text p {
  font-size: 0.88rem;
  color: var(--color-muted-text);
  line-height: 1.6;
  margin: 0;
}

.section-center-head {
  max-width: 720px;
  margin: 0 auto 3.5rem auto;
}

.text-center { text-align: center; }
.text-white { color: var(--color-white); }
.text-silver { color: var(--color-silver); }

.sectors-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .sectors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .sectors-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.sector-card {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.sector-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.sector-icon-box {
  width: 48px;
  height: 48px;
  background: var(--color-cream);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.sector-symbol {
  font-size: 1.5rem;
}

.sector-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.65rem;
}

.sector-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--color-muted-text);
}

.corporate-entities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .corporate-entities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .corporate-entities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.entity-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 2rem;
  transition: background-color var(--transition-normal), border-color var(--transition-normal);
}

.entity-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(178, 106, 93, 0.4);
}

.entity-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: #DFC0BA;
  margin-bottom: 0.75rem;
}

.entity-name {
  font-size: 1.25rem;
  color: var(--color-white);
  margin-bottom: 0.65rem;
}

.entity-scope {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--color-silver);
}

.reasons-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 920px;
  margin: 0 auto 3.5rem auto;
}

.reason-row {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  background: var(--color-cream-light);
}

@media (max-width: 639px) {
  .reason-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

.reason-index {
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-brown);
  line-height: 1;
}

.reason-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.35rem;
}

.reason-body {
  font-size: 0.925rem;
  line-height: 1.75;
  color: var(--color-muted-text);
  margin: 0;
}

.corporate-cta-banner {
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: 3rem 2.5rem;
}

.banner-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .banner-inner {
    flex-direction: row;
    align-items: center;
  }
}

.banner-title {
  font-size: 1.45rem;
  margin-bottom: 0.5rem;
  color: var(--color-white);
}

.banner-sub {
  font-size: 0.95rem;
  color: var(--color-silver);
  margin: 0;
}
</style>
