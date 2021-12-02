import UserCard from './UserCard'
import { useState, useContext } from 'react'
import { postComment } from '../utils/apiPost'
import { UserContext } from '../contexts/User'

const CommentBox = ({ article, renderComments }) => {
    const [commentToPost, setCommentToPost] = useState('')
    const { currentUser } = useContext(UserContext)

    return (
        <section className="App-comment-box-container">
            <UserCard className="App-current-user-card" user={currentUser} />
            <div className="App-comment-input">
                <textarea
                    className="App-comment-body"
                    name="comment-to-post"
                    value={commentToPost}
                    onChange={(e) => {
                        e.preventDefault()
                        return setCommentToPost(e.target.value)
                    }}
                    rows="6"
                    cols="80"
                />
                <button
                    onClick={() => {
                        postComment(
                            article.article_id,
                            currentUser,
                            commentToPost
                        )
                        return setCommentToPost('')
                    }}
                >
                    Post
                </button>
            </div>
        </section>
    )
}

export default CommentBox
