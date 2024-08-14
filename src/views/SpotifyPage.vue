<template>
  <AppContainer>
    <SpotifyShow />
  </AppContainer>
</template>

<script setup>
import { useSpotifyStore } from '../stores/useSpotifyStore.js'
import SpotifyShow from '../components/spotify/SpotifyShow.vue'

const spotifyStore = useSpotifyStore()
</script>
