import CommentCard from './CommentCard'
import { getComments } from '../utils/apiGet'
import { useState, useEffect } from 'react'
import VoteBar from './VoteBar'
import UserCard from './UserCard'
import CommentBox from './CommentBox'

const ArticleCard = ({ article, renderComments }) => {
    const [comments, setComments] = useState([null])

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
            {comments.map((comment, index) => {
                if (!renderComments || !comment) return null
                else if (index === comments.length - 1) {
                    return (
                        <>
                            <CommentCard
                                key={`comment${comment.comment_id}`}
                                comment={comment}
                            />
                            <CommentBox
                                key={'commentBox'}
                                article={article}
                                renderComments={renderComments}
                            />
                        </>
                    )
                } else {
                    return (
                        <CommentCard
                            key={`comment${comment.comment_id}`}
                            comment={comment}
                        />
                    )
                }
            })}
        </section>
    )
}

export default ArticleCard
