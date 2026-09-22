<template>
  <NuxtLink
    :to="`/practice-areas/${slug}`"
    class="practice-card"
    :class="{ 'full-width-mobile': isFullWidthMobile }"
  >
    <div class="card-icon-wrap">
      <slot name="icon">
        <Scale :size="24" :stroke-width="1.5" />
      </slot>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
    </div>

    <div class="card-footer">
      <span class="read-more-text">تفاصيل المجال</span>
      <span class="card-arrow" aria-hidden="true">←</span>
    </div>
  </NuxtLink>
</template>

<script setup>
import { Scale } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isFullWidthMobile: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.practice-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid rgba(28, 41, 64, 0.08);
  border-radius: var(--radius-md);
  padding: 1.85rem;
  text-decoration: none;
  color: var(--color-dark-text);
  box-shadow: 0 2px 10px rgba(28, 41, 64, 0.03);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
  position: relative;
  overflow: hidden;
  height: 100%;
}

.practice-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 3px;
  background-color: var(--color-brown);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-normal);
}

.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(28, 41, 64, 0.09);
  border-color: rgba(90, 52, 45, 0.25);
}

.practice-card:hover::before {
  transform: scaleX(1);
}

.card-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background-color: var(--color-cream);
  color: var(--color-brown);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.practice-card:hover .card-icon-wrap {
  background-color: var(--color-brown);
  color: var(--color-white);
}

.card-icon {
  width: 24px;
  height: 24px;
}

.card-content {
  flex-grow: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.65rem;
  line-height: 1.4;
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--color-muted-text);
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(28, 41, 64, 0.06);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-brown);
}

.card-arrow {
  font-size: 1.1rem;
  transition: transform var(--transition-normal);
}

.practice-card:hover .card-arrow {
  transform: translateX(-5px);
}

@media (max-width: 639px) {
  .practice-card {
    padding: 1.25rem;
  }
  .card-title {
    font-size: 1.05rem;
  }
  .card-desc {
    font-size: 0.82rem;
    margin-bottom: 1rem;
  }
  .full-width-mobile {
    grid-column: 1 / -1;
  }
}
</style>
