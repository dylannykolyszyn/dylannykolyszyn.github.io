<template>
  <div
    class="min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-teal-500 to-red-500"
  >
    <AppContainer>
      <div class="text-center">
        <HomePageTitle
          :messages="['Coming Soon...', 'Working out the kinks...', 'Building...']"
          :typingSpeed="100"
          :eraseSpeed="50"
          :delayBeforeErasing="2000"
          :delayBetweenMessages="1000"
        />
        <p class="text-xl text-white mb-8">In the meanwhile, check out my LinkedIn.</p>
        <div class="text-white mb-8">
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

        <p class="text-white text-md">
          Seasoned Full Stack Developer with a decade of coding expertise, specializing in scalable
          web applications, CRM systems, and E-Commerce platforms. With a proven track record at The
          Labour Party and REVIEWS.io, I've led critical projects that enhanced user engagement and
          operational efficiency. From rebuilding CRM tools used by tens of thousands to developing
          award-winning websites, my work has consistently delivered tangible results. Let's build
          something extraordinary together.
        </p>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
import { useSocialStore } from '../stores/useSocialStore.js'
import HomePageTitle from '../components/homepage/HomePageTitle.vue'

const socialsStore = useSocialStore()

const socials = socialsStore.getSocialLinks
</script>
