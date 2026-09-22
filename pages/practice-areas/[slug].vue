<template>
  <div class="page-wrapper practice-area-page">
    <!-- Hero Header -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <div class="breadcrumb-trail">
          <NuxtLink to="/">الرئيسية</NuxtLink>
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

            <div class="area-details-block" v-if="currentArea.coverage">
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
            <div class="area-approach-box" v-if="currentArea.approach">
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
              <NuxtLink to="/contact" class="btn btn-primary">
                احجز استشارة متخصصة
              </NuxtLink>
            </div>
          </div>

          <!-- Sidebar Column: Other Practice Areas -->
          <aside class="area-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-heading">كافة مجالات العمل</h3>
              <ul class="sidebar-nav-list">
                <li v-for="(area, slug) in practiceAreas" :key="slug">
                  <NuxtLink
                    :to="`/practice-areas/${slug}`"
                    class="sidebar-nav-link"
                    :class="{ 'is-current': slug === currentSlug }"
                  >
                    <span>{{ area.title }}</span>
                    <span class="sidebar-arrow">←</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="sidebar-contact-card">
              <h4 class="contact-card-title">استشارة سريعة</h4>
              <p class="contact-card-text">
                فريقنا متاح لدراسة ملفاتك وتقديم التقييم الأنسب.
              </p>
              <NuxtLink to="/contact" class="btn btn-secondary-light btn-sm w-full">
                تواصل مع مستشار
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
const practiceAreas = usePracticeAreas()

const currentSlug = computed(() => String(route.params.slug || 'civil'))
const currentArea = computed(() => {
  return practiceAreas[currentSlug.value] || practiceAreas.civil
})

useHead(() => ({
  title: `${currentArea.value.title} | مؤسسة رامي شريف للمحاماة`,
  meta: [
    { name: 'description', content: currentArea.value.headline || currentArea.value.body }
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
