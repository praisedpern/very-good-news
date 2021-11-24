import { useState } from "react"

const VoteBar = ({props}) => {
    return (
        <>
        <h3>{props.title}</h3>
        <section className="App-vote-bar">
            <button>+</button>
            votes: {props.votes}
            <button>-</button>
            posted: {props.created_at}
        </section>
        </>
    )
}

export default VoteBar
