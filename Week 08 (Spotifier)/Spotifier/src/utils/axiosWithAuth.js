import axios from 'axios';

export const axiosWithAuth = () => {
    const token = `Bearer ${localStorage.getItem('token')}`
    console.log(token)
    return axios.create({
        baseURL: ' https://spotify-song-suggester.herokuapp.com',
        headers: {
            "authorization" : token
        }
    })

}