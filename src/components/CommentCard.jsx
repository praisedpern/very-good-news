import VoteBar from './VoteBar'

const CommentCard = ({ comment }) => {
    return (
        <section className="App-comment-card">
            <VoteBar props={comment} />
            <p className="App-comment-body">{comment.body}</p>
        </section>
    )
}

export default CommentCard
