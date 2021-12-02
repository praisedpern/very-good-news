const axios = require('axios').default
const TOKEN = process.env.REACT_APP_TOKEN
const BASEURL = process.env.REACT_APP_BASEURL

const newsApi = axios.create({
    baseURL: BASEURL,
    params: {
        token: TOKEN,
    },
})
export const postComment = (articleId, username, commentBody) => {
    return newsApi
        .post(`/articles/${articleId}/comments`, {
            username: username,
            body: commentBody,
        })
        .then(({ data }) => {
            // console.log('POST /articles/:article_id/comments')
            return data[0]
        })
}
