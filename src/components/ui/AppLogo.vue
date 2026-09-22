<template>
  <router-link to="/" class="app-logo" :class="[theme, { 'is-scrolled': isScrolled }]">
    <div class="logo-icon-wrap" :style="{ width: sizePx + 'px', height: sizePx + 'px' }">
      <img src="/logo.png" alt="رامي شريف للمحاماة" class="logo-img" />
    </div>
    
    <div class="logo-typography" v-if="!iconOnly">
      <span class="firm-name">مؤسسة رامي شريف</span>
      <span class="firm-tagline">للمحاماة والاستشارات القانونية</span>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'dark', // 'dark' (on navy) or 'light' (on cream/white)
    validator: (v) => ['dark', 'light'].includes(v)
  },
  size: {
    type: [Number, String],
    default: 52
  },
  iconOnly: {
    type: Boolean,
    default: false
  },
  isScrolled: {
    type: Boolean,
    default: false
  }
})

const sizePx = computed(() => Number(props.size) || 52)
</script>

<style scoped>
.app-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  transition: opacity var(--transition-fast);
  user-select: none;
}

.app-logo:hover {
  opacity: 0.92;
}

.logo-icon-wrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-svg,
.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-normal);
}

.app-logo:hover .logo-svg {
  transform: translateY(-1px);
}

.logo-typography {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.firm-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.firm-tagline {
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}

/* Theme variations */
/* Dark theme (Navbar default, Footer) */
.dark .part-accent,
.dark .stroke-accent {
  fill: #8E5A51;
  stroke: #8E5A51;
}

.dark .part-neutral,
.dark .stroke-neutral {
  fill: #E2E8F0;
  stroke: #E2E8F0;
}

.dark .firm-name {
  color: #FFFFFF;
}

.dark .firm-tagline {
  color: #A0AEC0;
}

/* Light theme */
.light .part-accent,
.light .stroke-accent {
  fill: #5A342D;
  stroke: #5A342D;
}

.light .part-neutral,
.light .stroke-neutral {
  fill: #1C2940;
  stroke: #1C2940;
}

.light .firm-name {
  color: #1C2940;
}

.light .firm-tagline {
  color: #5A6270;
}

@media (max-width: 768px) {
  .firm-name {
    font-size: 1.05rem;
  }
  .firm-tagline {
    font-size: 0.68rem;
  }
}
</style>
