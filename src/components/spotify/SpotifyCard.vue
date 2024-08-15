<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow">
    <img
      v-if="item.album?.images?.length"
      :src="item.album?.images[0]?.url"
      alt=""
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
    <img
      v-else-if="item.images?.length"
      :src="item.images[0]?.url"
      alt=""
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h2 class="text-lg font-semibold mb-2">{{ item.name }}</h2>
    <p v-if="item.artists?.length" class="text-gray-600">
      {{ item.artists[0].name }}
    </p>
    <p v-else-if="item.genres?.length" class="text-gray-600">{{ item.genres[0] }}</p>

    <p v-if="item?.artists?.length">
      This artist makes up
      <strong>{{ spotifyStore.getMakeupOfArtistById(item.artists[0].id) }}</strong> of your top
      {{ spotifyStore.preferences.limit }} songs.
    </p>
  </div>
</template>

<script setup>
import { useSpotifyStore } from '../../stores/spotifyStore.js'

defineProps({
  item: {
    type: Object
  }
})

const spotifyStore = useSpotifyStore()
</script>
