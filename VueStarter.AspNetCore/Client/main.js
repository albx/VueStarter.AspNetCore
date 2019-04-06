'use strict'

import Vue from 'vue'
import App from './app/App.vue'

import { router } from './router'

const app = new Vue({
    router,
    ...App
})

app.$mount('#app')