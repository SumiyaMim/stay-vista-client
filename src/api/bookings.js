import axiosSecure from "./axiosSecure";

// Create Payment Intent
export const createPaymentIntent = async (price) => {
    const {data} = await axiosSecure.post('/create-payment-indent', price)
    return data
}

// save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
    const {data} = await axiosSecure.post('/bookings', paymentInfo)
    return data
}

// update room status after booking in db
export const updateStatus = async (id, status) => {
    const {data} = await axiosSecure.patch(`/room/status/${id}`, {status})
    return data
}

// get all bookings for a guest by email
export const getBookings = async (email) => {
    const {data} = await axiosSecure.get(`/bookings?email=${email}`)
    return data
}

// get all bookings for a host by email
export const getHostBookings = async (email) => {
    const {data} = await axiosSecure.get(`/bookings/host?email=${email}`)
    return data
}

// get all users
export const getAllUsers = async () => {
    const {data} = await axiosSecure.get('/users')
    return data
}