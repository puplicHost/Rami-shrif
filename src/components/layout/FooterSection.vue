<template>
  <footer class="footer-section bg-navy-dark">
    <div class="container footer-container">
      <div class="footer-main-grid">
        <!-- Col 1: Brand & Tagline -->
        <div class="footer-brand-col">
          <AppLogo theme="dark" :size="52" />
          <p class="footer-tagline">
            نفهم الملف… نُقيّم الموقف… ونختار المسار القانوني الأنسب.
          </p>
          <p class="footer-desc">
            مؤسسة قانونية رائدة تقدم خدمات المحاماة والاستشارات القانونية المتكاملة للأفراد والشركات، قائمة على دراسة الوقائع والدقة في التحليل واختيار الحل الأنجز.
          </p>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="footer-links-col">
          <h4 class="footer-heading">التنقل السريع</h4>
          <ul class="footer-list">
            <li><router-link to="/">الرئيسية</router-link></li>
            <li><router-link to="/about">من نحن ورؤيتنا</router-link></li>
            <li><router-link to="/methodology">منهجنا في العمل</router-link></li>
            <li><router-link to="/corporate">للشركات والمؤسسات</router-link></li>
            <li><router-link to="/individuals">للأفراد</router-link></li>
            <li><router-link to="/contact">تواصل معنا</router-link></li>
          </ul>
        </div>

        <!-- Col 3: Practice Areas Links -->
        <div class="footer-links-col">
          <h4 class="footer-heading">مجالات العمل</h4>
          <ul class="footer-list">
            <li><router-link to="/practice-areas/civil">القانون المدني</router-link></li>
            <li><router-link to="/practice-areas/commercial">القانون التجاري</router-link></li>
            <li><router-link to="/practice-areas/corporate-law">قانون الشركات</router-link></li>
            <li><router-link to="/practice-areas/personal-status">الأحوال الشخصية</router-link></li>
            <li><router-link to="/practice-areas/financial-disputes">المنازعات المالية</router-link></li>
          </ul>
        </div>

        <!-- Col 4: Contact Placeholder & Office Info -->
        <div class="footer-contact-col">
          <h4 class="footer-heading">معلومات التواصل</h4>
          <ul class="contact-info-list">
            <li class="contact-info-item">
              <span class="info-icon">📍</span>
              <span>القاهرة، جمهورية مصر العربية</span>
            </li>
            <li class="contact-info-item">
              <span class="info-icon">📞</span>
              <span dir="ltr">+20 100 000 0000</span>
            </li>
            <li class="contact-info-item">
              <span class="info-icon">✉️</span>
              <span>info@ramisherif-law.com</span>
            </li>
            <li class="contact-info-item">
              <span class="info-icon">⏱️</span>
              <span>الأحد – الخميس: 9:00 ص – 6:00 م</span>
            </li>
          </ul>
          <div class="footer-cta-box">
            <router-link to="/contact" class="btn btn-primary btn-sm">
              احجز استشارة قانونية
            </router-link>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom-bar">
        <p class="copyright-text">
          © {{ currentYear }} مؤسسة رامي شريف للمحاماة — جميع الحقوق محفوظة
        </p>
        <div class="footer-bottom-notes">
          <span>الالتزام بأعلى معايير السرية والمهنية القانونية</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import AppLogo from '@/components/ui/AppLogo.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 4.5rem;
  padding-bottom: 2rem;
  background-color: #121B2A;
}

.footer-main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 640px) {
  .footer-main-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-main-grid {
    grid-template-columns: 2.2fr 1fr 1fr 1.5fr;
    gap: 3rem;
  }
}

.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.footer-tagline {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-silver-light);
  line-height: 1.5;
}

.footer-desc {
  font-size: 0.88rem;
  line-height: 1.8;
  color: var(--color-silver);
  max-width: 40ch;
}

.footer-heading {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 1.25rem;
  position: relative;
  display: inline-block;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: -6px;
  right: 0;
  width: 24px;
  height: 2px;
  background-color: var(--color-brown);
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-list a {
  font-size: 0.9rem;
  color: var(--color-silver);
  transition: color var(--transition-fast), padding-right var(--transition-fast);
}

.footer-list a:hover {
  color: var(--color-white);
  padding-right: 4px;
}

.contact-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.88rem;
  color: var(--color-silver);
}

.info-icon {
  font-size: 0.95rem;
}

.footer-cta-box {
  margin-top: 1.5rem;
}

.btn-sm {
  padding: 0.65rem 1.25rem;
  font-size: 0.85rem;
}

.footer-bottom-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.85rem;
  font-size: 0.85rem;
  color: #7E8C9F;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom-bar {
    flex-direction: row;
    text-align: right;
  }
}

.footer-bottom-notes {
  font-size: 0.82rem;
  color: #6C7A8E;
}
</style>
