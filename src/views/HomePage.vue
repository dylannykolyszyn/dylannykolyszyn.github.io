<template>
  <div
    class="min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-teal-500 to-red-500"
  >
    <AppContainer>
      <div class="text-center">
        <HomePageTitle
          :messages="[
            'Vue ',
            'E-Commerce',
            'Laravel',
            'AWS Lambda',
            'Shopify',
            'React',
            'Tailwind'
          ]"
          :typingSpeed="50"
          :eraseSpeed="50"
          :delayBeforeErasing="2000"
          :delayBetweenMessages="1000"
        />
        <div class="text-white mb-4">
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

        <p class="text-white text-md mt-4">
          Hi, I’m Dylan Nykolysyzyn, a passionate Full Stack Software Engineer with over a decade of
          hands-on experience. I specialize in crafting scalable web applications, building robust
          CRM systems, and developing seamless E-Commerce platforms. Whether it’s using Laravel,
          Vue.js, AWS Lambda, or other cutting-edge technologies, I’m dedicated to delivering
          solutions that drive performance and boost user engagement.
        </p>

        <p class="text-white text-md mt-4">
          <span class="inline-flex mr-4">
            <mdicon name="code-tags" class="pr-1" /><strong class="pr-1"
              >Programming Languages:</strong
            >
            PHP, JavaScript, SQL
          </span>
          <span class="inline-flex mr-4">
            <mdicon name="laravel" class="pr-1" /><strong class="pr-1">Frameworks:</strong> Laravel,
            Vue.js, React, Angular
          </span>
          <span class="inline-flex mr-4">
            <mdicon name="tools" class="pr-1" /><strong class="pr-1">Tools:</strong> PHPUnit,
            Sentry, DataDog, Dusk, GIT, REST APIs
          </span>
          <span class="inline-flex mr-4">
            <mdicon name="cart-variant" class="pr-1" /><strong class="pr-1">E-Commerce:</strong>
            Shopify, WooCommerce, Klaviyo
          </span>
          <span class="inline-flex mr-4">
            <mdicon name="cloud-outline" class="pr-1" /><strong class="pr-1"
              >Cloud Services:</strong
            >
            AWS Lambda
          </span>
          <span class="inline-flex mr-4">
            <mdicon name="human-greeting" class="pr-1" /><strong class="pr-1"
              >Interpersonal:</strong
            >
            Problem Solving, Collaborative Working
          </span>
          <span class="inline-flex mr-4">
            <mdicon name="database-outline" class="pr-1" /><strong class="pr-1">Other:</strong> SCSS
            & CSS3, Database Design
          </span>
        </p>

        <h3 class="text-white mt-12 text-xl">What have I been working on?</h3>
        <AppButton class="mt-4" to="/spotify" icon="spotify">Spotify Top Charts</AppButton>
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
