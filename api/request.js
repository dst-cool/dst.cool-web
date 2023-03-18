import axios from 'axios'


const req = axios.create({

    timeout: 3000,
    baseURL: process.env.BASE_API,

})

req.interceptors.request.use(

    (c) => {
        console.log(`req : ${c.url}  `, c)
        return c
    },

    (err) => {
        return Promise.reject(err)
    }

)


req.interceptors.response.use(

    (res) => {
        console.log(`res : ${res.status} `, res)
        return res

    },

    (err) => {
        return Promise.reject(err)
    }

)


export default req