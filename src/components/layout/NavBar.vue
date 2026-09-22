<template>
  <header
    class="navbar"
    :class="{ 'is-scrolled': isScrolled, 'menu-open': isMobileMenuOpen }"
  >
    <div class="navbar-container container">
      <!-- Logo + Firm Name -->
      <AppLogo
        theme="dark"
        :size="logoSize"
        :is-scrolled="isScrolled"
      />

      <!-- Desktop Navigation Links -->
      <nav class="desktop-nav" aria-label="التنقل الرئيسي">
        <ul class="nav-links">
          <li>
            <router-link to="/" class="nav-link" exact-active-class="active">
              الرئيسية
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link" active-class="active">
              من نحن
            </router-link>
          </li>
          <li>
            <router-link to="/methodology" class="nav-link" active-class="active">
              منهجنا
            </router-link>
          </li>
          
          <!-- Dropdown or Direct Link for Practice Areas -->
          <li class="has-dropdown" @mouseenter="showPracticeMenu = true" @mouseleave="showPracticeMenu = false">
            <router-link to="/practice-areas/civil" class="nav-link dropdown-toggle" :class="{ active: isPracticeRoute }">
              مجالات العمل
              <svg class="dropdown-chevron" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
            <div class="dropdown-menu" v-show="showPracticeMenu">
              <router-link to="/practice-areas/civil" class="dropdown-item">القانون المدني</router-link>
              <router-link to="/practice-areas/commercial" class="dropdown-item">القانون التجاري</router-link>
              <router-link to="/practice-areas/corporate-law" class="dropdown-item">قانون الشركات</router-link>
              <router-link to="/practice-areas/personal-status" class="dropdown-item">الأحوال الشخصية</router-link>
              <router-link to="/practice-areas/financial-disputes" class="dropdown-item">المنازعات المالية</router-link>
            </div>
          </li>

          <!-- Dropdown or Direct Link for Services -->
          <li class="has-dropdown" @mouseenter="showServicesMenu = true" @mouseleave="showServicesMenu = false">
            <router-link to="/services/consultation" class="nav-link dropdown-toggle" :class="{ active: isServiceRoute }">
              خدماتنا
              <svg class="dropdown-chevron" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
            <div class="dropdown-menu" v-show="showServicesMenu">
              <router-link to="/services/consultation" class="dropdown-item">الاستشارات القانونية</router-link>
              <router-link to="/services/contracts" class="dropdown-item">صياغة ومراجعة العقود</router-link>
              <router-link to="/services/disputes" class="dropdown-item">إدارة المنازعات</router-link>
              <router-link to="/services/representation" class="dropdown-item">التمثيل القانوني</router-link>
              <router-link to="/services/corporate-support" class="dropdown-item">الدعم القانوني للشركات</router-link>
            </div>
          </li>

          <li>
            <router-link to="/corporate" class="nav-link" active-class="active">
              للشركات
            </router-link>
          </li>
          <li>
            <router-link to="/individuals" class="nav-link" active-class="active">
              للأفراد
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link" active-class="active">
              تواصل معنا
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Desktop Action CTA -->
      <div class="navbar-actions">
        <router-link to="/contact" class="btn btn-primary nav-cta">
          احجز استشارة
        </router-link>

        <!-- Mobile Hamburger Button -->
        <button
          class="hamburger-btn"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="القائمة الرئيسية"
        >
          <span class="hamburger-line top" :class="{ open: isMobileMenuOpen }"></span>
          <span class="hamburger-line mid" :class="{ open: isMobileMenuOpen }"></span>
          <span class="hamburger-line bot" :class="{ open: isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay & Menu -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="mobile-backdrop"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <transition name="drawer">
      <aside
        v-if="isMobileMenuOpen"
        class="mobile-drawer"
        aria-label="قائمة الهاتف"
      >
        <div class="drawer-header">
          <AppLogo theme="dark" :size="44" />
          <button class="drawer-close-btn" @click="closeMobileMenu" aria-label="إغلاق القائمة">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li>
              <router-link to="/" class="mobile-link" @click="closeMobileMenu">
                الرئيسية
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="mobile-link" @click="closeMobileMenu">
                من نحن
              </router-link>
            </li>
            <li>
              <router-link to="/methodology" class="mobile-link" @click="closeMobileMenu">
                منهجنا في العمل
              </router-link>
            </li>
            <li class="mobile-accordion-group">
              <div class="mobile-accordion-head" @click="mobilePracticeOpen = !mobilePracticeOpen">
                <span>مجالات العمل</span>
                <span class="acc-arrow" :class="{ rotate: mobilePracticeOpen }">▾</span>
              </div>
              <ul v-show="mobilePracticeOpen" class="mobile-sublinks">
                <li><router-link to="/practice-areas/civil" @click="closeMobileMenu">القانون المدني</router-link></li>
                <li><router-link to="/practice-areas/commercial" @click="closeMobileMenu">القانون التجاري</router-link></li>
                <li><router-link to="/practice-areas/corporate-law" @click="closeMobileMenu">قانون الشركات</router-link></li>
                <li><router-link to="/practice-areas/personal-status" @click="closeMobileMenu">الأحوال الشخصية</router-link></li>
                <li><router-link to="/practice-areas/financial-disputes" @click="closeMobileMenu">المنازعات المالية</router-link></li>
              </ul>
            </li>
            <li class="mobile-accordion-group">
              <div class="mobile-accordion-head" @click="mobileServicesOpen = !mobileServicesOpen">
                <span>خدماتنا القانونية</span>
                <span class="acc-arrow" :class="{ rotate: mobileServicesOpen }">▾</span>
              </div>
              <ul v-show="mobileServicesOpen" class="mobile-sublinks">
                <li><router-link to="/services/consultation" @click="closeMobileMenu">الاستشارات القانونية</router-link></li>
                <li><router-link to="/services/contracts" @click="closeMobileMenu">صياغة ومراجعة العقود</router-link></li>
                <li><router-link to="/services/disputes" @click="closeMobileMenu">إدارة المنازعات</router-link></li>
                <li><router-link to="/services/representation" @click="closeMobileMenu">التمثيل القانوني</router-link></li>
                <li><router-link to="/services/corporate-support" @click="closeMobileMenu">الدعم القانوني للشركات</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/corporate" class="mobile-link" @click="closeMobileMenu">
                للشركات والمؤسسات
              </router-link>
            </li>
            <li>
              <router-link to="/individuals" class="mobile-link" @click="closeMobileMenu">
                للأفراد
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="mobile-link" @click="closeMobileMenu">
                تواصل معنا
              </router-link>
            </li>
          </ul>

          <div class="drawer-actions">
            <router-link to="/contact" class="btn btn-primary w-full" @click="closeMobileMenu">
              احجز استشارة قانونية
            </router-link>
          </div>
        </nav>
      </aside>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppLogo from '@/components/ui/AppLogo.vue'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const showPracticeMenu = ref(false)
const showServicesMenu = ref(false)
const mobilePracticeOpen = ref(false)
const mobileServicesOpen = ref(false)

const isPracticeRoute = computed(() => route.path.startsWith('/practice-areas'))
const isServiceRoute = computed(() => route.path.startsWith('/services'))

const logoSize = computed(() => (windowWidth.value < 768 ? 44 : 52))
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value >= 1024 && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 74px;
  z-index: 1000;
  background-color: rgba(28, 41, 64, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background-color var(--transition-normal), box-shadow var(--transition-normal), height var(--transition-normal);
}

.navbar.is-scrolled {
  background-color: rgba(20, 30, 48, 0.96);
  box-shadow: 0 4px 20px rgba(10, 15, 25, 0.4);
  border-bottom-color: rgba(90, 52, 45, 0.25);
  height: 68px;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: block;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--color-silver);
  padding: 0.5rem 0.25rem;
  position: relative;
  transition: color var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-white);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 2px;
  background-color: var(--color-brown);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-normal);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* Dropdown Menu */
.has-dropdown {
  position: relative;
}

.dropdown-chevron {
  transition: transform var(--transition-fast);
}

.has-dropdown:hover .dropdown-chevron {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 210px;
  background-color: #172338;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border-radius: var(--radius-sm);
  padding: 0.5rem 0;
  margin-top: 0.25rem;
  z-index: 1050;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.dropdown-item {
  display: block;
  padding: 0.6rem 1.15rem;
  font-size: 0.88rem;
  color: var(--color-silver);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.dropdown-item:hover {
  background-color: rgba(90, 52, 45, 0.35);
  color: var(--color-white);
}

/* Action Area */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.nav-cta {
  font-size: 0.88rem;
  padding: 0.65rem 1.35rem;
}

@media (max-width: 1023px) {
  .nav-cta {
    display: none;
  }
}

/* Hamburger button */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  padding: 7px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

@media (min-width: 1024px) {
  .hamburger-btn {
    display: none;
  }
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: var(--color-white);
  border-radius: 2px;
  transition: transform var(--transition-normal), opacity var(--transition-fast);
}

.hamburger-line.top.open {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-line.mid.open {
  opacity: 0;
}

.hamburger-line.bot.open {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 25, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1100;
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 310px;
  max-width: 86vw;
  background: #141E30;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -10px 0 35px rgba(0, 0, 0, 0.5);
  z-index: 1200;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow-y: auto;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 1.25rem;
}

.drawer-close-btn {
  color: var(--color-silver);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
}

.drawer-close-btn:hover {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.1);
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.mobile-link {
  display: block;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-silver-light);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.mobile-link:hover {
  color: var(--color-white);
  padding-right: 0.75rem;
}

.mobile-accordion-group {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.mobile-accordion-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-silver-light);
  cursor: pointer;
}

.acc-arrow {
  font-size: 0.85rem;
  transition: transform var(--transition-fast);
}

.acc-arrow.rotate {
  transform: rotate(180deg);
}

.mobile-sublinks {
  list-style: none;
  padding: 0.25rem 0.85rem 0.75rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-right: 2px solid var(--color-brown);
}

.mobile-sublinks a {
  display: block;
  padding: 0.35rem 0.5rem;
  font-size: 0.88rem;
  color: var(--color-silver);
}

.mobile-sublinks a:hover {
  color: var(--color-white);
}

.drawer-actions {
  margin-top: 2rem;
  padding-top: 1rem;
}

.w-full {
  width: 100%;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
</style>
