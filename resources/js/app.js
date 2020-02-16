import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './Index'
import auth from './auth'
import router from './router'

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)
// Добавить к урлу :8000 так как в статье этого нету
// и в .env файле заменить APP_URL=http://localhost:8000
axios.defaults.baseURL = `${process.env.MIX_APP_URL}:8000/api`
Vue.use(VueAuth, auth)

// Load Index
Vue.component('index', Index)

const app = new Vue({
    el: '#app',
    router
});