import VoteBar from './VoteBar'

const CommentCard = ({ comment }) => {
    return (
        <section className="App-comment-card">
            <VoteBar votes={comment.votes} created_at={comment.created_at} />
            <p>{comment.body}</p>
        </section>
    )
}

export default CommentCard
