<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Características',
  to: '#features',
  icon: 'i-mdi-star-circle-outline',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Equipos',
  to: '#teams',
  icon: 'i-mdi-flag',
  active: activeHeadings.value.includes('teams') && !activeHeadings.value.includes('teams')
// }
//   label: 'Pricing',
//   to: '#pricing',
//   icon: 'i-heroicons-credit-card',
//   active: activeHeadings.value.includes('pricing') && !activeHeadings.value.includes('testimonials')
// }, {
//   label: 'Testimonials',
//   to: '#testimonials',
//   icon: 'i-heroicons-academic-cap',
//   active: activeHeadings.value.includes('testimonials')
}, {
  label: 'FAQ',
  to: '#faq',
  icon: 'i-mdi-help-circle-outline',
  active: activeHeadings.value.includes('faq')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#teams'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Master UPV Cup <UBadge label="1º Edición" variant="subtle" class="mb-0.5" />
    </template>

    <!-- <template #right>
      <UButton label="Sign in" color="white" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
    </template> -->

    <template #panel>
      <UAsideLinks :links="links" />

      <!-- <UDivider class="my-6" /> -->

      <!-- <UButton label="Sign in" color="white" block class="mb-3" /> -->
      <!-- <UButton label="Get started" block /> -->
    </template>
  </UHeader>
</template>
