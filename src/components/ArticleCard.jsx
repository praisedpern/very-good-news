import CommentCard from './CommentCard'
import { getComments } from '../utils/apiGet'
import { useState, useEffect } from 'react/cjs/react.development'

const ArticleCard = ({ article }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article.article_id).then((articleComments) => {
            setComments(articleComments)
        })
    }, [article.article_id])

    return (
        <section className="App-article-card">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            {comments.map((comment) => {
                return <CommentCard key={`comment${comment.comment_id}`} comment={comment} />
            })}
        </section>
    )
}

export default ArticleCard
