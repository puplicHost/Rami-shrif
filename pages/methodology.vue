<template>
  <div class="page-wrapper methodology-page">
    <!-- Page Hero -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <SectionLabel text="منهجية العمل" theme="dark" />
        <h1 class="display-title page-title">نبدأ بالفهم… قبل الإجراء</h1>
        <p class="body-lead page-lead">
          الإجراء القانوني ليس نقطة البداية. البداية الصحيحة هي فهم المشكلة، وتقييم الموقف القانوني، وتحديد الخيارات المتاحة، ثم اختيار المسار الأنسب.
        </p>
      </div>
    </section>

    <!-- Philosophy Focus Section -->
    <section class="section section-tight bg-cream fade-in-section">
      <div class="container philosophy-box">
        <div class="philosophy-inner">
          <span class="philo-label">فلسفتنا المهنية</span>
          <h2 class="h2-title philo-heading">
            «الدقة في التشخيص تمنح القوة في المعالجة القانونية»
          </h2>
          <p class="body-regular philo-text">
            نتعامل مع كل ملف باعتباره حالة قانونية قائمة بذاتها، لا نقبل الحلول الجاهزة أو التسرع في اتخاذ إجراءات شكلية قد ترهق العميل دون جدوى. نحدد الهدف أولاً، ثم نبني الاستراتيجية التي تقود إليه بأقصر السبل وأكثرها أماناً وموثوقية.
          </p>
        </div>
      </div>
    </section>

    <!-- Detailed 6 Steps -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="methodology-steps-list">
          <article
            v-for="(step, index) in stepsDetailed"
            :key="step.number"
            class="methodology-step-row"
            :class="{ 'reverse-row': index % 2 === 1 }"
          >
            <div class="step-num-col">
              <span class="step-big-num">{{ step.number }}</span>
              <div class="step-line-indicator"></div>
            </div>

            <div class="step-info-col">
              <span class="step-category-tag">المرحلة {{ step.phase }}</span>
              <h3 class="h2-title step-main-title">{{ step.title }}</h3>
              <p class="body-lead step-summary">{{ step.summary }}</p>
              
              <div class="step-deep-dive">
                <h4 class="deep-dive-title">ما نقوم به في هذه المرحلة:</h4>
                <ul class="deep-dive-list">
                  <li v-for="(point, pIdx) in step.points" :key="pIdx">
                    <span class="point-bullet">✦</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <div class="step-outcome-box">
                <span class="outcome-label">المخرج القانوني:</span>
                <span class="outcome-text">{{ step.outcome }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-tight bg-navy text-center fade-in-section">
      <div class="container">
        <h2 class="h2-title mb-4">هل ترغب في دراسة ملفك وفق هذا المنهج؟</h2>
        <p class="body-lead mb-6 text-silver max-w-2xl mx-auto">
          فريقنا القانوني مستعد للبدء في دراسة الوقائع وتحليل المستندات لتقديم تقييم موضوعي ومحدد.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary">
          ابدأ استشارتك الآن
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'منهجنا في العمل | مؤسسة رامي شريف للمحاماة'
})

const stepsDetailed = [
  {
    number: '01',
    phase: 'الأولى',
    title: 'دراسة الوقائع وتحديد السياق',
    summary: 'فهم تفاصيل الموضوع والظروف المحيطة به، واستخلاص الحقائق الجوهرية المؤثرة في النزاع.',
    points: [
      'جلسة استماع أولية متعمقة لتدوين الرواية الكاملة للعميل.',
      'عزل الوقائع القانونية المؤثرة عن التفاصيل الثانوية غير المنتجة.',
      'تحديد التواريخ المفصلية، المهل الزمنية، وحالات سقوط الحق أو تقادمه.'
    ],
    outcome: 'تقرير أولي بالوقائع المادية المجردة والتسلسل الزمني للنزاع.'
  },
  {
    number: '02',
    phase: 'الثانية',
    title: 'مراجعة المستندات والتحليل الفني',
    summary: 'فحص وتحليل المستندات والبيانات ذات الصلة وتقييم حجيتها القانونية وقوتها الثبوتية.',
    points: [
      'فحص أصول العقود والاتفاقيات، الشروط العامة والخاصة، وبنود التحكيم.',
      'تحليل المراسلات الورقية والإلكترونية وإشعارات الإخطار والإنذارات.',
      'تقييم سلامة المستندات الإجرائية وتحديد ما إذا كان الملف يحتاج مستندات تكميلية.'
    ],
    outcome: 'قائمة بالمستندات المؤيدة للمركز القانوني وتقييم الثغرات المحتملة.'
  },
  {
    number: '03',
    phase: 'الثالثة',
    title: 'تقييم الموقف القانوني والمخاطر',
    summary: 'تحديد المركز القانوني ونقاط القوة والتحديات والمخاطر بحيادية علمية مجردة.',
    points: [
      'تكييف الوقائع قانونياً وفق النصوص التشريعية وأحكام محكمة النقض المستقرة.',
      'دراسة نقاط القوة التي ترجح كفة العميل، وتحديد الدفوع المحتملة للخصم.',
      'تحديد الأثر المالي والسمعي والتشغيلي المترتب على كل سيناريو.'
    ],
    outcome: 'رأي استشاري مكتوب يوضح المركز القانوني بنسب واقعية وموضوعية.'
  },
  {
    number: '04',
    phase: 'الرابعة',
    title: 'تحديد الخيارات والمسارات البديلة',
    summary: 'دراسة المسارات القانونية والبدائل المتاحة لتفادي الإجراءات العقيمة واستهلاك الوقت والمال.',
    points: [
      'بحث فرص الحلول الودية، التفاوض المباشر، أو الوساطة لحفظ الوقت والتكاليف.',
      'تقييم مسار التحكيم التجاري إن كان مشروطاً أو متاحاً كخيار سريع.',
      'دراسة مسار الدعوى القضائية المباشرة وتحديد الدائرة المختصة نوعياً ومكانياً.'
    ],
    outcome: 'مصفوفة مقارنة توضح كلفة وزمن ومخاطر كل مسار قانوني متاح.'
  },
  {
    number: '05',
    phase: 'الخامسة',
    title: 'اختيار المسار الأنسب وصياغة الخطة',
    summary: 'اختيار الحل وفق وقائع الملف وأهداف العميل، ورسم خطة عمل استراتيجية واضحة.',
    points: [
      'التوافق مع العميل على المسار المختار بناءً على أولوياته وتطلعاته.',
      'صياغة اللائحة القانونية أو مذكرة التفاهم ومسودات الإجراءات بدقة بالغة.',
      'تجهيز الدفوع الاحتياطية لمواجهة أي ردود أو مناورات من الطرف الآخر.'
    ],
    outcome: 'خطة استراتيجية محددة المراحل والمهام متفق عليها تماماً مع العميل.'
  },
  {
    number: '06',
    phase: 'السادسة',
    title: 'المتابعة والتنفيذ وإحاطة العميل',
    summary: 'متابعة الإجراءات دورياً وإطلاع العميل المستمر على التطورات دون انقطاع.',
    points: [
      'حضور الجلسات والمرافعة وتقديم المذكرات القانونية في المواعيد المقررة.',
      'إرسال تقارير كتابية دورية للعميل تتضمن ما دار في الجلسات والقرارات الصادرة.',
      'متابعة إجراءات تنفيذ الأحكام والقرارات وإيداع الصيغ التنفيذية فور صدورها.'
    ],
    outcome: 'تنفيذ كامل وسلس للأحكام والتسويات مع إغلاق الملف بصورة نظامية موثقة.'
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

.philosophy-box {
  max-width: 900px;
}

.philosophy-inner {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.philo-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-brown);
  display: block;
  margin-bottom: 1rem;
}

.philo-heading {
  color: var(--color-navy);
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.philo-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--color-muted-text);
  max-width: 70ch;
  margin: 0 auto;
}

.methodology-steps-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.methodology-step-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-cream-border);
}

@media (min-width: 768px) {
  .methodology-step-row {
    grid-template-columns: 140px 1fr;
    gap: 3rem;
  }
}

.methodology-step-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.step-num-col {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .step-num-col {
    flex-direction: column;
    align-items: flex-start;
  }
}

.step-big-num {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-brown);
  line-height: 1;
}

.step-line-indicator {
  width: 48px;
  height: 2px;
  background-color: rgba(90, 52, 45, 0.3);
}

.step-info-col {
  display: flex;
  flex-direction: column;
}

.step-category-tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-brown);
  display: inline-block;
  margin-bottom: 0.5rem;
}

.step-main-title {
  color: var(--color-navy);
  font-size: 1.65rem;
  margin-bottom: 0.85rem;
}

.step-summary {
  color: var(--color-muted-text);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.step-deep-dive {
  background: var(--color-cream-light);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-sm);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.deep-dive-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.85rem;
}

.deep-dive-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.deep-dive-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--color-dark-text);
}

.point-bullet {
  color: var(--color-brown);
  font-size: 0.75rem;
  margin-top: 4px;
}

.step-outcome-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  background: rgba(90, 52, 45, 0.05);
  border-right: 3px solid var(--color-brown);
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-sm);
}

.outcome-label {
  font-weight: 700;
  color: var(--color-brown);
}

.outcome-text {
  color: var(--color-navy);
  font-weight: 500;
}

.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.text-silver { color: var(--color-silver); }
.max-w-2xl { max-width: 42rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
</style>
