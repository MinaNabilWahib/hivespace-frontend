import Swal from "sweetalert2";

export const alertConfig = (toast, cb = () => false) => {
    return Swal.mixin({
        toast: toast,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (el) => {
            el.addEventListener('mouseenter', Swal.stopTimer)
            el.addEventListener('mouseleave', Swal.resumeTimer)
        },
        didDestroy: async () => {
            await cb()
        },
    })
}