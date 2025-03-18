<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Awesome Travel - Your Reliable Travel Agency in Kyrgyzstan',
  meta: [
    { name: 'description', content: 'Discover amazing journeys with Awesome Travel, your reliable travel agency in Kyrgyzstan. We offer tours for every taste, from peaceful family vacations to extreme adventures.' },
    { property: 'og:title', content: 'Awesome Travel - Your Reliable Travel Agency in Kyrgyzstan' },
    { property: 'og:description', content: 'Discover amazing journeys with Awesome Travel, your reliable travel agency in Kyrgyzstan. We offer tours for every taste, from peaceful family vacations to extreme adventures.' },
    { property: 'og:image', content: 'https://example.com/image.jpg' },
    { property: 'og:url', content: 'https://example.com/current-page' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Awesome Travel - Your Reliable Travel Agency in Kyrgyzstan' },
    { name: 'twitter:description', content: 'Discover amazing journeys with Awesome Travel, your reliable travel agency in Kyrgyzstan. We offer tours for every taste, from peaceful family vacations to extreme adventures.' },
    { name: 'twitter:image', content: 'https://example.com/image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/current-page' }
  ]
})
</script>
