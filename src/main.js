import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import routes from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'history',
    routes
})

const vuetify = new Vuetify();

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')