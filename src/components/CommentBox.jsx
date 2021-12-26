import UserCard from './UserCard'
import { useState, useContext, useEffect } from 'react'
import { postComment } from '../utils/apiPost'
import { UserContext } from '../contexts/User'

const CommentBox = ({ article }) => {
    const [commentToPost, setCommentToPost] = useState('')
    const { currentUser } = useContext(UserContext)

    const getViewportWidth = () => {
        return Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        )
    }

    const refreshPage = () => {
        window.location.reload(false)
    }

    const [viewportWidth, setViewportWidth] = useState(getViewportWidth())

    useEffect(() => {
        setViewportWidth(getViewportWidth())
    }, [])

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
                    cols={viewportWidth * 0.06}
                />
                <button
                    onClick={() => {
                        postComment(
                            article.article_id,
                            currentUser,
                            commentToPost
                        )
                        setCommentToPost('')
                        return refreshPage()
                    }}
                >
                    Post Comment
                </button>
            </div>
        </section>
    )
}

export default CommentBox
