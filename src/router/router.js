import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/spotify',
    meta: { title: 'Spotify' },
    component: () => import('../views/SpotifyPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    meta: { title: '404' },
    component: () => import('../views/errors/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// Set page title
router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | dylnyko`
  next()
})

export default router
