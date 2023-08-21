import axios from "axios";
import { async } from "regenerator-runtime";

const API_URL = 'http://localhost:3000/api/users/'

//Register user
const register = async (userDate) => {
    const response = await axios.post(API_URL + 'register', userDate)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
};
// get All users dog
const getUsers = async () => {
    const response = await axios.get(API_URL + 'all')
    return response.data
};



// const getUsers = async (token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }

//     const response = await axios.get(API_URL + 'all', config)
//     return response.data
// }

//UpdateUser user
const updateUser = async (userDate) => {
    const response = await axios.post(API_URL + 'onboarding', userDate)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
};
//Login user
const login = async (userDate) => {
    const response = await axios.post(API_URL + 'login', userDate)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}
const authService = {
    register,
    updateUser,
    login,
    logout,
    getUsers
}

export default authService