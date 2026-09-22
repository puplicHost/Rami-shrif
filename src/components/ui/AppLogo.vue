<template>
  <router-link to="/" class="app-logo" :class="[theme, { 'is-scrolled': isScrolled }]">
    <div class="logo-icon-wrap" :style="{ width: sizePx + 'px', height: sizePx + 'px' }">
      <img
        src="@/assets/logo.png"
        alt="شعار مؤسسة رامي شريف للمحاماة"
        class="logo-img"
        @error="hasImageError = true"
        v-if="!hasImageError"
      />
      <svg
        v-else
        viewBox="0 0 100 120"
        class="logo-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <!-- Classical Architectural Column / عمود إغريقي مؤسسي -->
        <!-- Entablature -->
        <rect x="20" y="14" width="60" height="4.5" rx="1.5" class="part-accent" />
        <rect x="26" y="21" width="48" height="3" rx="1" class="part-neutral" />

        <!-- Ionic Volutes -->
        <path
          d="M22 28C22 25 25 24 28 24C32 24 34 26 34 29C34 32 32 33 29 33C25 33 24 30 25 28"
          class="stroke-accent"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <path
          d="M78 28C78 25 75 24 72 24C68 24 66 26 66 29C66 32 68 33 71 33C75 33 76 30 75 28"
          class="stroke-accent"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <rect x="30" y="26" width="40" height="4" rx="1" class="part-neutral" />

        <!-- Vertical Flutes -->
        <line x1="33" y1="34" x2="33" y2="88" class="stroke-neutral" stroke-width="2.5" stroke-linecap="round" />
        <line x1="41" y1="34" x2="41" y2="88" class="stroke-neutral" stroke-width="2" stroke-linecap="round" />
        <line x1="50" y1="34" x2="50" y2="88" class="stroke-accent" stroke-width="2.5" stroke-linecap="round" />
        <line x1="59" y1="34" x2="59" y2="88" class="stroke-neutral" stroke-width="2" stroke-linecap="round" />
        <line x1="67" y1="34" x2="67" y2="88" class="stroke-neutral" stroke-width="2.5" stroke-linecap="round" />

        <!-- Base Pedestal -->
        <rect x="28" y="90" width="44" height="4" rx="1" class="part-neutral" />
        <rect x="23" y="96" width="54" height="4" rx="1" class="part-accent" />
        <rect x="18" y="102" width="64" height="4" rx="1.5" class="part-neutral" />
      </svg>
    </div>
    
    <div class="logo-typography" v-if="!iconOnly">
      <span class="firm-name">مؤسسة رامي شريف</span>
      <span class="firm-tagline">للمحاماة والاستشارات القانونية</span>
    </div>
  </router-link>
</template>

<script setup>
import { ref, computed } from 'vue'

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
const hasImageError = ref(false)
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
