import VoteBar from './VoteBar'

const CommentCard = ({ comment }) => {
    return (
        <section className="App-comment-card">
            <VoteBar props={comment} />
            <p>{comment.body}</p>
        </section>
    )
}

export default CommentCard
