<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white font-sans">
    <AppContainer>
      <div class="max-w-5xl mx-auto py-16">
        <HomePageTitle
          :messages="['Vue 3', 'PHP', 'Shopify', 'Laravel', 'Lambda', 'React', 'Tailwind']"
          :typingSpeed="50"
          :eraseSpeed="50"
          :delayBeforeErasing="2000"
          :delayBetweenMessages="1000"
        />

        <h2 class="text-4xl mb-8 font-light">
          Crafting Digital Experiences in Nottingham & Beyond
        </h2>
        <p class="text-2xl mb-12 hover:scale-105 transition-transform cursor-pointer">
          Let's create something amazing:
          <a href="mailto:mail@dylnyko.uk" class="font-bold underline">mail@dylnyko.uk</a>
        </p>

        <div class="grid md:grid-cols-2 gap-12">
          <div
            class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 class="text-3xl font-bold mb-6">Skills</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <mdicon name="language-php" class="mr-2" /> PHP, JavaScript, SQL
              </li>
              <li class="flex items-center">
                <mdicon name="vuejs" class="mr-2" /> Laravel, Vue.js, React, Angular
              </li>
              <li class="flex items-center">
                <mdicon name="test-tube" class="mr-2" /> PHPUnit, Sentry, DataDog, Dusk
              </li>
              <li class="flex items-center">
                <mdicon name="shopping" class="mr-2" /> Shopify, WooCommerce, Klaviyo
              </li>
              <li class="flex items-center"><mdicon name="aws" class="mr-2" /> AWS Lambda</li>
              <li class="flex items-center">
                <mdicon name="brain" class="mr-2" /> Problem Solving, Collaboration
              </li>
              <li class="flex items-center">
                <mdicon name="palette" class="mr-2" /> SCSS & CSS3, Database Design
              </li>
            </ul>
          </div>
          <div
            class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 class="text-3xl font-bold mb-6">About</h3>
            <p class="text-base leading-relaxed">
              Hey there! I'm Dylan Nykolysyzyn, a Full Stack Developer who's been knee-deep in code
              for over a decade. I love tackling tricky problems and turning them into slick,
              scalable solutions. From building CRM systems that actually work to creating
              e-commerce setups & integrations that don't make you want to pull your hair out, I've
              done it all. I'm all about using the latest tech to build stuff that's fast,
              user-friendly, and actually helps businesses grow.
              <strong>
                Got a wild idea you want to turn into reality? Let's chat and make it happen!
              </strong>
            </p>
          </div>
        </div>

        <div class="mt-16 text-center">
          <h3 class="text-3xl font-bold mb-6">Latest Projects</h3>
          <AppButton
            icon="spotify"
            icon-position="start"
            to="/spotify"
            class="text-xl font-bold py-3 px-6 bg-white text-purple-600 rounded-full hover:bg-purple-100 transition-colors"
          >
            Spotify Charts
          </AppButton>
        </div>

        <div class="mt-16 text-center">
          <h3 class="text-3xl font-bold mb-6">Join My Network</h3>
          <div class="flex justify-center space-x-6">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="text-white hover:text-purple-200 transform hover:scale-110 transition-all"
            >
              <mdicon :name="social.icon" size="32" />
            </a>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
import HomePageTitle from '@/components/homepage/HomePageTitle.vue'
import { useSocialStore } from '../stores/socialStore.js'

const socialsStore = useSocialStore()
const socials = socialsStore.getSocialLinks
</script>
