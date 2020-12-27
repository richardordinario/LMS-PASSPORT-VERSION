import Swal from 'vue-sweetalert2';

var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
export default toastMixin

// export default class Alert{
//     constructor(icon, message) {
//         this.icon = icon
//         this.message = message
//     }

//     customAlert() {
//         window.Swal.mixin({
//             toast: true,
//             icon: 'success',
//             title: 'General Title',
//             animation: false,
//             position: 'top-right',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         })
//     }

// }
