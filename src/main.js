import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import routes from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'history',
    routes
})

const store = new Vuex.Store({
    state: {
        count: 0
    }
})

const vuetify = new Vuetify();

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')