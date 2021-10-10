import { BaseApi } from "./base";
import axios from "axios";

class CityApi extends BaseApi {
    async listCity() {
        const request_url = `${this.api_url}/api/city`
        let res = axios.get(request_url)
            .then(response => response.data)
        res = await res
        let cities = res.map(el => el.name)
        return cities
    }
}

export default CityApi;