import Vue from 'vue'
import Vuex from 'vuex'
import catStore from './modules/catStore'
import cityStore from './modules/cityStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cat: catStore,
        city: cityStore
    }
})

export default store;