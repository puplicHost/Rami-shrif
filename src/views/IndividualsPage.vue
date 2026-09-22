<template>
  <div class="page-wrapper individuals-page">
    <!-- Page Hero -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <SectionLabel text="قطاع الأفراد" theme="dark" />
        <h1 class="display-title page-title">كل ملف له خصوصيته</h1>
        <p class="body-lead page-lead">
          نقدم للأفراد خدمات المحاماة والاستشارات القانونية من خلال دراسة الحالة وتقييم الموقف القانوني باهتمام مباشر يحفظ كرامة الموكل وسرية شؤونه.
        </p>
      </div>
    </section>

    <!-- Narrative Section: الاهتمام والخصوصية -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="narrative-split">
          <div class="narrative-text-box">
            <span class="narrative-tag">الرعاية القانونية الفردية</span>
            <h2 class="h1-title narrative-title">قضيتك ليست مجرد رقم في جدول</h2>
            <div class="divider-brown"></div>
            <p class="body-regular narrative-desc">
              ندرك في مؤسسة رامي شريف أن النزاعات القانونية التي يخوضها الأفراد، سواء ارتبطت بأسرتهم أو أموالهم أو ممتلكاتهم العقارية، تنطوي دائماً على بعد إنساني ونفسي بالغ الحساسية.
            </p>
            <p class="body-regular narrative-desc">
              لذلك، لا نتعامل مع قضايا الأفراد بنمط روتيني أو تقليدي، بل نخصص لكل ملف وقتاً كافياً للاستماع الدقيق وفهم الأبعاد العميقة للمشكلة، وتقديم المشورة الصادقة التي تحفظ الحقوق وتجنب العميل المعارك القضائية المستنزفة دون طائل.
            </p>
          </div>

          <div class="commitments-card">
            <h3 class="commitments-title">ميثاقنا في التعامل مع قضايا الأفراد:</h3>
            <ul class="commitments-list">
              <li>
                <span class="commit-icon">🔒</span>
                <div>
                  <strong>السرية المطلقة:</strong>
                  <p>حماية كافة أسرار الموكل وبياناته ومستنداته دون أدنى إخلال.</p>
                </div>
              </li>
              <li>
                <span class="commit-icon">⚖️</span>
                <div>
                  <strong>التقييم الصادق:</strong>
                  <p>توضيح نسبة نجاح الدعوى بكل أمانة قبل تكبيد الموكل أي رسوم أو نفقات.</p>
                </div>
              </li>
              <li>
                <span class="commit-icon">📞</span>
                <div>
                  <strong>التواصل والمتابعة المباشرة:</strong>
                  <p>إحاطة الموكل أولاً بأول بكل ما يستجد في جلسات المحكمة وقرارات التحقيق.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services for Individuals -->
    <section class="section bg-cream fade-in-section">
      <div class="container">
        <div class="section-center-head">
          <SectionLabel text="مجالات الدعم القانوني للأفراد" theme="light" align="center" />
          <h2 class="h1-title section-title-dark text-center">خدمات متخصصة تراعي أدق التفاصيل</h2>
          <p class="section-intro-text text-dark-muted text-center">
            تغطية شاملة للمسائل القانونية التي تمس حياة الأفراد واستقرارهم المالي والأسري:
          </p>
        </div>

        <div class="individual-services-grid">
          <div class="ind-card" v-for="serv in individualServices" :key="serv.title">
            <div class="ind-icon-wrap">
              <span class="ind-icon">{{ serv.icon }}</span>
            </div>
            <h3 class="ind-title">{{ serv.title }}</h3>
            <p class="ind-desc">{{ serv.desc }}</p>
            <div class="ind-subitems">
              <span class="ind-tag" v-for="(tag, tIdx) in serv.tags" :key="tIdx">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-tight bg-navy text-center fade-in-section">
      <div class="container">
        <h2 class="h2-title mb-4">هل تواجه موقفاً قانونياً وتريد استيضاح خياراتك؟</h2>
        <p class="body-lead mb-6 text-silver max-w-2xl mx-auto">
          احجز جلسة استشارة مع مستشارينا، لنستمع إلى تفاصيل ملفك ونحدد معك المسار القانوني الأنسب.
        </p>
        <router-link to="/contact" class="btn btn-primary">
          تحدث معنا حول ملفك
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionLabel from '@/components/ui/SectionLabel.vue'

const individualServices = [
  {
    icon: '👨‍👩‍👧',
    title: 'الأحوال الشخصية والأسرة',
    desc: 'دراسة مسائل النفقة، الحضانة، الرؤية، الطلاق، إثبات النسب، ودعاوى الخلع بحكمة وموضوعية تراعي الروابط العائلية.',
    tags: ['النفقات والحضانة', 'دعاوى الطلاق والخلع', 'إثبات النسب']
  },
  {
    icon: '📜',
    title: 'التركات وتصفية المواريث',
    desc: 'حصر التركات، استخراج إعلام الوراثة، صياغة اتفاقيات القسمة الرضائية، وحسم النزاعات على الأموال الموروثة قضائياً.',
    tags: ['حصر التركات', 'القسمة الرضائية', 'إعلام الوراثة']
  },
  {
    icon: '🏡',
    title: 'المعاملات والمنازعات العقارية',
    desc: 'مراجعة عقود بيع وشراء الوحدات السكنية والتجارية، دعاوى صحة ونفاذ البيع، التسجيل بالشهر العقاري، وقضايا الإيجارات.',
    tags: ['صحة ونفاذ العقود', 'الشهر العقاري', 'قضايا الإيجار']
  },
  {
    icon: '💼',
    title: 'قضايا العمل ومستحقات الموظفين',
    desc: 'الدفاع عن حقوق العاملين في حالات الفصل التعسفي، احتساب مكافأة نهاية الخدمة، ومتابعة الشكاوى أمام مكاتب العمل.',
    tags: ['الفصل التعسفي', 'مكافأة نهاية الخدمة', 'لجان العمل']
  },
  {
    icon: '💳',
    title: 'المنازعات المالية والمدنية',
    desc: 'التعامل مع المطالبات المالية، الشيكات البنكية، إيصالات الأمانة، عقود القرض، واسترداد الأموال بطرق نظامية سليمة.',
    tags: ['الشيكات البنكية', 'إيصالات الأمانة', 'مطالبات الديون']
  },
  {
    icon: '🛡️',
    title: 'دعاوى التعويض وجبر الضرر',
    desc: 'رفع ومتابعة قضايا التعويض عن الأضرار المادية والمعنوية الناجمة عن حوادث السير أو الأخطاء المهنية أو إساءة السمعة.',
    tags: ['المسؤولية التقصيرية', 'حوادث السير', 'التعويض المالي']
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
  max-width: 65ch;
}

.narrative-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 992px) {
  .narrative-split {
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

.narrative-desc {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--color-dark-text);
  margin-bottom: 1.25rem;
}

.commitments-card {
  background: var(--color-cream);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.25rem;
}

.commitments-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 1.5rem;
}

.commitments-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.commitments-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.commit-icon {
  font-size: 1.35rem;
  line-height: 1;
  margin-top: 2px;
}

.commitments-list strong {
  display: block;
  font-size: 0.98rem;
  color: var(--color-navy);
  margin-bottom: 0.25rem;
}

.commitments-list p {
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

.section-title-dark {
  color: var(--color-navy);
  margin-bottom: 0.75rem;
}

.individual-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 640px) {
  .individual-services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .individual-services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.ind-card {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.ind-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.ind-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--color-cream);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.ind-icon {
  font-size: 1.35rem;
}

.ind-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.75rem;
}

.ind-desc {
  font-size: 0.925rem;
  line-height: 1.8;
  color: var(--color-muted-text);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.ind-subitems {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.ind-tag {
  font-size: 0.78rem;
  background: var(--color-cream-light);
  border: 1px solid var(--color-cream-border);
  color: var(--color-brown);
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-pill);
}

.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.text-silver { color: var(--color-silver); }
.max-w-2xl { max-width: 42rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
</style>
