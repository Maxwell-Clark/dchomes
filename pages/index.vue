<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  name: string().required('Required'),
  message: string().required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  name: undefined,
  message: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}

</script>

<template>
  <div>

    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

<!--      <Placeholder />-->

<!--      <ULandingLogos :title="page.logos.title" align="center">-->
<!--        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon" class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />-->
<!--      </ULandingLogos>-->
    </ULandingHero>

    <ULandingSection id="features" :title="page.features.title" :description="page.features.description" :headline="page.features.headline">
      <UPageGrid class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection id="photos" :title="page.gallery.title" :description="page.gallery.description" :headline="page.gallery.headline">
      <UCarousel v-slot="{ item }" :items="page.gallery.pictures" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
        <img :src="item.url" class="w-full" draggable="false" :alt="item.alt">
      </UCarousel>
    </ULandingSection>

    <ULandingSection id="testimonials" :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns >
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

    <ULandingSection id="contact" :title="page.contact.title" :description="page.contact.description" class=" flex flex-col w-full justify-center items-center bg-gray-50 dark:bg-gray-400 dark:bg-opacity-10">
      <UForm :schema="schema" :state="state" class="space-y-4 w-full flex flex-col justify-center" @submit="onSubmit">
        <UFormGroup label="Your Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Your Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Message" name="message">
          <UTextarea v-model="state.message" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </ULandingSection>
  </div>
</template>
