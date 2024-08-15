<template>
  <AppContainer>
    <SpotifyShow />
  </AppContainer>
</template>

<script setup>
import { useSpotifyStore } from '../stores/spotifyStore.js'
import SpotifyShow from '../components/spotify/SpotifyShow.vue'

const spotifyStore = useSpotifyStore()
</script>
