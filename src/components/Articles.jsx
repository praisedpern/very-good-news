import ArticleCard from './ArticleCard'
import { getArticles } from '../utils/apiGet'
import { useEffect, useState } from 'react'

const Articles = () => {
    const [articles, setArticles] = useState([])

    // useEffect(() => {
    //     getArticles().then((result)=>{
    //         setArticles(result)
    //     })
    // }, [])

    // console.log(articles)

    return (
        <main className="App-main">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </main>
    )
}

export default Articles
