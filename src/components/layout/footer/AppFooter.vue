<template>
  <footer
    id="footer"
    class="bg-white px-4 py-8 md:px-12 flex flex-row flex-wrap justify-between shadow-[0px_-0.5px_2px_1px_#b3b3b3]"
  >
    <div class="h-full md:order-first w-full mb-2 inline-flex">
      <div>
        <h6>dyl·nyko</h6>
      </div>
      <div class="ml-auto mt-auto">
        <p class="text-sm">dylan nykolyszyn - web development</p>
      </div>
    </div>

    <div class="items-center flex order-2 md:order-first mt-4">
      <div
        v-for="social in socials"
        :key="social.name"
        class="inline-block h-6 w-6 [&:not(:last-child)]:mr-8"
      >
        <a :aria-label="social.name" :href="social.url" target="_blank">
          <mdicon :alt="social.name" :name="social.icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useSocialStore } from '../../../stores/useSocialStore.js'

const socialsStore = useSocialStore()

const socials = socialsStore.getSocialLinks

const year = computed({
  get() {
    return new Date().getFullYear()
  }
})
</script>
