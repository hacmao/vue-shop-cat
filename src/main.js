import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import HomePage from './components/HomePage'
import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(Vuex)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        { path: '/home', component: HomePage}
      ]
    }
  ]
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
