<template>
  <footer class="footer-section bg-navy-dark">
    <div class="footer-container">
      <!-- 1. Brand Section (Col 1 on Desktop, Order 1 on Mobile) -->
      <div class="footer-col footer-col-brand">
        <AppLogo theme="dark" :size="52" />
        <p class="footer-tagline">
          نفهم الملف… نُقيّم الموقف… ونختار المسار القانوني الأنسب.
        </p>
        <p class="footer-desc">
          مؤسسة قانونية رائدة تقدم خدمات المحاماة والاستشارات القانونية المتكاملة للأفراد والشركات، قائمة على دراسة الوقائع والدقة في التحليل واختيار الحل الأنجز.
        </p>
        <div class="social-icons" aria-label="منصات التواصل الاجتماعي">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <Linkedin :size="18" :stroke-width="1.75" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
            <Twitter :size="18" :stroke-width="1.75" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
            <Facebook :size="18" :stroke-width="1.75" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
            <Instagram :size="18" :stroke-width="1.75" />
          </a>
        </div>
      </div>

      <!-- Links Wrapper (Col 2 on Desktop, Unrolled on Mobile) -->
      <div class="footer-links-wrapper">
        <!-- 2. Quick Navigation (Order 2 on Mobile) -->
        <div class="footer-col footer-col-nav">
          <h3>التنقل السريع</h3>
          <div class="links-list">
            <NuxtLink to="/">الرئيسية</NuxtLink>
            <NuxtLink to="/about">من نحن ورؤيتنا</NuxtLink>
            <NuxtLink to="/methodology">منهجنا في العمل</NuxtLink>
            <NuxtLink to="/corporate">للشركات والمؤسسات</NuxtLink>
            <NuxtLink to="/individuals">للأفراد</NuxtLink>
            <NuxtLink to="/contact">تواصل معنا</NuxtLink>
          </div>
        </div>

        <!-- 3. Practice Areas (Order 3 on Mobile) -->
        <div class="footer-col footer-col-areas">
          <h3>مجالات العمل</h3>
          <div class="links-list">
            <NuxtLink to="/practice-areas/civil">القانون المدني</NuxtLink>
            <NuxtLink to="/practice-areas/commercial">القانون التجاري</NuxtLink>
            <NuxtLink to="/practice-areas/corporate-law">قانون الشركات</NuxtLink>
            <NuxtLink to="/practice-areas/personal-status">الأحوال الشخصية</NuxtLink>
            <NuxtLink to="/practice-areas/financial-disputes">المنازعات المالية</NuxtLink>
          </div>
        </div>
      </div>

      <!-- 4. Contact Column (Col 3 on Desktop, Order 4 on Mobile) -->
      <div class="footer-col footer-col-contact">
        <h3>معلومات التواصل</h3>
        <div class="contact-list">
          <div class="contact-item">
            <span class="info-icon"><MapPin :size="18" :stroke-width="1.75" /></span>
            <span>القاهرة، جمهورية مصر العربية</span>
          </div>
          <div class="contact-item">
            <span class="info-icon"><Phone :size="18" :stroke-width="1.75" /></span>
            <span dir="ltr">+20 100 000 0000</span>
          </div>
          <div class="contact-item">
            <span class="info-icon"><Mail :size="18" :stroke-width="1.75" /></span>
            <span>info@ramisherif-law.com</span>
          </div>
          <div class="contact-item">
            <span class="info-icon"><Clock :size="18" :stroke-width="1.75" /></span>
            <span>الأحد – الخميس: 9:00 ص – 6:00 م</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom-bar footer-bottom">
      <p class="copyright-text">
        © {{ currentYear }} مؤسسة رامي شريف للمحاماة — جميع الحقوق محفوظة
      </p>
      <div class="footer-bottom-notes">
        <span>الالتزام بأعلى معايير السرية والمهنية القانونية</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #121B2A;
}

/* Desktop (lg+) */
.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  padding: 64px 80px;
  align-items: start;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-links-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-col h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 1.25rem;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);
  display: block;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-col a {
  display: block;
  padding: 6px 0;
  font-size: 14px;
  color: var(--color-silver);
  transition: color var(--transition-fast), padding-right var(--transition-fast);
}

.footer-col a:hover {
  color: var(--color-white);
  padding-right: 4px;
}

.footer-tagline {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-silver-light);
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
}

.footer-desc {
  font-size: 0.88rem;
  line-height: 1.8;
  color: var(--color-silver);
  max-width: 36ch;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 1.25rem;
}

.social-link {
  width: 34px;
  height: 34px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-silver);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  padding: 0 !important;
}

.social-link:hover {
  background: var(--color-brown);
  color: var(--color-white);
  border-color: var(--color-brown);
  transform: translateY(-2px);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  direction: rtl;
  color: var(--color-silver);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B26A5D;
  flex-shrink: 0;
  margin-top: 3px;
}

.w-full {
  width: 100%;
}

.footer-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 80px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.85rem;
  color: #7E8C9F;
  max-width: 1400px;
  margin: 0 auto;
}

/* Tablet adjustments (769px - 1023px) */
@media (min-width: 769px) and (max-width: 1023px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    padding: 48px 32px;
    gap: 36px;
  }

  .footer-bottom-bar {
    padding: 1.5rem 32px;
  }
}

/* Mobile — إعادة تنظيم كاملة */
@media (max-width: 768px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 48px 24px;
  }

  .footer-links-wrapper {
    display: contents;
  }

  /* كل column تاخد عرض كامل */
  .footer-col {
    width: 100%;
  }

  /* الـ brand section في الأول */
  .footer-col-brand {
    order: 1;
    text-align: right;
  }

  /* التنقل السريع */
  .footer-col-nav {
    order: 2;
  }

  /* مجالات العمل */
  .footer-col-areas {
    order: 3;
  }

  /* معلومات التواصل */
  .footer-col-contact {
    order: 4;
  }

  /* الـ social icons */
  .social-icons {
    justify-content: flex-start;
    gap: 16px;
    margin-top: 16px;
  }

  /* العنوان لكل column */
  .footer-col h3 {
    font-size: 16px;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(196, 196, 196, 0.2);
  }

  /* Links */
  .footer-col a {
    display: block;
    padding: 6px 0;
    font-size: 14px;
  }

  /* Contact items */
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 14px;
    direction: rtl;
  }

  /* Bottom bar */
  .footer-bottom {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
    font-size: 12px;
    padding: 16px 24px;
  }
}
</style>
