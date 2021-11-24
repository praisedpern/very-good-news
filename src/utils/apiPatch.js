const axios = require('axios').default
const TOKEN = process.env.REACT_APP_TOKEN
const BASEURL = process.env.REACT_APP_BASEURL

const newsApi = axios.create({
    baseURL: BASEURL,
    params: {
        token: TOKEN,
    },
})

export const patchVotes = (articleId, incByAmount, patchType = 'articles') => {
    return newsApi
        .patch(`/${patchType}/${articleId}`, {
            inc_votes: incByAmount,
        })
        .then(({ data }) => {
            console.log(`PATCH /${patchType}/${articleId}`)
            return data[patchType]
        })
}
