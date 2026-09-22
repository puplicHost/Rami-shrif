<template>
  <div class="page-wrapper contact-page">
    <!-- Page Hero -->
    <section class="page-hero bg-navy">
      <div class="container page-hero-container">
        <SectionLabel text="تواصل معنا" theme="dark" />
        <h1 class="display-title page-title">ابدأ بمناقشة ملفك القانوني</h1>
        <p class="body-lead page-lead">
          يسعدنا استقبال استفساراتكم وتحديد مواعيد الاستشارات القانونية في مقر المؤسسة أو عن بُعد.
        </p>
      </div>
    </section>

    <!-- Main Contact & Form Section -->
    <section class="section bg-white fade-in-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Form Column -->
          <div class="form-container-card">
            <h2 class="form-heading">نموذج حجز استشارة قانونية</h2>
            <p class="form-subtext">يرجى ملء البيانات التالية بدقة، وسيتواصل معكم المستشار المختص خلال 24 ساعة عمل.</p>

            <!-- Success Message Notification -->
            <transition name="fade">
              <div v-if="submitted" class="success-banner" role="alert">
                <div class="success-icon">✓</div>
                <div>
                  <h3 class="success-title">تم استلام طلب الاستشارة بنجاح</h3>
                  <p class="success-body">
                    شكراً لتواصلكم مع مؤسسة رامي شريف للمحاماة. تم تسجيل بيانات ملفكم بسرية تامة، وسيقوم فريقنا بمراجعة الوقائع والتواصل معكم هاتفياً لتحديد موعد الجلسة الاستشارية.
                  </p>
                  <button class="btn btn-secondary-light btn-sm mt-3" @click="resetForm">
                    إرسال طلب استشارة آخر
                  </button>
                </div>
              </div>
            </transition>

            <!-- Static Contact Form -->
            <form v-if="!submitted" @submit.prevent="handleSubmit" class="consultation-form" novalidate>
              <div class="form-group">
                <label for="name" class="form-label">الاسم الكامل <span class="required-star">*</span></label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  :class="{ 'has-error': errors.name }"
                  placeholder="الاسم الثلاثي"
                  required
                />
                <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone" class="form-label">رقم الهاتف <span class="required-star">*</span></label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    dir="ltr"
                    class="form-input"
                    :class="{ 'has-error': errors.phone }"
                    placeholder="010XXXXXXXX"
                    required
                  />
                  <span v-if="errors.phone" class="field-error">{{ errors.phone }}</span>
                </div>

                <div class="form-group">
                  <label for="clientType" class="form-label">صفة مقدم الطلب</label>
                  <select id="clientType" v-model="form.clientType" class="form-select">
                    <option value="individual">فرد</option>
                    <option value="corporate">شركة / مؤسسة</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="topic" class="form-label">موضوع الاستشارة <span class="required-star">*</span></label>
                <select
                  id="topic"
                  v-model="form.topic"
                  class="form-select"
                  :class="{ 'has-error': errors.topic }"
                  required
                >
                  <option value="" disabled>اختر تخصص القضية أو الاستشارة</option>
                  <option value="civil">القانون المدني والمنازعات العقارية</option>
                  <option value="commercial">القانون التجاري ومنازعات الشركات</option>
                  <option value="contracts">صياغة ومراجعة العقود والاتفاقيات</option>
                  <option value="financial">المنازعات المالية والشيكات</option>
                  <option value="personal">الأحوال الشخصية والتركات</option>
                  <option value="corporate">دعم وتأسيس الشركات</option>
                  <option value="other">موضوع قانوني آخر</option>
                </select>
                <span v-if="errors.topic" class="field-error">{{ errors.topic }}</span>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">تفاصيل موجزة عن الموقف أو الاستفسار <span class="required-star">*</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="form-textarea"
                  :class="{ 'has-error': errors.message }"
                  placeholder="يرجى كتابة ملخص موجز لأهم الوقائع دون الحاجة لإرفاق مستندات حالياً..."
                  required
                ></textarea>
                <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
              </div>

              <div class="form-privacy-note">
                <span>🔒 كافة البيانات تخضع للسرية المهنية المطلقة المنصوص عليها في قانون المحاماة.</span>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">جاري الإرسال...</span>
                <span v-else>إرسال طلب الاستشارة</span>
              </button>
            </form>
          </div>

          <!-- Contact Details Info Column -->
          <div class="contact-info-panel">
            <div class="info-card">
              <h3 class="info-card-title">مقر المؤسسة وقنوات التواصل</h3>
              <div class="divider-brown"></div>

              <div class="info-items-list">
                <div class="info-block">
                  <span class="info-block-icon">
                    <Building2 :size="20" :stroke-width="1.75" />
                  </span>
                  <div>
                    <strong class="info-title">المكتب الرئيسي:</strong>
                    <p class="info-desc">القاهرة الجديدة — التجمع الخامس — جمهورية مصر العربية</p>
                  </div>
                </div>

                <div class="info-block">
                  <span class="info-block-icon">
                    <Phone :size="20" :stroke-width="1.75" />
                  </span>
                  <div>
                    <strong class="info-title">الهاتف المباشر:</strong>
                    <p class="info-desc" dir="ltr">+20 100 000 0000</p>
                    <p class="info-subdesc">خدمة الاستقبال الهاتفي وتنسيق المواعيد</p>
                  </div>
                </div>

                <div class="info-block">
                  <span class="info-block-icon">
                    <Mail :size="20" :stroke-width="1.75" />
                  </span>
                  <div>
                    <strong class="info-title">البريد الإلكتروني:</strong>
                    <p class="info-desc">info@ramisherif-law.com</p>
                  </div>
                </div>

                <div class="info-block">
                  <span class="info-block-icon">
                    <Clock :size="20" :stroke-width="1.75" />
                  </span>
                  <div>
                    <strong class="info-title">أوقات العمل واستقبال العملاء:</strong>
                    <p class="info-desc">الأحد – الخميس: 9:00 صباحاً – 6:00 مساءً</p>
                    <p class="info-subdesc">الجمعة والسبت: عطلة أسبوعية (المقابلات بحجز مسبق)</p>
                  </div>
                </div>
              </div>

              <!-- Map Placeholder Box -->
              <div class="map-placeholder">
                <div class="map-marker-pin">
                  <MapPin :size="28" :stroke-width="1.75" />
                </div>
                <div class="map-text">موقع المؤسسة في قلب القاهرة الجديدة</div>
                <span class="map-sub">سهولة الوصول مع توافر مواقف سيارات خاصة للعملاء</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {
  Building2,
  Phone,
  Mail,
  Clock,
  MapPin
} from 'lucide-vue-next'
import SectionLabel from '@/components/ui/SectionLabel.vue'

const form = reactive({
  name: '',
  phone: '',
  clientType: 'individual',
  topic: '',
  message: ''
})

const errors = reactive({
  name: '',
  phone: '',
  topic: '',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const validateForm = () => {
  let valid = true
  errors.name = ''
  errors.phone = ''
  errors.topic = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'يرجى إدخال الاسم الكريم'
    valid = false
  } else if (form.name.trim().length < 3) {
    errors.name = 'الاسم يجب ألا يقل عن 3 أحرف'
    valid = false
  }

  if (!form.phone.trim()) {
    errors.phone = 'يرجى إدخال رقم الهاتف'
    valid = false
  } else if (!/^[0-9+()-\s]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'يرجى إدخال رقم هاتف صحيح'
    valid = false
  }

  if (!form.topic) {
    errors.topic = 'يرجى اختيار موضوع الاستشارة'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = 'يرجى كتابة تفاصيل موجزة عن موضوع الاستشارة'
    valid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'يرجى كتابة تفاصيل أوضح (10 أحرف على الأقل)'
    valid = false
  }

  return valid
}

const handleSubmit = () => {
  if (!validateForm()) return

  isSubmitting.value = true

  // Simulate smooth submission handling
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
  }, 600)
}

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.clientType = 'individual'
  form.topic = ''
  form.message = ''
  submitted.value = false
}
</script>

<style scoped>
.page-hero {
  padding-top: 8rem;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.page-hero-container {
  max-width: 900px;
}

.page-title {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
}

.page-lead {
  max-width: 65ch;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1.35fr 1fr;
    gap: 4rem;
  }
}

.form-container-card {
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.75rem 2.25rem;
  box-shadow: var(--shadow-sm);
}

.form-heading {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 0.5rem;
}

.form-subtext {
  font-size: 0.925rem;
  color: var(--color-muted-text);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-navy);
}

.required-star {
  color: #B26A5D;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid #D5DDE5;
  border-radius: var(--radius-sm);
  background-color: #FAFCFE;
  color: var(--color-dark-text);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-brown);
  background-color: #FFFFFF;
  box-shadow: 0 0 0 3px rgba(90, 52, 45, 0.12);
}

.form-input.has-error,
.form-select.has-error,
.form-textarea.has-error {
  border-color: #DC2626;
  background-color: #FEF2F2;
}

.field-error {
  font-size: 0.8rem;
  color: #DC2626;
  font-weight: 500;
}

.form-privacy-note {
  font-size: 0.825rem;
  color: var(--color-muted-text);
  padding: 0.5rem 0;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
}

/* Success Banner */
.success-banner {
  background: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.success-icon {
  width: 38px;
  height: 38px;
  background-color: #16A34A;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.success-title {
  color: #166534;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.success-body {
  color: #14532D;
  font-size: 0.925rem;
  line-height: 1.75;
  margin: 0;
}

.mt-3 {
  margin-top: 1rem;
}

/* Contact Details Info Card */
.info-card {
  background: var(--color-cream);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-md);
  padding: 2.75rem 2.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.info-card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-navy);
}

.info-items-list {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-bottom: 2rem;
}

.info-block {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-block-icon {
  font-size: 1.35rem;
  margin-top: 2px;
}

.info-title {
  display: block;
  font-size: 0.95rem;
  color: var(--color-navy);
  margin-bottom: 0.2rem;
}

.info-desc {
  font-size: 0.9rem;
  color: var(--color-dark-text);
  margin: 0;
}

.info-subdesc {
  font-size: 0.8rem;
  color: var(--color-muted-text);
  margin: 0.2rem 0 0 0;
}

.map-placeholder {
  margin-top: auto;
  background: var(--color-white);
  border: 1px solid var(--color-cream-border);
  border-radius: var(--radius-sm);
  padding: 1.75rem;
  text-align: center;
}

.map-marker-pin {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.map-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.35rem;
}

.map-sub {
  font-size: 0.825rem;
  color: var(--color-muted-text);
  display: block;
}
</style>
