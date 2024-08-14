<template>
  <div
    class="bg-white px-4 py-2.5 md:px-12 md:py-2.5 flex flex-row flex-wrap justify-between shadow-[0px_-0.5px_2px_1px_#b3b3b3]"
  >
    <div class="h-full flex-3 font-roboto">
      <router-link to="/"> <p class="text-2xl">dyl·nyko</p> </router-link>
    </div>

    <div class="flex-1 flex justify-end">
      <div v-for="link in headerLinks" :key="link.link" class="flex no-underline pl-4 my-auto">
        <mdicon class="mr-2" :aria-label="link.title" :name="link.icon" />
        <a :href="link.link">{{ link.title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const headerLinks = computed({
  get() {
    return []
  }
})
</script>
