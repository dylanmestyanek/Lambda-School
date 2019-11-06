import axios from "axios"

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://macrocalc.herokuapp.com/api",
        headers: {
            Authorization: localStorage.getItem('token'),
        }
    })
}