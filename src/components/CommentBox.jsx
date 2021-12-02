import UserCard from './UserCard'
import { useState, useContext } from 'react'
import { postComment } from '../utils/apiPost'
import { UserContext } from '../contexts/User'

const CommentBox = ({ article, renderComments }) => {
    const [commentToPost, setCommentToPost] = useState('')
    const { currentUser } = useContext(UserContext)

    return (
        <section className="App-comment-box">
            <UserCard />
            <label htmlFor="comment-to-post">Post comment: </label>
            <input
                name="comment-to-post"
                type="text"
                value={commentToPost}
                onChange={(e) => {
                    e.preventDefault()
                    return setCommentToPost(e.target.value)
                }}
            ></input>
            <button
                onClick={() => {
                    postComment(article.article_id, currentUser, commentToPost)
                    return setCommentToPost('')
                }}
            >
                Post
            </button>
        </section>
    )
}

export default CommentBox
