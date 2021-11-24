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
        console.log('GET /users')
        return data
    })
}

export const getArticles = () => {
    return newsApi.get('/articles').then(({ data }) => {
        console.log('GET /articles')
        return data.articles
    })
}

export const getComments = (articleId) => {
    return newsApi.get(`/articles/${articleId}/comments`).then(({data}) => {
        console.log('GET /articles/:article_id/comments')
        return data.comments
    })
}