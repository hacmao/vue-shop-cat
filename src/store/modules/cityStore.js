import CityApi from '@/api/cityApi.js'

const state = {
    cities: [],
    selectedCities: []
}

const getters = {
    getAllCities: (state) => {
        return state.cities
    },
    getSelectedCities: (state) => {
        return state.selectedCities
    }
}

const actions = {
    getAllCitiesAction: async({ commit }) => {
        const cityApi = new CityApi()
        const cities = await cityApi.listCity()
        commit('setCities', cities)
    }
}

const mutations = {
    setCities: (state, cities) => {
        state.cities = cities
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}