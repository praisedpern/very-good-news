const VoteBar = ({ votes, created_at }) => {
    return (
        <section className="App-vote-bar">
            <button>+</button>
            votes: {votes}
            <button>-</button>
            posted: {created_at}
        </section>
    )
}

export default VoteBar