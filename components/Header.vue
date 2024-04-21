<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Specialties',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('photos')
},
  {
  label: 'Gallery',
  to: '#photos',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('photos') && !activeHeadings.value.includes('testimonials')
},
  {
  label: 'Testimonials',
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('photos')
}, {
  label: 'FAQ',
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('faq')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#photos'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img class="header-image" src="~/assets/img/dc_homes_logo_small.png" />
    </template>

    <template #right>
      <UButton label="Contact Us" color="white" to="#contact" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <div class="bg-white dark:bg-gray-950 dark:bg-opacity-90 p-3">
        <UAsideLinks :links="links" />

        <UDivider class="my-6" />

        <UButton to="#contact" label="Contact Us" color="white" block class="mb-3" />
      </div>
    </template>
  </UHeader>
</template>

<style>
.header-image {
  width: 100%; /* Full width on smaller screens */
  max-width: 400px; /* Maximum width */
  height: auto; /* Maintain aspect ratio */
}

@media (min-width: 768px) {
  .header-image {
    width: 50%; /* Half width on larger screens */
  }
}
@media (max-width: 768px) {
  .header-image {
    width: 45%; /* Full width on smaller screens */
  }
}
</style>
