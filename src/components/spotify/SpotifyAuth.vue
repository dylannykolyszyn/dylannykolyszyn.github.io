<template>
  <div class="bg-white w-fit p-6 rounded-lg mx-auto text-center shadow-md">
    <h1 class="text-3xl font-bold mb-6">Your Spotify Charts</h1>
    <p class="mb-6">Connect your Spotify account to view your top artists and tracks.</p>
    <AppButton @click="spotifyStore.initiateAuth" theme="primary" icon="spotify">
      Connect to Spotify
    </AppButton>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSpotifyStore } from '../../stores/useSpotifyStore.js'

const spotifyStore = useSpotifyStore()

onMounted(() => {
  const urlParams = new URLSearchParams(window?.location?.hash?.split('?')?.[1]
  const code = urlParams.get('code')

  if (code) {
    spotifyStore.getAccessToken(code)
  } else {
    spotifyStore.checkAuth()
  }
})
</script>
