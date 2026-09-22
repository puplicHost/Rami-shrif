<template>
  <div class="app-wrapper">
    <NavBar />
    <main id="main-content" class="site-main">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'

const router = useRouter()

// Setup IntersectionObserver for smooth scroll fade-in sections
const setupScrollObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  // Check reduced motion preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (mediaQuery.matches) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  const elements = document.querySelectorAll('.fade-in-section:not(.is-visible)')
  elements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  setupScrollObserver()
})

router.afterEach(() => {
  nextTick(() => {
    setupScrollObserver()
  })
})
</script>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-navy);
}

.site-main {
  flex: 1 0 auto;
  width: 100%;
}

/* Page transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
