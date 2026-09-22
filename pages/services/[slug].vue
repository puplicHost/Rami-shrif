<template>
  <div class="page-wrapper service-page">
    <!-- Hero Header -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <div class="breadcrumb-trail">
          <NuxtLink to="/">الرئيسية</NuxtLink>
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

            <div class="service-breakdown-card" v-if="currentService.activities">
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
            <div class="service-process-box" v-if="currentService.processSteps">
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
              <NuxtLink to="/contact" class="btn btn-primary">
                طلب الخدمة الآن
              </NuxtLink>
            </div>
          </div>

          <!-- Sidebar Column: Other Services -->
          <aside class="service-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-heading">جميع خدماتنا</h3>
              <ul class="sidebar-nav-list">
                <li v-for="(serv, slug) in services" :key="slug">
                  <NuxtLink
                    :to="`/services/${slug}`"
                    class="sidebar-nav-link"
                    :class="{ 'is-current': slug === currentSlug }"
                  >
                    <span>{{ serv.title }}</span>
                    <span class="sidebar-arrow">←</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="sidebar-contact-card">
              <h4 class="contact-card-title">تواصل مباشر</h4>
              <p class="contact-card-text">
                مستشارونا القانونيون مستعدون للإجابة على استفساراتكم وتحديد أنسب الخيارات.
              </p>
              <NuxtLink to="/contact" class="btn btn-secondary-light btn-sm w-full">
                حجز موعد استشارة
              </NuxtLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const services = useServices()

const currentSlug = computed(() => String(route.params.slug || 'consultation'))
const currentService = computed(() => {
  return services[currentSlug.value] || services.consultation
})

useHead(() => ({
  title: `${currentService.value.title} | مؤسسة رامي شريف للمحاماة`,
  meta: [
    { name: 'description', content: currentService.value.body }
  ]
}))
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

@media (max-width: 991px) {
  .service-layout-grid {
    gap: 2.25rem;
  }

  .service-sidebar {
    gap: 1.5rem;
    margin-top: 0.5rem;
  }

  .sidebar-card,
  .sidebar-contact-card {
    padding: 1.35rem 1.25rem;
  }
}
</style>
