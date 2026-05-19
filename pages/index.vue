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
      <span class="open-label-desktop">Click to open</span>
      <span class="open-label-mobile">Tap to open</span>
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
          <div class="logo-pair glass-logo">
            <img class="main-logo" src="/images/logo.png" alt="Daniel and Glory monogram" />
          </div>
          <p class="script-line">The beginning of forever starts here</p>
          <div class="ornament name-divider" aria-hidden="true">
            <span class="divider-diamond"></span>
          </div>
          <h1 id="intro-title">
            <span>Daniel Owusu</span>
            <span><em>&amp;</em> Glory Igwe</span>
          </h1>
          <div class="ornament name-divider name-divider-heart" aria-hidden="true">
            <svg class="ornament-heart" viewBox="0 0 16 16" fill="none">
              <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="currentColor" />
            </svg>
          </div>
          <div class="intro-details" aria-label="Wedding summary">
            <span class="date-detail">
              <svg class="detail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              10th <small>September 2026</small>
            </span>
            <span class="time-detail">
              <svg class="detail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 6V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.24 16.24L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              3pm
            </span>
            <span class="location-detail">
              <svg class="detail-icon" viewBox="0 0 64 64" aria-hidden="true">
                <path fill="currentColor" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
              </svg>
              341-351 High St, London E15 4QZ
            </span>
          </div>
          <a class="rsvp-anchor glass-button" href="#rsvp">RSVP</a>
          <div class="ornament ornament-bottom" aria-hidden="true">
            <svg class="ornament-heart" viewBox="0 0 16 16" fill="none">
              <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="currentColor" />
            </svg>
          </div>
          <a class="wedding-details-link" href="#details">
            <span aria-hidden="true"></span>
            <strong>Wedding details</strong>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>

    <section id="details" class="details section-reveal" aria-labelledby="details-title">
      <div class="details-layout">
        <img class="floating-flower details-flower" src="/images/purple-flower.png" alt="" loading="lazy" />
        <img class="floating-flower details-flower-secondary" src="/images/green-flower.webp" alt="" loading="lazy" />
        <div class="details-panel">
          <div class="details-heading-row">
            <div>
              <p class="eyebrow">Wedding details</p>
              <h2 id="details-title">Join us in London</h2>
            </div>
            <figure class="details-couple-frame" aria-label="Daniel and Glory wedding portrait">
              <img src="/images/couple.png" alt="Daniel and Glory wedding portrait" loading="lazy" />
            </figure>
          </div>
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
            If you wish to bless us with a gift of financial support, Revolut will let you enter your chosen amount and send it securely.
          </p>
          <div class="account-details">
            <p><span>Name</span><strong>Daniel Owusu</strong></p>
            <p><span>Sort code</span><strong>04-29-09</strong></p>
            <p><span>Account number</span><strong>01566385</strong></p>
          </div>
          <div class="gift-actions">
            <button class="copy-button glass-button" type="button" @click="copyAccountDetails">
              {{ copyMessage || 'Copy account details' }}
            </button>
            <a class="copy-button glass-button" :href="revolutPayUrl" target="_blank" rel="noopener" @click="showGiftModal = false">
              Open Revolut Pay
            </a>
          </div>
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
const revolutPayUrl = 'https://revolut.me/danielecma'
let observer
let introTimer

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

  introTimer = window.setTimeout(openInvite, 1000)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.clearTimeout(introTimer)
})

function openInvite() {
  if (!showIntroScreen.value || introScreenLeaving.value) return

  window.scrollTo(0, 0)
  introScreenLeaving.value = true

  window.setTimeout(() => {
    showIntroScreen.value = false
  }, 420)
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
  const details = 'Daniel Owusu\nSort code: 04-29-09\nAccount number: 01566385'

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
