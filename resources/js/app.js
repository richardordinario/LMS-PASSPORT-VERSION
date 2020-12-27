require('./bootstrap');

window.Vue = require('vue');
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import store from './store'
import App from './App.vue'
import Gate from './Gate'

Vue.use(VueSweetalert2);
window.Swal = VueSweetalert2

// Vue.prototype.$gate = new Gate(window.role);
//Vue.prototype.$role = window.role
// console.log(window.role)
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-app', require('./App.vue').default);

// export const globalStore = new Vue({
//     data: {
//       role: 'youre role'
//     }
// })

const app = new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
}).$mount(App);
