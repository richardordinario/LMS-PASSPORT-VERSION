import axios from 'axios'
const base_url = window.location.origin

let BaseApi = axios.create({
    baseURL: base_url
})

let Api = function() {
    let token = localStorage.getItem('token')
    if(token) {
        BaseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return BaseApi;
}

export default Api