import UserCard from "./UserCard"

const VoteBar = ({props}) => {
    return (
        <>
        <h3>{props.title}</h3>
        <section className="App-vote-bar">
            <button>+</button>
            votes: {props.votes}
            <button>-</button>
            posted: {props.created_at}
            <UserCard user={props.author} />
        </section>
        </>
    )
}

export default VoteBar
