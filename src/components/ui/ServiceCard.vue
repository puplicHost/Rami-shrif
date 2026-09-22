<template>
  <div class="service-card-container">
    <!-- Desktop Grid Card View -->
    <div class="service-desktop-card">
      <div class="service-card-header">
        <div class="service-card-top-row">
          <span class="service-index">{{ indexNumber }}</span>
          <div class="service-icon-wrap">
            <component :is="serviceIcon" :size="24" :stroke-width="1.5" />
          </div>
        </div>
        <h3 class="service-title">{{ title }}</h3>
      </div>
      <p class="service-summary">{{ summary }}</p>
      <router-link :to="`/services/${slug}`" class="service-link">
        <span>اكتشف المزيد</span>
        <span class="link-arrow" aria-hidden="true">←</span>
      </router-link>
    </div>

    <!-- Mobile Accordion Item View -->
    <div class="service-accordion-item" :class="{ 'is-active': isOpen }">
      <button
        class="accordion-trigger"
        @click="$emit('toggle')"
        :aria-expanded="isOpen"
      >
        <span class="acc-title-wrap">
          <component :is="serviceIcon" :size="20" :stroke-width="1.5" class="acc-service-icon" />
          <span class="acc-index">{{ indexNumber }}</span>
          <span class="acc-title">{{ title }}</span>
        </span>
        <span class="acc-toggle-icon" :class="{ rotated: isOpen }">
          <ChevronDown :size="18" :stroke-width="2" />
        </span>
      </button>

      <div class="accordion-content" v-show="isOpen">
        <p class="acc-summary">{{ summary }}</p>
        <router-link :to="`/services/${slug}`" class="acc-cta-link">
          <span>التفاصيل الكاملة للخدمة</span>
          <span aria-hidden="true">←</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  MessageSquare,
  FileText,
  Gavel,
  Landmark,
  Building,
  ChevronDown
} from 'lucide-vue-next'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  indexNumber: {
    type: String,
    default: '01'
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])

const serviceIcon = computed(() => {
  switch (props.slug) {
    case 'consultation':
      return MessageSquare
    case 'contracts':
      return FileText
    case 'disputes':
      return Gavel
    case 'representation':
      return Landmark
    case 'corporate-support':
      return Building
    default:
      return FileText
  }
})
</script>

<style scoped>
/* Desktop View */
.service-desktop-card {
  display: none;
  background-color: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.25rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
  height: 100%;
  flex-direction: column;
}

@media (min-width: 768px) {
  .service-desktop-card {
    display: flex;
  }
  .service-accordion-item {
    display: none !important;
  }
}

.service-desktop-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: rgba(90, 52, 45, 0.3);
}

.service-card-header {
  margin-bottom: 1.25rem;
}

.service-card-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.service-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background-color: var(--color-cream);
  color: var(--color-brown);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.service-desktop-card:hover .service-icon-wrap {
  background-color: var(--color-brown);
  color: var(--color-white);
}

.acc-service-icon {
  color: var(--color-brown);
  flex-shrink: 0;
}

.service-index {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-brown);
  opacity: 0.8;
  display: block;
  margin-bottom: 0.5rem;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-navy);
  line-height: 1.4;
}

.service-summary {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-muted-text);
  margin-bottom: 2rem;
  flex-grow: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-brown);
  transition: gap var(--transition-fast);
}

.service-desktop-card:hover .service-link {
  gap: 0.75rem;
  color: var(--color-brown-light);
}

/* Mobile Accordion View */
.service-accordion-item {
  display: block;
  background-color: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-sm);
  margin-bottom: 0.75rem;
  overflow: hidden;
  transition: border-color var(--transition-fast);
}

.service-accordion-item.is-active {
  border-color: rgba(90, 52, 45, 0.4);
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.15rem 1.25rem;
  text-align: right;
  background: none;
  cursor: pointer;
}

.acc-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.acc-index {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-brown);
}

.acc-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-navy);
}

.acc-toggle-icon {
  color: var(--color-brown);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-normal);
}

.acc-toggle-icon.rotated {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-top: 1px dashed rgba(28, 41, 64, 0.08);
  margin-top: 0.25rem;
  padding-top: 1rem;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.acc-summary {
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--color-muted-text);
  margin-bottom: 1rem;
}

.acc-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-brown);
}
</style>
