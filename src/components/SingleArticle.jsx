import { getArticleById } from '../utils/apiGet'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ArticleCard from './ArticleCard'

const SingleArticle = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticleById(article_id).then((fetchedArticle) => {
            setArticle({ ...fetchedArticle })
        })
    }, [article_id])

    return (
        <main className="App-main">
            {' '}
            <ArticleCard
                key={`article${article.article_id}`}
                article={article}
            />
        </main>
    )
}

export default SingleArticle
