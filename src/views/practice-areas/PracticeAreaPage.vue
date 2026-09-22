<template>
  <div class="page-wrapper practice-area-page">
    <!-- Hero Header -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <div class="breadcrumb-trail">
          <router-link to="/">الرئيسية</router-link>
          <span class="sep">/</span>
          <span>مجالات العمل</span>
          <span class="sep">/</span>
          <span class="current">{{ currentArea.title }}</span>
        </div>
        <SectionLabel text="مجال التخصص القانوني" theme="dark" />
        <h1 class="display-title page-title">{{ currentArea.title }}</h1>
        <p class="body-lead page-lead">{{ currentArea.headline }}</p>
      </div>
    </section>

    <!-- Main Content Grid -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="area-layout-grid">
          <!-- Primary Content Column -->
          <div class="area-main-content">
            <h2 class="h2-title section-title-dark mb-3">{{ currentArea.headline }}</h2>
            <div class="divider-brown"></div>
            <p class="body-lead text-dark mb-6 leading-relaxed">
              {{ currentArea.body }}
            </p>

            <div class="area-details-block">
              <h3 class="h3-title mb-4 text-navy">نطاق التغطية والخدمات في هذا المجال</h3>
              <ul class="coverage-list">
                <li v-for="(item, idx) in currentArea.coverage" :key="idx">
                  <span class="coverage-bullet">✓</span>
                  <div>
                    <strong class="coverage-item-title">{{ item.title }}</strong>
                    <p class="coverage-item-desc">{{ item.desc }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Approach box -->
            <div class="area-approach-box">
              <h4 class="approach-title">نهجنا في معالجة قضايا {{ currentArea.title }}</h4>
              <p class="approach-text">
                {{ currentArea.approach }}
              </p>
            </div>

            <!-- Action Box -->
            <div class="area-action-banner">
              <div>
                <h4 class="banner-prompt">هل لديك استفسار أو قضية متعلقة بـ {{ currentArea.title }}؟</h4>
                <p class="banner-subtext">تواصل معنا لمناقشة التفاصيل وتحديد المركز القانوني والخيارات المتاحة.</p>
              </div>
              <router-link to="/contact" class="btn btn-primary">
                احجز استشارة متخصصة
              </router-link>
            </div>
          </div>

          <!-- Sidebar Column: Other Practice Areas -->
          <aside class="area-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-heading">كافة مجالات العمل</h3>
              <ul class="sidebar-nav-list">
                <li v-for="(area, slug) in practiceAreas" :key="slug">
                  <router-link
                    :to="`/practice-areas/${slug}`"
                    class="sidebar-nav-link"
                    :class="{ 'is-current': slug === currentSlug }"
                  >
                    <span>{{ area.title }}</span>
                    <span class="sidebar-arrow">←</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="sidebar-contact-card">
              <h4 class="contact-card-title">استشارة سريعة</h4>
              <p class="contact-card-text">
                فريقنا متاح لدراسة ملفاتك وتقديم التقييم الأنسب.
              </p>
              <router-link to="/contact" class="btn btn-secondary-light btn-sm w-full">
                تواصل مع مستشار
              </router-link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SectionLabel from '@/components/ui/SectionLabel.vue'

const route = useRoute()

const practiceAreas = {
  civil: {
    title: 'القانون المدني',
    headline: 'المنازعات والحقوق المدنية',
    body: 'التعامل مع المنازعات والموضوعات المدنية، ودراسة الحقوق والالتزامات والمراكز القانونية للأطراف وفق طبيعة كل نزاع.',
    coverage: [
      {
        title: 'دعاوى العقود والالتزامات المدنية',
        desc: 'دراسة الإخلال بالبنود العقدية، المطالبة بالفسخ أو التنفيذ العيني، وتقدير التعويضات الجابرة للضرر.'
      },
      {
        title: 'المنازعات العقارية والملكية',
        desc: 'قضايا تثبيت الملكية، صحة ونفاذ عقود البيع، دعاوى الفرز والتجنيب، والتعامل مع نزاعات الإيجارات.'
      },
      {
        title: 'المسؤولية المدنية والتعويضات',
        desc: 'المطالبة بالتعويضات عن الأضرار المادية والمعنوية الناشئة عن الأفعال الضارة أو التقصيرية.'
      }
    ],
    approach: 'نبدأ بالتدقيق في السندات والعقود المبرمة، وقياس سلامتها الشكلية والموضوعية، مع استكشاف إمكانيات التسوية الرضائية قبل الولوج في إجراءات التقاضي.'
  },
  commercial: {
    title: 'القانون التجاري',
    headline: 'الدعم القانوني في المعاملات التجارية',
    body: 'تقديم الدعم القانوني في المنازعات والمعاملات التجارية، ودراسة المراكز القانونية والالتزامات المرتبطة بالنشاط التجاري.',
    coverage: [
      {
        title: 'الأوراق التجارية والمصرفية',
        desc: 'منازعات الشيكات، الكمبيالات، السندات الإذنية، والاعتمادات المستندية المصرفية.'
      },
      {
        title: 'الوكالات التجارية والامتياز (Franchise)',
        desc: 'صياغة ومراجعة عقود التوزيع الحصري، تنظيم حقوق الوكلاء، وفض منازعات إنهاء الوكالة.'
      },
      {
        title: 'التحكيم التجاري وتسوية النزاعات',
        desc: 'تمثيل الأطراف في إجراءات التحكيم المحلي والدولي وصياغة مشارطات التحكيم.'
      }
    ],
    approach: 'نضع سرعة دوران رأس المال وحماية سمعة التاجر في مقدمة أولوياتنا، ونعتمد حلولاً تحافظ على العلاقات التجارية واستقرار العمليات.'
  },
  'corporate-law': {
    title: 'قانون الشركات',
    headline: 'الخدمات القانونية للشركات',
    body: 'تقديم الخدمات القانونية المرتبطة بالشركات ومعاملاتها، ومراجعة وصياغة العقود والمستندات، ودراسة المراكز القانونية والتعامل مع النزاعات.',
    coverage: [
      {
        title: 'تأسيس وهيكلة الشركات',
        desc: 'اختيار الشكل القانوني الأمثل، صياغة عقود التأسيس والأنظمة الأساسية، واستخراج التراخيص اللازمة.'
      },
      {
        title: 'حوكمة الشركات وقرارات الإدارة',
        desc: 'تنظيم اجتماعات الجمعيات العامة العادية وغير العادية ومجالس الإدارة وتوثيق قراراتها رسمياً.'
      },
      {
        title: 'عمليات الاندماج والاستحواذ وتصفية الشركات',
        desc: 'إجراء الفحص النافي للجهالة قانونياً، صياغة اتفاقيات نقل الملكية، وإجراءات التصفية النظامية.'
      }
    ],
    approach: 'نعمل كذراع قانوني استراتيجي للإدارة، نرافق الشركة في مراحل نموها وتوسعها ونوفر لها الحماية التعاقدية الشاملة.'
  },
  'personal-status': {
    title: 'الأحوال الشخصية',
    headline: 'مسائل الأحوال الشخصية',
    body: 'تقديم الخدمات القانونية في مسائل الأحوال الشخصية، من خلال دراسة الوقائع والمستندات وتقييم الموقف القانوني وفق ظروف كل حالة.',
    coverage: [
      {
        title: 'التركات وتوزيع المواريث',
        desc: 'إعلام الوراثة، توثيق وحصر التركات، صياغة اتفاقات القسمة الرضائية، ودعاوى قسمة التركات الجبرية.'
      },
      {
        title: 'النفقات والحضانة والرؤية',
        desc: 'الدعاوى المتعلقة بنفقات الزوجية والأولاد، وتحديد حقوق الحضانة وأماكن استضافتهم ورعايتهم.'
      },
      {
        title: 'دعاوى إنهاء العلاقة الزوجية',
        desc: 'الطلاق للضرر، الخلع، والإبراء، مع الحفاظ على الكرامة وسرية الأسرار الأسرية.'
      }
    ],
    approach: 'نتعامل مع قضايا الأحوال الشخصية بحكمة وحرص بالغ على حفظ الروابط الأسرية وحماية مصالح الأطفال، مع الالتزام التام بأعلى معايير الخصوصية.'
  },
  'financial-disputes': {
    title: 'المنازعات المالية',
    headline: 'دراسة المنازعات ذات الطابع المالي',
    body: 'دراسة المنازعات ذات الطابع المالي، وتحليل المستندات والالتزامات والمراكز القانونية للأطراف، وتحديد المسار القانوني المناسب.',
    coverage: [
      {
        title: 'تحصيل الديون والمطالبات المالية المتعثرة',
        desc: 'اتخاذ الإجراءات التحفظية والتنفيذية لضمان استرداد أموال الدائنين وحجز ما للمدين لدى الغير.'
      },
      {
        title: 'منازعات عقود التمويل والتأجير التمويلي',
        desc: 'تسوية الخلافات الناشئة عن جداول السداد، غرامات التأخير، وفسخ العقود التمويلية.'
      },
      {
        title: 'إعادة الهيكلة المالية والجدولة',
        desc: 'التفاوض مع البنوك والمؤسسات المالية لإعادة جدولة الالتزامات بما يضمن استمرارية النشاط.'
      }
    ],
    approach: 'نقوم بتحليل الجدوى الاقتصادية لكل إجراء قبل اتخاذه، بهدف استرداد الحقوق المالية بأعلى عائد وأقل تكلفة قضائية ممكنة.'
  }
}

const currentSlug = computed(() => route.params.slug || 'civil')
const currentArea = computed(() => {
  return practiceAreas[currentSlug.value] || practiceAreas.civil
})
</script>

<style scoped>
.page-hero {
  padding-top: 7.5rem;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.page-hero-container {
  max-width: 900px;
}

.breadcrumb-trail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-silver);
  margin-bottom: 1rem;
}

.breadcrumb-trail a:hover {
  color: var(--color-white);
}

.sep {
  opacity: 0.5;
}

.current {
  color: #DFC0BA;
  font-weight: 600;
}

.page-title {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
}

.page-lead {
  max-width: 65ch;
}

.area-layout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
}

@media (min-width: 992px) {
  .area-layout-grid {
    grid-template-columns: 1fr 320px;
    gap: 4rem;
  }
}

.text-dark {
  color: var(--color-dark-text);
}

.text-navy {
  color: var(--color-navy);
}

.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.leading-relaxed { line-height: 1.9; }

.area-details-block {
  margin-bottom: 2.5rem;
}

.coverage-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.coverage-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-cream-light);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-sm);
}

.coverage-bullet {
  color: var(--color-brown);
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 2px;
}

.coverage-item-title {
  display: block;
  font-size: 1.05rem;
  color: var(--color-navy);
  margin-bottom: 0.35rem;
}

.coverage-item-desc {
  font-size: 0.92rem;
  color: var(--color-muted-text);
  line-height: 1.7;
  margin: 0;
}

.area-approach-box {
  background: var(--color-cream);
  border-right: 4px solid var(--color-brown);
  padding: 1.75rem;
  border-radius: var(--radius-sm);
  margin-bottom: 2.5rem;
}

.approach-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 0.65rem;
}

.approach-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-dark-text);
  margin: 0;
}

.area-action-banner {
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .area-action-banner {
    flex-direction: row;
    align-items: center;
  }
}

.banner-prompt {
  font-size: 1.25rem;
  color: var(--color-white);
  margin-bottom: 0.35rem;
}

.banner-subtext {
  font-size: 0.9rem;
  color: var(--color-silver);
  margin: 0;
}

/* Sidebar */
.area-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-card {
  background: var(--color-cream);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
}

.sidebar-heading {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(28, 41, 64, 0.08);
}

.sidebar-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sidebar-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.85rem;
  font-size: 0.92rem;
  color: var(--color-navy);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.sidebar-nav-link:hover,
.sidebar-nav-link.is-current {
  background: var(--color-white);
  color: var(--color-brown);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
}

.sidebar-arrow {
  font-size: 0.9rem;
  transition: transform var(--transition-fast);
}

.sidebar-nav-link:hover .sidebar-arrow {
  transform: translateX(-4px);
}

.sidebar-contact-card {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  text-align: center;
}

.contact-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 0.5rem;
}

.contact-card-text {
  font-size: 0.88rem;
  color: var(--color-muted-text);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.w-full { width: 100%; }
</style>
