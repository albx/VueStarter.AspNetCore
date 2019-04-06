'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './app/components/Home.vue'
import About from './app/components/About.vue'
import Contact from './app/components/Contact.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export { router, routes }