import CommentCard from './CommentCard'
import { getComments, getArticleById } from '../utils/apiGet'
import { useState, useEffect } from 'react/cjs/react.development'
import VoteBar from './VoteBar'
import { useParams } from 'react-router'

const ArticleCard = ({ article }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article.article_id).then((articleComments) => {
            setComments(articleComments)
        })
    }, [article.article_id])

    console.log(article.article_id)

    return (
        <section className="App-article-card">
            <VoteBar props={article} />
            <p>{article.body}</p>
            {comments.map((comment) => {
                if (!comments.length) return
                return <CommentCard key={`comment${comment.comment_id}`} comment={comment} />
            })}
        </section>
    )
}

export default ArticleCard
