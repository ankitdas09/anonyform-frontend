import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const URL = 'https://anonyform.herokuapp.com'

export const createForm = async (labelData) => {
    try {
        const accessKey = uuidv4().slice(25)
        const data = { accessKey: accessKey, data: labelData }
        const _data = JSON.stringify(data)
        const response = await axios.post(`${URL}/forms`, {
            data: _data
        })
        return [response.data.accessKey, response.data._id]
    } catch (error) {
        return null
    }
}

export const getForm = async (id) => {
    try {
        const response = await axios.get(`${URL}/forms/${id}`)
        return response.data
    } catch (error) {
        return null
    }
}

export const postResponse = async (id, data) => {
    try {
        const _data = JSON.stringify(data)
        const response = await axios.post(`${URL}/forms/${id}`, {
            data: _data
        })
        return response.data
    } catch (error) {
        return null
    }
}

export const getResponses = async (id, token) => {
    try {
        const response = await axios.get(`${URL}/forms/responses/${id}/${token}`)
        return response.data
    } catch (error) {
        return null
    }

}