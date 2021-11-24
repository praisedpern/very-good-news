import UserCard from './UserCard'
import { useState } from 'react'
import { patchVotes } from '../utils/apiPatch'

const VoteBar = ({ props }) => {
    const [addedVotes, setAddedVotes] = useState(0)

    const handleVotes = (incByAmount) => {
        patchVotes(props.article_id, incByAmount)
        setAddedVotes((prevVotes) => {
            return prevVotes + incByAmount
        })
    }

    return (
        <>
            <h3>{props.title}</h3>
            <section className="App-vote-bar">
                <button
                    onClick={() => {
                        return handleVotes(1)
                    }}
                >
                    +
                </button>
                votes: {props.votes + addedVotes}
                <button
                    onClick={() => {
                        return handleVotes(-1)
                    }}
                >
                    -
                </button>
                posted: {props.created_at}
                <UserCard user={props.author} />
            </section>
        </>
    )
}

export default VoteBar
