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
        // console.log('GET /users')
        return data.users
    })
}

export const getUserById = (user) => {
    return newsApi.get(`/users/${user}`).then(({ data }) => {
        console.log(`GET /users/${user}`)
        return data
    })
}

export const getTopics = () => {
    return newsApi.get('/topics').then(({ data }) => {
        // console.log('GET /topics')
        return data.topics
    })
}

export const getArticles = (search) => {
    return newsApi.get(`/articles${search}`).then(({ data }) => {
        // console.log('GET /articles')
        return data.articles
    })
}

export const getArticleById = (articleId) => {
    return newsApi.get(`/articles/${articleId}`).then(({ data }) => {
        // console.log(`GET /articles/${articleId}`)
        return data.article
    })
}

export const getComments = (articleId) => {
    return newsApi.get(`/articles/${articleId}/comments`).then(({ data }) => {
        // console.log('GET /articles/:article_id/comments')
        return data.comments
    })
}
