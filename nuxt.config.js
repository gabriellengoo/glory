const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://glory-delta-two.vercel.app'
const siteTitle = 'Daniel & Glory | Wedding Invitation'
const siteDescription = 'Join Daniel Owusu and Glory Igwe for their wedding celebration on 10th September 2026 at 3pm in London.'
const socialDescription = 'The beginning of forever starts here. Celebrate Daniel Owusu and Glory Igwe on 10th September 2026 at 3pm in London.'
const socialImage = `${siteUrl}/images/intro-screen.png`

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 3
  },
  experimental: {
    appManifest: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: siteTitle,
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'description',
          content: siteDescription
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'theme-color',
          content: '#fffaf1'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:locale',
          content: 'en_GB'
        },
        {
          property: 'og:url',
          content: siteUrl
        },
        {
          property: 'og:title',
          content: siteTitle
        },
        {
          property: 'og:description',
          content: socialDescription
        },
        {
          property: 'og:image',
          content: socialImage
        },
        {
          property: 'og:image:secure_url',
          content: socialImage
        },
        {
          property: 'og:image:type',
          content: 'image/png'
        },
        {
          property: 'og:image:width',
          content: '1044'
        },
        {
          property: 'og:image:height',
          content: '783'
        },
        {
          property: 'og:image:alt',
          content: 'Deep green Daniel and Glory wedding invitation envelope'
        },
        {
          property: 'og:site_name',
          content: 'Daniel & Glory Wedding'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: siteTitle
        },
        {
          name: 'twitter:description',
          content: socialDescription
        },
        {
          name: 'twitter:image',
          content: socialImage
        },
        {
          name: 'twitter:image:alt',
          content: 'Deep green Daniel and Glory wedding invitation envelope'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: siteUrl
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Antic+Didone&family=Cherry+Bomb+One&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Caslon+Text:ital@1&family=Pinyon+Script&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Daniel Owusu and Glory Igwe Wedding',
            description: siteDescription,
            image: socialImage,
            startDate: '2026-09-10T15:00:00+01:00',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Wedding venue',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '341-351 High St',
                addressLocality: 'London',
                postalCode: 'E15 4QZ',
                addressCountry: 'GB'
              }
            },
            organizer: {
              '@type': 'Person',
              name: 'Daniel Owusu and Glory Igwe'
            }
          })
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
