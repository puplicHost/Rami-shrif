<template>
  <div class="app-wrapper">
    <NavBar />
    <main id="main-content" class="site-main">
      <NuxtPage />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted, nextTick, watch } from 'vue'

const setupScrollObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

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

const route = useRoute()
watch(
  () => route.path,
  () => {
    nextTick(() => {
      setupScrollObserver()
    })
  }
)

onMounted(() => {
  setupScrollObserver()
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
</style>
