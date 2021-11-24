const CommentCard = ({ comment }) => {
    return (
        <section className="App-comment-card">
            <p>{comment.body}</p>
        </section>
    )
}

export default CommentCard
