import Vue from 'vue'
import VueRouter from 'vue-router'

import SignPage from '@/views/SignPage'
import MainPage from '@/views/MainPage'
import MoviePage from '@/views/MoviePage'
import ProfilePage from '@/views/ProfilePage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MainPage, name: 'Home' },
    { path: '/login', component: SignPage, name: 'Sign' },
    { path: '/movie', component: MoviePage, name: 'Movie' },
    { path: '/profile', component: ProfilePage, name: 'Profile' },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
