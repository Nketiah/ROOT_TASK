import axios from 'axios'

//const API_URL = '/api/users/'

//imaginary url
const API_URL = 'ubuntu@ec2-34-207-110-46.compute-1.amazonaws.com:8000/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}



// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login,
}

export default authService
