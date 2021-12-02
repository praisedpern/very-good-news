import CommentCard from './CommentCard'
import { getComments } from '../utils/apiGet'
import { useState, useEffect } from 'react/cjs/react.development'
import VoteBar from './VoteBar'
import UserCard from './UserCard'
import CommentBox from './CommentBox'

const ArticleCard = ({ article, renderComments }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        if (renderComments) {
            getComments(article.article_id).then((articleComments) => {
                setComments(articleComments)
            })
        }
    }, [article.article_id, renderComments])

    return (
        <section className="App-article-card">
            <VoteBar props={article} />
            <div className="App-article-body-container">
                <p className="App-article-body">{article.body}</p>
                <UserCard user={article.author} />
            </div>
            {comments.map((comment) => {
                if (!renderComments) return null
                return (
                    <CommentCard
                        key={`comment${comment.comment_id}`}
                        comment={comment}
                    />
                )
            })}
            <CommentBox article={article} renderComments={renderComments} />
        </section>
    )
}

export default ArticleCard
