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
        <div class="social-icons">
          <a 
            href="https://www.facebook.com/ramisharif.law/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="فيسبوك"
            class="social-icon facebook"
          >
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>

          <a 
            href="https://www.instagram.com/ramisharifeg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="إنستاجرام"
            class="social-icon instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>

          <a 
            href="https://www.linkedin.com/company/ramisharifeg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="لينكدإن"
            class="social-icon linkedin"
          >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>

          <a 
            href="https://www.youtube.com/@ramisharif.law"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="يوتيوب"
            class="social-icon youtube"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>

          <a 
            href="https://wa.me/201111904997"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            class="social-icon whatsapp"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>
        </div>
      </div>

      <!-- 2. Quick Navigation (Col 2 on Desktop, Order 2 on Mobile) -->
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

      <!-- 3. Practice Areas (Col 3 on Desktop, Order 3 on Mobile) -->
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

      <!-- 4. Contact Column + Map (Col 4 on Desktop, Order 4 on Mobile) -->
      <div class="footer-col footer-col-contact">
        <h3>معلومات التواصل</h3>
        <div class="contact-list">
          <div class="contact-item">
            <MapPin :size="16" class="contact-icon" />
            <span>١ شارع الصحافة - المنشية - مبنى كمال سعد الإداري - أمام محكمة الإسكندرية - الدور ٣ - مكتب رقم ١٠</span>
          </div>
          <div class="contact-item">
            <Phone :size="16" class="contact-icon" />
            <div class="phones-wrap">
              <a href="tel:01111904997" dir="ltr" class="contact-link">01111904997</a>
              <span class="phone-sep">|</span>
              <a href="tel:034863096" dir="ltr" class="contact-link">034863096</a>
            </div>
          </div>
          <div class="contact-item">
            <Mail :size="16" class="contact-icon" />
            <a href="mailto:Info@Ramysherif.Com" class="contact-link">Info@Ramysherif.Com</a>
          </div>
          <div class="contact-item">
            <MessageCircle :size="16" class="contact-icon" />
            <a href="https://wa.me/201111904997" target="_blank" rel="noopener noreferrer" class="contact-link" dir="ltr">واتساب: +20 111 190 4997</a>
          </div>
          <div class="contact-item">
            <Clock :size="16" class="contact-icon" />
            <span>الأحد – الخميس: 9:00 ص – 6:00 م</span>
          </div>
        </div>

        <!-- الماب تحت التواصل مباشرة -->
        <div class="footer-map">
          <iframe
            src="https://maps.google.com/maps?q=31.1996235,29.8929002&hl=ar&z=17&output=embed"
            width="100%"
            height="180"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
  MessageCircle
} from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #121B2A;
}

/* Desktop layout — 4 columns */
@media (min-width: 1024px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1.6fr;
    gap: 40px;
    padding: 64px 80px;
    align-items: start;
    max-width: 1440px;
    margin: 0 auto;
  }
}

/* Tablet layout (769px - 1023px) */
@media (min-width: 769px) and (max-width: 1023px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    padding: 48px 32px;
  }

  .footer-bottom-bar {
    padding: 1.5rem 32px;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-col h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 16px;
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
  max-width: 38ch;
}

.social-icons {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: transform 0.2s ease, opacity 0.2s ease;
  color: #ffffff !important;
  text-decoration: none;
  padding: 0 !important;
}

.social-icon:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

/* ألوان المنصات الرسمية */
.social-icon.facebook {
  background-color: #1877F2;
}

.social-icon.instagram {
  background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4);
}

.social-icon.linkedin {
  background-color: #0A66C2;
}

.social-icon.youtube {
  background-color: #FF0000;
}

.social-icon.whatsapp {
  background-color: #25D366;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13.5px;
  line-height: 1.6;
  direction: rtl;
  color: var(--color-silver);
}

.contact-icon {
  color: #B26A5D;
  flex-shrink: 0;
  margin-top: 3px;
}

.phones-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-sep {
  opacity: 0.4;
  color: var(--color-silver);
}

.contact-link {
  color: var(--color-silver);
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--color-white);
}

/* Footer Map */
.footer-map {
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(196, 196, 196, 0.15);
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
  max-width: 1440px;
  margin: 0 auto;
}

/* Mobile — إعادة تنظيم كاملة */
@media (max-width: 768px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 48px 24px;
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

  .footer-map {
    margin-top: 18px;
  }

  .footer-map iframe {
    height: 200px;
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
