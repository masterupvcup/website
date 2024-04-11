<script setup lang="ts">
// await useAsyncData(() => queryContent('/').findOne())
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <template #top>
        <div class="-z-[1] absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]"><div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-primary opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-yellow-500/30 dark:to-primary/30 dark:opacity-100"><svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"><defs><pattern id=":S1:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:S1:)"></rect><svg x="-12" y="4" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="288" y="168"></rect><rect stroke-width="0" width="73" height="57" x="144" y="56"></rect><rect stroke-width="0" width="73" height="57" x="504" y="168"></rect><rect stroke-width="0" width="73" height="57" x="720" y="336"></rect></svg></svg></div><svg viewBox="0 0 1113 440" aria-hidden="true" class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"><path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path></svg></div>
        <div :style="{
          width: '25rem',
          margin: '-6rem auto 1rem'
        }">
          <img :src="page.hero.image" alt="Master UPV Cup" />
        </div>
      </template>

      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <Hero :image="page.hero.mainImage" />

      <ULandingLogos :title="page.logos.title" align="center" class="align-middle items-center" >
        <a v-for="(logo, index) in page.logos.logos" :key="index" :class="[logo.class || 'w-24 lg:w-28']" class="flex-shrink-0" :href="logo.link" target="_blank"><img :src="logo.image" :style="{width:'100%'}" :alt="logo.title" /></a>
      </ULandingLogos>
      <div class="flex items-center align-middle p-6 pt-0 justify-center"><UButton :to="page.logos.details.link" target="_blank" color="primary">{{ page.logos.details.title }}</UButton></div>
    </ULandingHero>

    <ULandingSection :title="page.features.title" :description="page.features.description" :headline="page.features.headline">
      <UPageGrid id="features" class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
    class="bg-primary/10 dark:bg-primary-400 dark:bg-opacity-20"
     :title="page.teams.title" :description="page.teams.description">
      <ULandingLogos id="teams" align="center" class="align-middle items-center" >
        <a v-for="(logo, index) in page.teams.logos" :key="index" :class="[logo.class || 'w-24 lg:w-28']" class="flex-shrink-0" :href="logo.link" target="_blank">
          <div>
            <img :src="logo.image" :style="{width:'100%'}" :alt="logo.title" />
            <span>{{ logo.title }}</span>
          </div>
        </a>
      </ULandingLogos>
    </ULandingSection>

    <!-- <ULandingSection :title="page.pricing.title" :description="page.pricing.description" :headline="page.pricing.headline">
      <UPricingGrid id="pricing" compact class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index" v-bind="plan" />
      </UPricingGrid>
    </ULandingSection> -->

    <!-- <ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns id="testimonials" class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection> -->

    <!-- <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection> -->

    <ULandingSection
      :headline="page.player.headline"
      :title="page.player.title"
      :description="page.player.description"
      class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <Player :src="page.player.player.src" :image="page.player.player.image" :alt="page.player.player.alt" />
    </ULandingSection>

    <ULandingSection id="faq" :title="page.faq.title" :description="page.faq.description" class="scroll-mt-[var(--header-height)]">
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6'
            }
          }
        }"
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
