import UserCard from './UserCard'
import VoteBar from './VoteBar'

const CommentCard = ({ comment }) => {
    return (
        <section className="App-comment-card">
            <VoteBar props={comment} />
            <div className='App-article-body-container'>
            <p className="App-comment-body">{comment.body}</p>
            <UserCard user={comment.author}/>
            </div>
        </section>
    )
}

export default CommentCard
