import { BaseApi } from "./base";
import axios from 'axios'

export default class CatApi extends BaseApi {
    get apiUrl() {
        return this.api_url;
    }

    async listCat() {
        const cats = axios.get(this.api_url + "/api/cats")
            .then(response => (response.data))
        return await cats
    }

    async getCat(id) {
        const cat = axios.get(`${this.api_url}/api/cat/detail/${id}`)
            .then(response => (response.data))
        return cat 
    }

    async updateCat(id, state) {
        const request_url = `${this.api_url}/api/cats/${id}/state`
        const body = {
            id: id,
            state: state
        }
        const cat = axios.put(request_url, body)
            .then(response => (response.data))
        return await cat
    }

    async getCatType() {
        const request_url = `${this.api_url}/api/cat_type`
        const cat_type = axios.get(request_url)
            .then(response => response.data.map(el => el.name))
        return await cat_type
    }

    async filterCat(payload) {
        const request_url = `${this.api_url}/api/cat/filters`
        const filterCats = axios.get(request_url, { params: payload })
            .then(response => response.data)
        return await filterCats
    }
}