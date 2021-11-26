import ArticleCard from './ArticleCard'
import { getArticles, getArticleById } from '../utils/apiGet'
import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router'

const Articles = ({ topic }) => {
    const [articles, setArticles] = useState([])
    const { article_id } = useParams()
    const [renderComments, setRenderComments] = useState(false)
    const { search } = useLocation()

    useEffect(() => {
        if (article_id) {
            getArticleById(article_id).then((articleToSet) => {
                setArticles([articleToSet])
                setRenderComments(true)
            })
        } else {
            getArticles(search).then((articlesToSet) => {
                setArticles([...articlesToSet])
                setRenderComments(false)
            })
        }
    }, [article_id, setArticles, setRenderComments, search])

    return (
        <>
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
        </>
    )
}

export default Articles
