import ArticleCard from './ArticleCard'
import { getArticles, getArticleById } from '../utils/apiGet'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Articles = ({ topic }) => {
    const [articles, setArticles] = useState([])
    const { article_id } = useParams()
    const [renderComments, setRenderComments] = useState(false)

    useEffect(() => {
        if (article_id) {
            getArticleById(article_id).then((articleToSet) => {
                setArticles([articleToSet])
                setRenderComments(true)
            })
        } else {
            getArticles().then((articlesToSet) => {
                setArticles([...articlesToSet])
                setRenderComments(false)
            })
        }
    }, [article_id, setArticles, setRenderComments])

    return (
        <main className="App-main">
            {articles.map((article) => {
                if (topic && article.topic !== topic) return null
                return (
                    <ArticleCard
                        key={`article${article.article_id}`}
                        article={article}
                        renderComments={renderComments}
                        setRenderComments={setRenderComments}
                    />
                )
            })}
        </main>
    )
}

export default Articles
