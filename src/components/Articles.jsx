import ArticleCard from './ArticleCard'
import { getArticles } from '../utils/apiGet'
import { useEffect, useState } from 'react'

const Articles = ({topic}) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((result) => {
            setArticles(result)
        })
    }, [])

    console.log(topic)

    return (
        <main className="App-main">
            {articles.map((article) => {
                return <ArticleCard key={`article${article.article_id}`} article={article}/>
            })}
        </main>
    )
}

export default Articles
