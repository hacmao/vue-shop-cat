import CatApi from '@/api/cat.js';

const catState = {
    AVAILABLE: 1,
    IN_CART: 2,
    SELLED: 3
}

const state = {
    listCat: [],
    catType: [],
    catDetail: {
        city: ""
    }
}

const getters = {
    listCatAvaiable: state => {
        return state.listCat.filter(cat => cat.state == catState.AVAILABLE)
    },
    catType: state => {
        return state.catType
    },
    catDetail: state => {
        return state.catDetail
    }
}

const actions = {
    getListCat: async({ commit }) => {
        const catApi = new CatApi()
        const cats = await catApi.listCat()
        commit('setListCat', cats)
    },
    getCat: async({ commit }, id) => {
        const catApi = new CatApi()
        const cat = await catApi.getCat(id)
        if (cat.length != 0) {
            commit('setCatDetail', cat[0])
        }
    },
    changeCatState: async({ commit }, payload) => {
        const catApi = new CatApi()
        const upadtedCat = await catApi.updateCat(payload.id, payload.state)
        commit('updateListCat', upadtedCat)
    },
    getCatType: async({ commit }) => {
        const catApi = new CatApi()
        const catType = await catApi.getCatType()
        commit('setCatType', catType)
    },
    filterCat: async({ commit }, payload) => {
        const catApi = new CatApi()
        const filterCats = await catApi.filterCat(payload)
        commit('setListCat', filterCats)
    }

}

const mutations = {
    setListCat: (state, cats) => {
        state.listCat = cats
    },
    setCatDetail: (state, cat) => {
        state.catDetail = cat 
    },
    updateListCat: (state, cat) => {
        const catIdx = state.listCat.findIndex(obj => obj.id == cat.id)
        state.listCat[catIdx] = cat
        state.listCat = state.listCat.filter(cat => cat.state == catState.AVAILABLE)
    },
    setCatType: (state, catType) => {
        state.catType = catType
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}