const axios = require('axios').default
const TOKEN = process.env.REACT_APP_TOKEN
const BASEURL = process.env.REACT_APP_BASEURL

const newsApi = axios.create({
    baseURL: BASEURL,
    params: {
        token: TOKEN,
    },
})

export const getUsers = () => {
    return newsApi.get('/users').then(({ data }) => {
        return data
    })
}

export const getArticles = () => {
    return newsApi.get('/articles').then(({ data }) => {
        return data.articles
    })
}