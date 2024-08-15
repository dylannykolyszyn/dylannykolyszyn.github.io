<template>
  <div class="mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      Your Spotify Top {{ spotifyStore.preferences.type === 'tracks' ? 'Tracks' : 'Artists' }}
    </h1>
    <div :class="[spotifyStore.auth.isAuthenticated ? '' : 'blur-sm']">
      <div class="flex space-x-4 mb-6">
        <AppButton
          @click="spotifyStore.fetchTopItems('tracks')"
          :theme="spotifyStore.preferences.type == 'tracks' ? 'primary' : 'secondary'"
        >
          Top Tracks
        </AppButton>
        <AppButton
          :theme="spotifyStore.preferences.type == 'artists' ? 'primary' : 'secondary'"
          @click="spotifyStore.fetchTopItems('artists')"
        >
          Top Artists
        </AppButton>
      </div>
      <div class="flex space-x-4 mb-6">
        <AppButton
          v-for="range in spotifyStore.timeRanges"
          :key="range.value"
          @click="spotifyStore.setTimeRange(range.value)"
          :theme="spotifyStore.preferences.timeRange == range.value ? 'primary' : 'secondary'"
        >
          {{ range.label }}
        </AppButton>
      </div>
    </div>

    <div class="relative">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        :class="[
          !spotifyStore.auth.isAuthenticated ? 'blur-lg' : '',
          spotifyStore.data.loading ? 'blur-lg' : '',
          spotifyStore.data.error ? 'blur-lg' : ''
        ]"
      >
        <SpotifyCard v-for="item in spotifyStore.data.topItems" :key="item.id" :item="item" />
      </div>
      <div
        class="absolute top-12 w-full content-center"
        v-if="!spotifyStore.auth.isAuthenticated && !spotifyStore.data.error"
      >
        <SpotifyAuth />
      </div>
      <div class="absolute top-12 w-full content-center" v-if="spotifyStore.data.error">
        <SpotifyError />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useSpotifyStore } from '../../stores/spotifyStore.js'
import SpotifyAuth from './SpotifyAuth.vue'
import SpotifyError from './SpotifyError.vue'
import SpotifyCard from './SpotifyCard.vue'

const spotifyStore = useSpotifyStore()

onMounted(() => {
  if (spotifyStore.auth.isAuthenticated) {
    spotifyStore.fetchTopItems('tracks')
  }
})

watch(
  () => spotifyStore.auth.isAuthenticated,
  (newValue) => {
    if (newValue) {
      spotifyStore.fetchTopItems('tracks')
    }
  }
)
</script>
