import axiosSecure from "./axiosSecure"

// save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified',
    }
    const {data} = await axiosSecure.put(`/users/:${user?.email}`, currentUser)
    return data
}

// get token from server
export const getToken = async email => {
    const {data} = await axiosSecure.post('/jwt', {email})
    console.log('Token receive from server', data)
    return data
}

// remove token from browser
export const clearCookie = async () => {
    const {data} = await axiosSecure.get('/logout')
    return data
}

// get user role
export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role
}

// Save user data in database
export const updateRole = async ({ email, role }) => {
    const currentUser = {
      email,
      role,
      status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
    return data
}
  
// become a host
export const becomeHost = async email => {
  const currentUser = {
    email,
    status: 'Requested',
  }
  const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
  return data
}