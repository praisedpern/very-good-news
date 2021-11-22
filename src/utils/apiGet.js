const axios = require('axios').default
const TOKEN = process.env.REACT_APP_TOKEN

const newsApi = axios.create({
    baseURL: 'https://very-good-news.herokuapp.com/api',
    params: {
        token: TOKEN
    }
})

export const getUsers = () => {
    return newsApi.get('/users').then((res) => {
        console.log(res.data)
    })
}
