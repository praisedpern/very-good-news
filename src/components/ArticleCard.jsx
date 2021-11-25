import CommentCard from './CommentCard'
import { getComments } from '../utils/apiGet'
import { useState, useEffect } from 'react/cjs/react.development'
import VoteBar from './VoteBar'

const ArticleCard = ({ article }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article.article_id).then((articleComments) => {
            setComments(articleComments)
        })
    }, [article.article_id])

    return (
        <section className="App-article-card">
            <VoteBar props={article} />
            <p>{article.body}</p>
            {comments.map((comment) => {
                return <CommentCard key={`comment${comment.comment_id}`} comment={comment} />
            })}
        </section>
    )
}

export default ArticleCard
