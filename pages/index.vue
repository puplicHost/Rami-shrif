<template>
  <div class="home-page">
    <!-- 2. Hero Section -->
    <section class="hero-section" aria-label="مقدمة المؤسسة">
      <div class="hero-background-media">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="مكتبة قانونية وقضايا"
          class="hero-bg-img"
          loading="eager"
        />
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-container">
        <div class="hero-content">
          <SectionLabel text="مؤسسة رامي شريف للمحاماة" theme="dark" />
          
          <h1 class="display-title hero-title">
            <span class="hero-line">نفهم الملف…</span>
            <span class="hero-line">نُقيّم الموقف…</span>
            <span class="hero-line hero-line-accent">ونختار المسار القانوني الأنسب.</span>
          </h1>

          <p class="body-lead hero-description">
            مؤسسة قانونية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات والمؤسسات.
          </p>

          <div class="hero-cta-group">
            <NuxtLink to="/contact" class="btn btn-primary">
              احجز استشارة قانونية
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/methodology" class="btn btn-secondary">
              تعرّف على منهجنا
            </NuxtLink>
          </div>
        </div>

        <div class="hero-graphic" aria-hidden="true">
          <div class="architectural-monogram">
            <div class="monogram-pillar"></div>
            <div class="monogram-glow"></div>
          </div>
        </div>
      </div>

      <a href="#about" class="scroll-indicator" aria-label="انتقل إلى قسم من نحن">
        <span class="scroll-mouse">
          <span class="scroll-dot"></span>
        </span>
      </a>
    </section>

    <!-- 2. About Section — من نحن -->
    <section id="about" class="about-section fade-in-section" aria-label="من نحن">
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
              <span class="badge-dash"></span>
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

    <!-- 3. فلسفتنا — Philosophy Strip -->
    <section id="philosophy" class="section section-tight bg-cream philosophy-section fade-in-section">
      <div class="container philosophy-container">
        <div class="philosophy-card">
          <h2 class="h1-title philosophy-quote philosophy-headline">
            «الإجراء القانوني ليس نقطة البداية.»
          </h2>
          <div class="divider-brown divider-center"></div>
          <p class="body-regular philosophy-subtext">
            البداية الصحيحة هي فهم المشكلة، وتقييم الموقف القانوني، وتحديد الخيارات المتاحة، ثم اختيار المسار الأنسب.
          </p>

          <!-- Horizontal Process Flow -->
          <div class="philosophy-flow" aria-label="تسلسل مراحل العمل">
            <div class="flow-item">
              <span class="flow-word">فهم</span>
            </div>
            <div class="flow-arrow" aria-hidden="true">←</div>
            <div class="flow-item">
              <span class="flow-word">تقييم</span>
            </div>
            <div class="flow-arrow" aria-hidden="true">←</div>
            <div class="flow-item">
              <span class="flow-word">خيارات</span>
            </div>
            <div class="flow-arrow" aria-hidden="true">←</div>
            <div class="flow-item">
              <span class="flow-word">اختيار</span>
            </div>
            <div class="flow-arrow" aria-hidden="true">←</div>
            <div class="flow-item">
              <span class="flow-word">متابعة</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. منهجنا في العمل — The 6 Steps (Visual Centerpiece) -->
    <section class="section bg-navy-dark steps-section fade-in-section" aria-label="منهجنا في العمل">
      <div class="container">
        <div class="section-header-center">
          <SectionLabel text="منهجنا في العمل" theme="dark" align="center" />
          <h2 class="h1-title section-title-white">نبدأ بالفهم… قبل الإجراء</h2>
          <p class="section-intro-text">
            نتعامل مع كل ملف باعتباره حالة قانونية مستقلة تستلزم دراسة متأنية وخطوات دقيقة.
          </p>
        </div>

        <!-- The 6 Steps Grid / Timeline -->
        <div class="steps-grid">
          <StepItem
            v-for="(step, index) in steps"
            :key="step.number"
            :number="step.number"
            :title="step.title"
            :description="step.description"
            :is-last="index === steps.length - 1"
          />
        </div>

        <div class="steps-action-wrap">
          <NuxtLink to="/methodology" class="btn btn-secondary">
            تعرف على منهجنا بالتفصيل
            <span aria-hidden="true">←</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 5. مجالات العمل — Practice Areas -->
    <section class="section bg-white practice-section fade-in-section" aria-label="مجالات العمل">
      <div class="container">
        <div class="section-header-split">
          <div>
            <SectionLabel text="مجالات العمل" theme="light" />
            <h2 class="h1-title section-title-dark">تغطية قانونية متخصصة وشاملة</h2>
          </div>
          <p class="section-header-desc">
            تغطي خدماتنا مختلف فروع القانون لتقديم حلول متوازنة تصون حقوق عملائنا وتحد من المخاطر.
          </p>
        </div>

        <div class="practice-cards-grid">
          <PracticeCard
            v-for="(area, index) in practiceAreas"
            :key="area.slug"
            :title="area.title"
            :slug="area.slug"
            :description="area.shortDesc"
            :is-full-width-mobile="index === practiceAreas.length - 1"
          >
            <template #icon>
              <!-- Lucide Icons for Practice Areas -->
              <Scale v-if="area.slug === 'civil'" :size="26" :stroke-width="1.5" />
              <Briefcase v-else-if="area.slug === 'commercial'" :size="26" :stroke-width="1.5" />
              <Building2 v-else-if="area.slug === 'corporate-law'" :size="26" :stroke-width="1.5" />
              <Users v-else-if="area.slug === 'personal-status'" :size="26" :stroke-width="1.5" />
              <DollarSign v-else :size="26" :stroke-width="1.5" />
            </template>
          </PracticeCard>
        </div>
      </div>
    </section>

    <!-- 6. خدماتنا القانونية — Services -->
    <section class="section bg-cream services-section fade-in-section" aria-label="خدماتنا القانونية">
      <div class="container">
        <div class="section-header-center">
          <SectionLabel text="خدماتنا القانونية" theme="light" align="center" />
          <h2 class="h1-title section-title-dark">حلول عملية تسبق النزاع وتديره</h2>
          <p class="section-intro-text text-dark-muted">
            من الاستشارة المبدئية إلى التمثيل وصياغة العقود، نوفر رعاية شاملة لكل ملف.
          </p>
        </div>

        <div class="services-wrapper">
          <ServiceCard
            v-for="(service, index) in servicesList"
            :key="service.slug"
            :title="service.title"
            :slug="service.slug"
            :summary="service.summary"
            :index-number="`0${index + 1}`"
            :is-open="activeAccordion === index"
            @toggle="toggleAccordion(index)"
          />
        </div>
      </div>
    </section>

    <!-- 7. للشركات والمؤسسات — Corporate Teaser -->
    <section class="corporate-teaser-section fade-in-section" aria-label="خدمات الشركات والمؤسسات">
      <div class="corporate-bg-wrap">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
          alt="اجتماع أعمال واستشارات للشركات"
          class="corporate-bg-img"
          loading="lazy"
        />
        <div class="corporate-overlay"></div>
      </div>

      <div class="container corporate-container">
        <div class="corporate-content-box">
          <SectionLabel text="للشركات والمؤسسات" theme="dark" />
          <h2 class="h1-title corporate-title">خبرة تتجاوز النص القانوني</h2>
          <p class="body-lead corporate-text">
            العمل القانوني مع الشركات لا يتطلب المعرفة القانونية فحسب، بل يستلزم فهم طبيعة النشاط والتحديات المرتبطة به.
          </p>
          <div class="corporate-cta-wrap">
            <NuxtLink to="/corporate" class="btn btn-primary">
              اكتشف كيف ندعم الشركات
              <span aria-hidden="true">←</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. للأفراد — Individuals Teaser -->
    <section class="section bg-cream individuals-teaser-section fade-in-section" aria-label="خدمات الأفراد">
      <div class="container individuals-split-container">
        <div class="individuals-text-col">
          <SectionLabel text="للأفراد" theme="light" />
          <h2 class="h1-title section-title-dark">كل ملف له خصوصيته</h2>
          <p class="body-lead text-dark-muted individuals-body">
            نقدم للأفراد خدمات المحاماة والاستشارات القانونية من خلال دراسة الحالة وتقييم الموقف القانوني بدقة تحفظ السرية وتصون الحقوق.
          </p>
          <div class="individuals-action">
            <NuxtLink to="/individuals" class="btn btn-primary">
              تحدث معنا حول ملفك
              <span aria-hidden="true">←</span>
            </NuxtLink>
          </div>
        </div>

        <div class="individuals-visual-col" aria-hidden="true">
          <div class="quiet-visual-card">
            <div class="quiet-accent-bar"></div>
            <p class="quiet-quote">
              «الخصوصية والاهتمام المباشر هما أساس بناء الثقة بين المحامي وموكله.»
            </p>
            <div class="quiet-badge">
              <span>سرية تامة</span>
              <span class="badge-dot">•</span>
              <span>تقييم موضوعي</span>
              <span class="badge-dot">•</span>
              <span>تواصل مباشر</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Final CTA Section -->
    <section class="section final-cta-section bg-navy-dark fade-in-section" aria-label="دعوة للتواصل">
      <div class="container final-cta-container">
        <div class="final-cta-content">
          <h2 class="display-title final-cta-title">
            لديك ملف قانوني؟<br />
            <span>ابدأ بفهم موقفك.</span>
          </h2>
          <p class="body-lead final-cta-subtext">
            تواصل مع مؤسسة رامي شريف للمحاماة لمناقشة ملفك وتقييم الموقف القانوني وتحديد الخيارات المتاحة.
          </p>
          <div class="final-cta-buttons">
            <NuxtLink to="/contact" class="btn btn-primary">
              احجز استشارة قانونية
            </NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">
              تواصل معنا
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Scale,
  Briefcase,
  Building2,
  Users,
  DollarSign
} from 'lucide-vue-next'

useHead({
  title: 'الرئيسية | مؤسسة رامي شريف للمحاماة'
})

// 4. The 6 Steps
const steps = [
  {
    number: '01',
    title: 'دراسة الوقائع',
    description: 'فهم تفاصيل الموضوع والظروف المحيطة به بعمق وتحليل شامل.'
  },
  {
    number: '02',
    title: 'مراجعة المستندات',
    description: 'فحص وتحليل المستندات والبيانات ذات الصلة وتقييم حجيتها القانونية.'
  },
  {
    number: '03',
    title: 'تقييم الموقف القانوني',
    description: 'تحديد المركز القانوني ونقاط القوة والتحديات والمخاطر المحتملة.'
  },
  {
    number: '04',
    title: 'تحديد الخيارات',
    description: 'دراسة المسارات القانونية الممكنة والبدائل المتاحة لتفادي الهدر.'
  },
  {
    number: '05',
    title: 'اختيار المسار الأنسب',
    description: 'اختيار الحل الأكثر ملاءمة وفق وقائع الملف وأهداف العميل الحقيقية.'
  },
  {
    number: '06',
    title: 'المتابعة والتنفيذ',
    description: 'متابعة الإجراءات بدقة دورية وإطلاع العميل المستمر على التطورات.'
  }
]

// 5. Practice Areas
const practiceAreas = [
  {
    slug: 'civil',
    title: 'القانون المدني',
    shortDesc: 'التعامل مع المنازعات والموضوعات المدنية، ودراسة الحقوق والالتزامات والمراكز القانونية للأطراف وفق طبيعة كل نزاع.'
  },
  {
    slug: 'commercial',
    title: 'القانون التجاري',
    shortDesc: 'تقديم الدعم القانوني في المنازعات والمعاملات التجارية، ودراسة المراكز القانونية والالتزامات المرتبطة بالنشاط التجاري.'
  },
  {
    slug: 'corporate-law',
    title: 'قانون الشركات',
    shortDesc: 'تقديم الخدمات القانونية المرتبطة بالشركات ومعاملاتها، ومراجعة وصياغة العقود والمستندات، والتعامل مع النزاعات.'
  },
  {
    slug: 'personal-status',
    title: 'الأحوال الشخصية',
    shortDesc: 'تقديم الخدمات القانونية في مسائل الأحوال الشخصية، من خلال دراسة الوقائع والمستندات وتقييم الموقف القانوني.'
  },
  {
    slug: 'financial-disputes',
    title: 'المنازعات المالية',
    shortDesc: 'دراسة المنازعات ذات الطابع المالي، وتحليل المستندات والالتزامات والمراكز القانونية، وتحديد المسار القانوني المناسب.'
  }
]

// 6. Services List
const servicesList = [
  {
    slug: 'consultation',
    title: 'الاستشارات القانونية',
    summary: 'دراسة موضوع الاستشارة، وتقييم الموقف القانوني، وتوضيح الخيارات والمسارات المتاحة لاتخاذ القرار الأمثل.'
  },
  {
    slug: 'contracts',
    title: 'صياغة ومراجعة العقود',
    summary: 'مراجعة وصياغة العقود والمستندات القانونية، مع التركيز على وضوح الحقوق والالتزامات وتحديد المخاطر القانونية والحد منها.'
  },
  {
    slug: 'disputes',
    title: 'إدارة المنازعات',
    summary: 'دراسة النزاع وتقييم المركز القانوني، ووضع المسار القانوني المناسب ومتابعة الإجراءات المرتبطة به بحزم.'
  },
  {
    slug: 'representation',
    title: 'التمثيل القانوني',
    summary: 'تمثيل العملاء أمام المحاكم والجهات المختصة وفق طبيعة القضية والإجراءات القانونية المعتمدة.'
  },
  {
    slug: 'corporate-support',
    title: 'الدعم القانوني للشركات',
    summary: 'تقديم الدعم القانوني للشركات والمؤسسات في العقود والمعاملات والالتزامات القانونية والمنازعات التشغيلية.'
  }
]

// Accordion on mobile
const activeAccordion = ref(0)
const toggleAccordion = (index) => {
  activeAccordion.value = activeAccordion.value === index ? -1 : index
}
</script>

<style scoped>
/* 2. Hero Section */
.hero-section {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 5.5rem;
  padding-bottom: 4rem;
  overflow: hidden;
  background-color: var(--color-navy);
  background-size: cover;
  background-position: center center;
  background-attachment: scroll; /* مش fixed على الموبايل */
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100svh;
    background-position: center center;
  }
}

.hero-background-media {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.65) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(20, 30, 48, 0.94) 0%,
    rgba(28, 41, 64, 0.88) 55%,
    rgba(20, 30, 48, 0.95) 100%
  );
}

.hero-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1.35fr 0.65fr;
    gap: 4rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
}

@media (max-width: 767px) {
  .hero-content {
    align-items: center;
    text-align: center;
  }
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
}

.hero-line {
  display: block;
}

.hero-line-accent {
  color: #DFC0BA;
  font-weight: 700;
}

.hero-description {
  max-width: 58ch;
  margin-bottom: 2.25rem;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 767px) {
  .hero-cta-group {
    justify-content: center;
    width: 100%;
  }
}

.hero-graphic {
  display: none;
}

@media (min-width: 1024px) {
  .hero-graphic {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.architectural-monogram {
  position: relative;
  width: 200px;
  height: 280px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(90, 52, 45, 0.25) 0%, transparent 75%);
}

.monogram-pillar {
  width: 80px;
  height: 180px;
  border-right: 2px solid rgba(255, 255, 255, 0.25);
  border-left: 2px solid rgba(255, 255, 255, 0.25);
  position: relative;
}

.monogram-pillar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 6px;
  background-color: var(--color-brown);
  border-radius: 2px;
}

.monogram-pillar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -12px;
  right: -12px;
  height: 8px;
  background-color: var(--color-brown);
  border-radius: 2px;
}

.scroll-indicator {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-mouse {
  display: block;
  width: 22px;
  height: 36px;
  border: 2px solid var(--color-silver);
  border-radius: 12px;
  position: relative;
}

.scroll-dot {
  display: block;
  width: 4px;
  height: 6px;
  background-color: var(--color-silver);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollDown 1.8s infinite;
}

@keyframes scrollDown {
  0% { transform: translate(-50%, 0); opacity: 1; }
  80% { transform: translate(-50%, 12px); opacity: 0; }
  100% { transform: translate(-50%, 0); opacity: 0; }
}

/* 2. About Section — من نحن */
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
  align-items: center;
  text-align: center;
  max-width: 580px;
}

.about-badge-line {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 14px;
}

.badge-dash {
  width: 32px;
  height: 1.5px;
  background-color: #8C584E;
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
  align-items: center;
  gap: 2px;
}

.about-description {
  font-family: var(--font-body);
  font-size: clamp(0.92rem, 1.2vw, 1.05rem);
  font-weight: 500;
  line-height: 1.9;
  color: #1C2940;
  margin: 0;
  text-align: center;
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

  .about-badge-line {
    gap: 8px;
    margin-bottom: 8px;
  }

  .badge-dash {
    width: 18px;
  }

  .badge-title {
    font-size: 0.82rem;
  }

  .about-main-title {
    font-size: clamp(1.15rem, 4.2vw, 1.55rem);
    margin-bottom: 10px;
    gap: 0;
  }

  .about-description {
    font-size: clamp(0.72rem, 2.4vw, 0.85rem);
    line-height: 1.68;
  }

  .hidden-xs {
    display: none;
  }
}

/* 3. Philosophy Section */
.philosophy-section {
  text-align: center;
  border-bottom: 1px solid var(--color-cream-border);
}

.philosophy-container {
  max-width: 860px;
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--color-cream-border);
  border-radius: 16px;
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-sm);
}

.philosophy-quote {
  color: var(--color-navy);
  font-size: clamp(1.6rem, 3.2vw, 2.35rem);
  font-weight: 700;
  line-height: 1.4;
}

.philosophy-subtext {
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--color-muted-text);
  margin-bottom: 2.5rem;
}

.philosophy-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-pill);
}

@media (max-width: 768px) {
  .philosophy-section {
    padding: 60px 24px;
  }

  .philosophy-card {
    padding: 40px 28px;
    border-radius: 16px;
  }

  .philosophy-headline {
    font-size: 22px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .philosophy-flow {
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    font-size: 14px;
  }
}

.flow-item {
  display: flex;
  align-items: center;
}

.flow-word {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-navy);
}

.flow-arrow {
  color: var(--color-brown);
  font-size: 1rem;
  font-weight: bold;
}

/* 4. Steps Section */
.steps-section {
  position: relative;
}

.section-header-center {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
}

.section-title-white {
  color: var(--color-white);
  margin-bottom: 0.85rem;
}

.section-intro-text {
  font-size: 1.05rem;
  color: var(--color-silver);
  line-height: 1.8;
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.steps-action-wrap {
  text-align: center;
  margin-top: 3.5rem;
}

/* 5. Practice Areas */
.section-header-split {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .section-header-split {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.section-title-dark {
  color: var(--color-navy);
  margin-top: 0.25rem;
}

.section-header-desc {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-muted-text);
  max-width: 48ch;
}

.practice-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (min-width: 1024px) {
  .practice-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
}

@media (max-width: 639px) {
  .practice-cards-grid {
    grid-template-columns: 1fr;
  }
}

/* 6. Services */
.services-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .services-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .services-wrapper {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
}

.text-dark-muted {
  color: var(--color-muted-text);
}

/* 7. Corporate Teaser */
.corporate-teaser-section {
  position: relative;
  padding: clamp(5rem, 10vw, 7.5rem) 0;
  overflow: hidden;
  background-color: var(--color-navy);
}

.corporate-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.corporate-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4) contrast(1.1);
}

.corporate-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(20, 30, 48, 0.94) 0%,
    rgba(28, 41, 64, 0.85) 60%,
    rgba(20, 30, 48, 0.92) 100%
  );
}

.corporate-container {
  position: relative;
  z-index: 2;
}

.corporate-content-box {
  max-width: 620px;
}

.corporate-title {
  color: var(--color-white);
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
}

.corporate-text {
  margin-bottom: 2.25rem;
}

/* 8. Individuals Teaser */
.individuals-split-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .individuals-split-container {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3.5rem;
  }
}

.individuals-body {
  margin-top: 0.75rem;
  margin-bottom: 2rem;
}

.quiet-visual-card {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.quiet-accent-bar {
  width: 36px;
  height: 3px;
  background-color: var(--color-brown);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.quiet-quote {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.7;
  color: var(--color-navy);
  margin-bottom: 1.5rem;
}

.quiet-badge {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.825rem;
  color: var(--color-brown);
  font-weight: 600;
}

.badge-dot {
  color: var(--color-silver);
}

/* 9. Final CTA */
.final-cta-section {
  padding: clamp(5rem, 8vw, 7rem) 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.final-cta-content {
  max-width: 720px;
  margin: 0 auto;
}

.final-cta-title {
  margin-bottom: 1.25rem;
}

.final-cta-title span {
  color: #DFC0BA;
}

.final-cta-subtext {
  margin-bottom: 2.5rem;
}

.final-cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
