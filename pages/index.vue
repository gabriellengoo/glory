<template>
  <main class="invite-page">
    <button
      v-if="showIntroScreen"
      class="opening-screen"
      :class="{ 'is-leaving': introScreenLeaving }"
      type="button"
      aria-label="Open Daniel and Glory wedding invitation"
      @click="openInvite"
    >
      <img class="opening-envelope" src="/images/intro-screen.png" alt="Deep green envelope invitation" />
      <span>Click to open</span>
    </button>

    <section class="intro section-reveal" aria-labelledby="intro-title">
      <div class="floating-florals" aria-hidden="true">
        <img class="floating-flower green-flower" src="/images/green-flower.webp" alt="" />
        <img class="floating-flower purple-flower" src="/images/purple-flower.png" alt="" />
        <svg class="leaf-spray leaf-spray-left" viewBox="0 0 180 280" fill="none">
          <path d="M112 8C54 65 42 128 78 196c14 26 16 48 5 76" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path v-for="leaf in leafShapes" :key="leaf" :d="leaf" fill="currentColor" opacity=".42" />
        </svg>
        <svg class="leaf-spray leaf-spray-right" viewBox="0 0 180 280" fill="none">
          <path d="M68 8c58 57 70 120 34 188-14 26-16 48-5 76" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path v-for="leaf in leafShapes" :key="`r-${leaf}`" :d="leaf" fill="currentColor" opacity=".32" />
        </svg>
      </div>

      <div class="intro-grid">
        <div class="intro-copy">
          <div class="logo-pair">
            <img class="main-logo" src="/images/logo.png" alt="Daniel and Glory monogram" />
            <img class="couple-image" src="/images/couple.png" alt="Traditional wedding couple illustration" />
          </div>
          <p class="script-line">The beginning of forever starts here</p>
          <h1 id="intro-title">Daniel Owusu &amp; Glory Igwe</h1>
          <div class="intro-details" aria-label="Wedding summary">
            <span>10th September 2026</span>
            <span>3pm</span>
            <span>341-351 High St, London E15 4QZ</span>
          </div>
          <a class="rsvp-anchor" href="#rsvp">RSVP</a>
        </div>
      </div>
    </section>

    <section class="details section-reveal" aria-labelledby="details-title">
      <div class="details-layout">
        <img class="floating-flower details-flower" src="/images/purple-flower.png" alt="" loading="lazy" />
        <div class="details-panel">
          <p class="eyebrow">Wedding details</p>
          <h2 id="details-title">Join us in London</h2>
          <dl>
            <div>
              <dt>Date</dt>
              <dd>10th September 2026</dd>
            </div>
            <div>
              <dt>Start time</dt>
              <dd>3pm</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>341-351 High St, London E15 4QZ</dd>
            </div>
          </dl>
          <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=341-351%20High%20St%2C%20London%20E15%204QZ" target="_blank" rel="noopener">
            View on Map
          </a>
        </div>

        <img class="detail-card-image" src="/images/invite-card.png" alt="Wedding invitation detail card" loading="lazy" />
      </div>
    </section>

    <section id="rsvp" class="rsvp section-reveal" aria-labelledby="rsvp-title">
      <div class="rsvp-heading">
        <p class="eyebrow">Kindly reply</p>
        <h2 id="rsvp-title">RSVP</h2>
      </div>

      <form class="rsvp-form" action="https://formspree.io/f/mkoykpbq" method="POST" @submit.prevent="submitRsvp">
        <div class="question-card is-active" :style="{ '--delay': '0ms' }">
          <p class="question-title">Will you attend?</p>
          <div class="choice-grid">
            <input v-model="form.attendance" type="hidden" name="attendance" required />
            <button
              class="choice-button"
              :class="{ 'is-selected': form.attendance === 'Joyfully accept' }"
              type="button"
              @click="form.attendance = 'Joyfully accept'"
            >
              Joyfully accept
            </button>
            <button
              class="choice-button"
              :class="{ 'is-selected': form.attendance === 'Regretfully decline' }"
              type="button"
              @click="form.attendance = 'Regretfully decline'"
            >
              Regretfully decline
            </button>
          </div>
          <button v-if="form.attendance === 'Regretfully decline'" class="text-button" type="button" @click="showGiftModal = true">
            View gift blessing
          </button>
        </div>

        <div v-if="step >= 2" class="question-card is-active" :style="{ '--delay': '70ms' }">
          <label>
            Guest name(s)
            <input v-model="form.guestNames" name="guest_names" type="text" placeholder="Full names of everyone attending" required />
          </label>
        </div>

        <div v-if="step >= 3" class="question-card field-pair is-active" :style="{ '--delay': '140ms' }">
          <label>
            Contact number
            <input v-model="form.contactNumber" name="contact_number" type="tel" required />
          </label>
          <label>
            Email
            <input v-model="form.email" name="email" type="email" required />
          </label>
        </div>

        <div v-if="step >= 4" class="question-card is-active" :style="{ '--delay': '210ms' }">
          <label>
            Message
            <textarea v-model="form.message" name="message" rows="4" placeholder="Leave a message for the couple for their new beginning"></textarea>
          </label>
        </div>

        <div v-if="step >= 5" class="submit-row is-active" :style="{ '--delay': '280ms' }">
          <button class="submit-button" type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send RSVP' }}
          </button>
          <p v-if="submitMessage" class="submit-message" role="status">{{ submitMessage }}</p>
        </div>
      </form>
    </section>

    <footer class="site-footer">
      <span>Daniel &amp; Glory</span>
      <span>10th September 2026</span>
    </footer>

    <button
      class="gift-fab"
      type="button"
      aria-label="Show gift blessing"
      @mouseenter="showGiftModal = true"
      @focus="showGiftModal = true"
      @click="showGiftModal = true"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 7h-3.2c.44-.53.7-1.2.7-1.9A3.1 3.1 0 0 0 12 3.2 3.1 3.1 0 0 0 6.5 5.1c0 .7.26 1.37.7 1.9H4a1 1 0 0 0-1 1v3h1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9h1V8a1 1 0 0 0-1-1Zm-6.95-1.9a1.55 1.55 0 1 1 1.55 1.55h-2.1V5.1h.55Zm-5.1 0A1.55 1.55 0 0 1 11 5.1v1.55H8.95A1.55 1.55 0 0 1 7.4 5.1ZM5 9h6v2H5V9Zm1 4h5v6H6v-6Zm12 6h-5v-6h5v6Zm1-8h-6V9h6v2Z" />
      </svg>
    </button>

    <Teleport to="body">
      <div v-if="showGiftModal" class="gift-popover-layer" role="presentation">
        <section class="gift-modal" role="dialog" aria-modal="true" aria-labelledby="gift-title">
          <button class="close-button" type="button" aria-label="Close gift blessing" @click="showGiftModal = false">Close</button>
          <p class="eyebrow">Gift blessing</p>
          <h2 id="gift-title">With gratitude</h2>
          <p>
            Your presence at our wedding is the greatest gift of all.
            However, if you wish to bless us with a gift of financial support, we would be deeply grateful.
          </p>
          <div class="account-details">
            <p><span>Name</span><strong>Glory Igwe</strong></p>
            <p><span>Sort code</span><strong>04-00-75</strong></p>
            <p><span>Account number</span><strong>77540778</strong></p>
          </div>
          <button class="copy-button" type="button" @click="copyAccountDetails">
            {{ copyMessage || 'Copy account details' }}
          </button>
        </section>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

const leafShapes = [
  'M70 58c-26-10-42 0-53 20 24 9 42 3 53-20Z',
  'M112 94c-2-28 12-42 35-49 2 27-9 44-35 49Z',
  'M64 158c-28-7-43 8-51 30 25 5 43-5 51-30Z',
  'M105 204c1-26 16-39 39-43-1 25-14 41-39 43Z'
]

const form = reactive({
  attendance: '',
  guestNames: '',
  contactNumber: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const showGiftModal = ref(false)
const showIntroScreen = ref(true)
const introScreenLeaving = ref(false)
const copyMessage = ref('')
let observer

const step = computed(() => {
  if (!form.attendance) return 1
  if (!form.guestNames.trim()) return 2
  if (!form.contactNumber.trim() || !form.email.trim()) return 3
  return 5
})

watch(
  () => form.attendance,
  () => {
    submitMessage.value = ''
  }
)

onMounted(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }

  window.scrollTo(0, 0)

  const revealItems = document.querySelectorAll('.section-reveal')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.16 }
  )

  revealItems.forEach((item) => observer.observe(item))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

function openInvite() {
  window.scrollTo(0, 0)
  introScreenLeaving.value = true

  window.setTimeout(() => {
    showIntroScreen.value = false
  }, 720)
}

async function submitRsvp(event) {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        Accept: 'application/json'
      }
    })

    if (!response.ok) throw new Error('Formspree submission failed')

    submitMessage.value = 'Thank you. Your RSVP has been received.'
    showGiftModal.value = true
    event.target.reset()
    form.attendance = ''
    form.guestNames = ''
    form.contactNumber = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    submitMessage.value = 'Please replace the Formspree endpoint before sending RSVPs.'
  } finally {
    isSubmitting.value = false
  }
}

async function copyAccountDetails() {
  const details = 'Glory Igwe\nSort code: 04-00-75\nAccount number: 77540778'

  try {
    await navigator.clipboard.writeText(details)
    copyMessage.value = 'Copied'
  } catch (error) {
    copyMessage.value = 'Copy unavailable'
  }

  window.setTimeout(() => {
    copyMessage.value = ''
  }, 1800)
}
</script>
