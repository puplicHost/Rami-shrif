<template>
  <div class="page-wrapper service-page">
    <!-- Hero Header -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <div class="breadcrumb-trail">
          <router-link to="/">الرئيسية</router-link>
          <span class="sep">/</span>
          <span>خدماتنا</span>
          <span class="sep">/</span>
          <span class="current">{{ currentService.title }}</span>
        </div>
        <SectionLabel text="الخدمة القانونية المتخصصة" theme="dark" />
        <h1 class="display-title page-title">{{ currentService.title }}</h1>
        <p class="body-lead page-lead">{{ currentService.body }}</p>
      </div>
    </section>

    <!-- Main Content Grid -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="service-layout-grid">
          <!-- Primary Content Column -->
          <div class="service-main-content">
            <h2 class="h2-title section-title-dark mb-3">تفاصيل خدمة {{ currentService.title }}</h2>
            <div class="divider-brown"></div>
            <p class="body-lead text-dark mb-6 leading-relaxed">
              {{ currentService.body }}
            </p>

            <div class="service-breakdown-card">
              <h3 class="h3-title mb-4 text-navy">عناصر وأنشطة الخدمة:</h3>
              <ul class="activities-list">
                <li v-for="(activity, idx) in currentService.activities" :key="idx">
                  <span class="activity-check">✓</span>
                  <div>
                    <strong class="activity-title">{{ activity.title }}</strong>
                    <p class="activity-desc">{{ activity.desc }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Execution methodology for this service -->
            <div class="service-process-box">
              <h4 class="process-title">كيف ننفذ هذه الخدمة وفق منهجيتنا؟</h4>
              <div class="process-timeline">
                <div class="process-step" v-for="(st, sIdx) in currentService.processSteps" :key="sIdx">
                  <span class="process-badge">{{ sIdx + 1 }}</span>
                  <div class="process-text">
                    <strong>{{ st.title }}</strong>
                    <p>{{ st.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Box -->
            <div class="service-action-banner">
              <div>
                <h4 class="banner-prompt">هل ترغب في طلب خدمة {{ currentService.title }}؟</h4>
                <p class="banner-subtext">تواصل معنا اليوم لحجز موعد استشارة وتحديد نطاق العمل المطلوب.</p>
              </div>
              <router-link to="/contact" class="btn btn-primary">
                طلب الخدمة الآن
              </router-link>
            </div>
          </div>

          <!-- Sidebar Column: Other Services -->
          <aside class="service-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-heading">جميع خدماتنا</h3>
              <ul class="sidebar-nav-list">
                <li v-for="(serv, slug) in services" :key="slug">
                  <router-link
                    :to="`/services/${slug}`"
                    class="sidebar-nav-link"
                    :class="{ 'is-current': slug === currentSlug }"
                  >
                    <span>{{ serv.title }}</span>
                    <span class="sidebar-arrow">←</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="sidebar-contact-card">
              <h4 class="contact-card-title">تواصل مباشر</h4>
              <p class="contact-card-text">
                مستشارونا القانونيون مستعدون للإجابة على استفساراتكم وتحديد أنسب الخيارات.
              </p>
              <router-link to="/contact" class="btn btn-secondary-light btn-sm w-full">
                حجز موعد استشارة
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

const services = {
  consultation: {
    title: 'الاستشارات القانونية',
    body: 'دراسة موضوع الاستشارة، وتقييم الموقف القانوني، وتوضيح الخيارات والمسارات المتاحة لاتخاذ القرار الأمثل.',
    activities: [
      {
        title: 'الاستشارات الشفهية والمكتوبة',
        desc: 'تقديم رأي قانوني مسبب ومدعوم بالنصوص التشريعية والمبادئ القضائية المستقرة.'
      },
      {
        title: 'تقييم الجدوى والمخاطر',
        desc: 'بيان فرص النجاح والمخاطر المالية والسمعية المتوقعة قبل الشروع في أي معاملة أو دعوى.'
      },
      {
        title: 'استشارات العقود والصفقات',
        desc: 'إبداء الرأي الاستشاري في مسودات الاتفاقيات ومذكرات التفاهم قبل التوقيع النهائي.'
      }
    ],
    processSteps: [
      { title: 'الاطلاع على الوقائع', desc: 'جلسة استماع أولية لجمع كافة التفاصيل المحيطة بموضوع الاستشارة.' },
      { title: 'البحث والتحليل النظامي', desc: 'تكييف الحالة وفق أحدث التشريعات وأحكام محكمة النقض.' },
      { title: 'تسليم الرأي الاستشاري', desc: 'تزويد العميل بتقرير واضح يحدد المسارات والخيارات المتاحة.' }
    ]
  },
  contracts: {
    title: 'صياغة ومراجعة العقود',
    body: 'مراجعة وصياغة العقود والمستندات القانونية، مع التركيز على وضوح الحقوق والالتزامات وتحديد المخاطر القانونية والحد منها.',
    activities: [
      {
        title: 'صياغة العقود التجارية والمدنية',
        desc: 'إعداد عقود الشركات، التوزيع، التوريد، المقاولات، البيع، والإيجار بصياغة منيعة.'
      },
      {
        title: 'المراجعة والتدقيق القانوني',
        desc: 'فحص مسودات العقود الواردة من الأطراف الأخرى وتعديل البنود المجحفة لحماية مصالح العميل.'
      },
      {
        title: 'صياغة شروط التحكيم وفض النزاع',
        desc: 'إدراج بنود تحكيم وتسوية محكمة تضمن حل أي نزاع بأسرع الطرق وأقلها تكلفة.'
      }
    ],
    processSteps: [
      { title: 'تحديد أهداف الطرفين', desc: 'استيعاب المصالح التجارية والعملية التي يرغب الطرفان في تأمينها.' },
      { title: 'الصياغة الدقيقة', desc: 'كتابة نصوص لا تحتمل التأويل وتحدد التزامات كل طرف والجزاءات.' },
      { title: 'التفاوض والاعتماد', desc: 'مساعدة العميل في جولات التفاوض التعاقدي حتى الوصول للنسخة النهائية.' }
    ]
  },
  disputes: {
    title: 'إدارة المنازعات',
    body: 'دراسة النزاع وتقييم المركز القانوني، ووضع المسار القانوني المناسب ومتابعة الإجراءات المرتبطة به.',
    activities: [
      {
        title: 'التفاوض والتسوية الودية',
        desc: 'إجراء مفاوضات حاسمة مع الخصوم للوصول إلى تسويات تحفظ الحقوق وتوفر زمن التقاضي.'
      },
      {
        title: 'الوساطة والتحكيم',
        desc: 'إدارة مسارات التحكيم المؤسسي والحر، وصياغة لوائح الدعوى والدفاع التحكيمي.'
      },
      {
        title: 'إعداد استراتيجية التقاضي',
        desc: 'تحديد المحكمة المختصة وصياغة العرائض وتجهيز خطة دفاع متكاملة المراحل.'
      }
    ],
    processSteps: [
      { title: 'تحليل أوراق النزاع', desc: 'فحص ميزان القوى القانوني وأوراق الإثبات لكلا الطرفين.' },
      { title: 'محاولة الحل الودي', desc: 'استنفاد فرص الحلول الرضائية دون التنازل عن أي حق جوهري.' },
      { title: 'التحرك الإجرائي الحاسم', desc: 'اتخاذ الإجراءات التحفظية أو القضائية الفورية لحماية الحق المتنازع عليه.' }
    ]
  },
  representation: {
    title: 'التمثيل القانوني',
    body: 'تمثيل العملاء أمام المحاكم والجهات المختصة وفق طبيعة القضية والإجراءات القانونية المطلوبة.',
    activities: [
      {
        title: 'المرافعة أمام المحاكم',
        desc: 'حضور الجلسات والمرافعة الشفهية وتقديم المذكرات الختامية أمام كافة درجات التقاضي.'
      },
      {
        title: 'التمثيل أمام اللجان شبه القضائية',
        desc: 'تمثيل العملاء أمام لجان الضرائب، لجان العمل، لجان فض المنازعات، وهيئات التحكيم.'
      },
      {
        title: 'تنفيذ الأحكام القضائية',
        desc: 'استخراج الصيغ التنفيذية ومتابعة إجراءات التنفيذ الجبري والحجز حتى استيداء كامل الحق.'
      }
    ],
    processSteps: [
      { title: 'قيد الدعوى واستيفاء الإجراءات', desc: 'إيداع صحف الدعاوى وإعلان الخصوم طبقاً لأحكام قانون المرافعات.' },
      { title: 'المرافعة وإدارة الجلسات', desc: 'المتابعة المباشرة لكل جلسة وتقديم المستندات في مواعيدها المحددة.' },
      { title: 'التنفيذ وإحاطة العميل', desc: 'إرسال تقرير فوري للعميل بحكم المحكمة ومباشرة إجراءات التنفيذ الفعلي.' }
    ]
  },
  'corporate-support': {
    title: 'الدعم القانوني للشركات',
    body: 'تقديم الدعم القانوني للشركات والمؤسسات في العقود والمعاملات والالتزامات القانونية والمنازعات.',
    activities: [
      {
        title: 'عقود الاستشارة السنوية',
        desc: 'توفير مستشار قانوني مخصص لتقديم المشورة اليومية لكافة إدارات الشركة.'
      },
      {
        title: 'مراجعة المعاملات والسياسات الداخلية',
        desc: 'إعداد لوائح تنظيم العمل الداخلية وضمان امتثالها لقانون العمل والتأمينات الاجتماعية.'
      },
      {
        title: 'حماية الملكية الفكرية والعلامات التجارية',
        desc: 'تسجيل العلامات التجارية وحمايتها من التقليد والمنافسة غير المشروعة.'
      }
    ],
    processSteps: [
      { title: 'الفحص الميداني للشركة', desc: 'التعرف على طبيعة النشاط والبيئة التشغيلية ونماذج العقود المعمول بها.' },
      { title: 'تصحيح وتحديث المستندات', desc: 'إعادة صياغة النماذج التعاقدية وسد الثغرات القانونية المكتشفة.' },
      { title: 'المرافقة اليومية والدفاع المستمر', desc: 'استجابة سريعة لكافة المستجدات والتمثيل في أي مواقف طارئة.' }
    ]
  }
}

const currentSlug = computed(() => route.params.slug || 'consultation')
const currentService = computed(() => {
  return services[currentSlug.value] || services.consultation
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

.service-layout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
}

@media (min-width: 992px) {
  .service-layout-grid {
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

.service-breakdown-card {
  margin-bottom: 2.5rem;
}

.activities-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.activities-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-cream-light);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-sm);
}

.activity-check {
  color: var(--color-brown);
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 2px;
}

.activity-title {
  display: block;
  font-size: 1.05rem;
  color: var(--color-navy);
  margin-bottom: 0.35rem;
}

.activity-desc {
  font-size: 0.92rem;
  color: var(--color-muted-text);
  line-height: 1.7;
  margin: 0;
}

.service-process-box {
  background: var(--color-cream);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  margin-bottom: 2.5rem;
}

.process-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 1.5rem;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.process-badge {
  width: 32px;
  height: 32px;
  background-color: var(--color-brown);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.process-text strong {
  display: block;
  color: var(--color-navy);
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
}

.process-text p {
  font-size: 0.9rem;
  color: var(--color-muted-text);
  line-height: 1.6;
  margin: 0;
}

.service-action-banner {
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
  .service-action-banner {
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
.service-sidebar {
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
