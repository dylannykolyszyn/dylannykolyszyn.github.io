<template>
  <div class="bg-white w-fit p-6 rounded-lg mx-auto text-center shadow-md">
    <h1 class="text-3xl font-bold mb-6">Your Spotify Charts</h1>
    <p class="mb-6">{{ spotifyStore.data.error }}.</p>
    <AppButton @click="spotifyStore.initiateAuth" theme="primary" icon="spotify"> Retry </AppButton>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSpotifyStore } from '../../stores/spotifyStore.js'

const spotifyStore = useSpotifyStore()

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  if (code) {
    spotifyStore.getAccessToken(code)
  } else {
    spotifyStore.checkAuth()
  }
})
</script>
