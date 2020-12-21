import Api from './Api'
import store from '../store'

export const provider = () => {
    let role = null
    if(localStorage.getItem('token')) {
        return new Promise((resolve, reject) => {
            Api().get('/api/provider').then(res => {
                store.commit('user/AUTH_ROLE',res.data)
                role = res.data
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }) 
    }
    
    
}

// async function getProvider() {
//     return await Api().get('/api/provider')
// }

// function passValue(pass) {
//     return pass[0]
// }

// getProvider.then(function (res){
//     return res.data
// }).catch(err => {

// })
// export let role
// function provider() {
//     if(localStorage.getItem('token')) {
//         Api().get('/api/provider').then(res => {
//             role = res.data
//         }).catch(err => {
//             console.log(res.response.errors)
//         })
//     }
//   }
// module.exports = {
//     provider
// }
// export default {
//     provider() {
//         return Api().get('/api/provider')
//     }
// }