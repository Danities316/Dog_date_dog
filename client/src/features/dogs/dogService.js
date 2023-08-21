import axios from "axios";
import { async } from "regenerator-runtime";

const API_URL = 'http://localhost:3000/api/dogs/'

// Create new dog
const createDog = async (dogsData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, dogsData, config)
    return response.data
}

// get All users dog
const getDogs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

// Delete User dog
const deleteDog = async (dogId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + dogId, config)
    return response.data
}

const dogService = {
    createDog,
    getDogs,
    deleteDog
}

export default dogService
