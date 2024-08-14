<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <router-view v-slot="{ Component, route }">
      <div :key="route.name">
        <Component :is="Component" />
      </div>
    </router-view>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
import AppHeader from '../components/layout/header/AppHeader.vue'
import AppFooter from '../components/layout/footer/AppFooter.vue'
</script>
