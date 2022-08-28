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
export const SwlNoAccountError = () => {
    Swal.fire({
        icon: "error",
        title: 'Oops...',
        text: "Please create an account!.."
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
export const SwlLogin = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Warning...',
        text: 'Please Login first'
    })
}
export const SwlWhishList = () => {
    Swal.fire({
        icon: "warning",
        title: "Warning...",
        text: "This feature is only for users."
    })
}
export const SwlCartCheck = () => {
    Swal.fire({
        icon: "warning",
        title: "Warning...",
        text: "Item is already added to the cart"
    })
}
export const SwlCartType = () => {
    Swal.fire({
        icon: "warning",
        title: "Warning...",
        text: "Please select type of delivery"
    })
}
export const SwlTransactionSuccess = () => {
    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your product has been queued for shipment"
    })
}