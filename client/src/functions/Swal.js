import Swal from 'sweetalert2'

export const SwlError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill up the form correctly!',
    })
}
export const SwlSubmitError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verification code not matching',
    })
}
export const SwlCredentialsError = () => {
    Swal.fire({
        title: 'Oops...',
        text: "Already account exists!.."
    })
}
export const SwlSuccess = () => {
    Swal.fire({
        icon: "success",
        titile: "Success...",
        text: "Added Successfully"
    })
}
export const SwlLoginError = () => {
    Swal.fire({
        icon: "error",
        title: "Failed...",
        text: "Login failed!"
    })
}
export const SwlSubmitErrorFrom = () => {
    Swal.fire({
        icon: "error",
        title: "Failed...",
        text: "Please complete the form"
    })
}
export const SwlSubmitCart = () => {
    Swal.fire({
        icon: 'success',
        title: 'Done...',
        text: 'Please checkout from cart to confirm'
    })
}
export const SwlSubmitCartError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Failed...',
        text: 'Please specify the quantity'
    })
}