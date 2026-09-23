<template>
  <div class="step-item" :class="{ 'is-last': isLast }">
    <!-- Mobile Timeline Connector -->
    <div class="timeline-indicator" aria-hidden="true">
      <span class="timeline-dot"></span>
      <span v-if="!isLast" class="timeline-line"></span>
    </div>

    <div class="step-card-inner">
      <div class="step-header">
        <span class="step-number" aria-hidden="true">{{ number }}</span>
        <h3 class="step-title">{{ title }}</h3>
      </div>
      <p class="step-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isLast: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.step-item {
  position: relative;
  height: 100%;
}

/* Desktop Grid Appearance */
.step-card-inner {
  background: rgba(32, 47, 72, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 2.25rem 2rem;
  transition: transform var(--transition-normal), border-color var(--transition-normal), background-color var(--transition-normal), box-shadow var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.step-item:hover .step-card-inner {
  transform: translateY(-4px);
  background: rgba(32, 47, 72, 0.8);
  border-color: rgba(142, 90, 81, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.step-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.step-number {
  font-family: var(--font-display);
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1;
  color: #B26A5D;
  opacity: 0.9;
  letter-spacing: -0.02em;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.4;
}

.step-description {
  font-size: 0.925rem;
  line-height: 1.8;
  color: var(--color-silver);
  margin: 0;
}

/* Mobile Timeline Connector rules */
.timeline-indicator {
  display: none;
}

@media (max-width: 767px) {
  .step-item {
    display: block;
    height: 100%;
    padding-bottom: 0;
  }

  .timeline-indicator {
    display: none !important;
  }

  .step-card-inner {
    padding: 1.15rem 0.95rem;
    border-radius: var(--radius-sm);
    height: 100%;
  }

  .step-header {
    gap: 0.35rem;
    margin-bottom: 0.65rem;
  }

  .step-number {
    font-size: 1.55rem;
  }

  .step-title {
    font-size: 0.98rem;
    line-height: 1.35;
  }

  .step-description {
    font-size: 0.78rem;
    line-height: 1.6;
  }
}
</style>
