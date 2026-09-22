<template>
  <div class="section-label-wrapper" :class="[theme, alignClass]">
    <span class="label-indicator"></span>
    <span class="label-text">{{ text }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: 'light', // 'light' (on cream/white background) or 'dark' (on navy)
    validator: (v) => ['light', 'dark'].includes(v)
  },
  align: {
    type: String,
    default: 'right', // 'right', 'center'
    validator: (v) => ['right', 'center'].includes(v)
  }
})

const alignClass = computed(() => `align-${props.align}`)
</script>

<style scoped>
.section-label-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.85rem;
}

.section-label-wrapper.align-center {
  justify-content: center;
  width: 100%;
}

.label-indicator {
  width: 16px;
  height: 2px;
  background-color: var(--color-brown);
  display: inline-block;
  border-radius: 1px;
}

.label-text {
  font-size: 0.825rem;
  font-weight: 600;
  letter-spacing: normal;
  text-transform: none;
}

/* Themes */
.light .label-text {
  color: var(--color-brown);
}

.light .label-indicator {
  background-color: var(--color-brown);
}

.dark .label-text {
  color: #BCA49F;
}

.dark .label-indicator {
  background-color: #A36B61;
}
</style>
