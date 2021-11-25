import UserCard from './UserCard'
import { useState, useEffect } from 'react'
import { patchVotes } from '../utils/apiPatch'
import { Link } from 'react-router-dom'

const VoteBar = ({ props }) => {
    const [addedVotes, setAddedVotes] = useState(0)
    const [plusEnabled, setPlusEnabled] = useState(true)
    const [minusEnabled, setMinusEnabled] = useState(true)

    const handleVotes = (incByAmount) => {
        let idToUse
        let patchType
        if (props.article_id) {
            patchType = 'articles'
            idToUse = props.article_id
        } else {
            patchType = 'comments'
            idToUse = props.comment_id
        }
        patchVotes(idToUse, incByAmount, patchType)
        setAddedVotes((prevVotes) => {
            return prevVotes + incByAmount
        })
    }

    useEffect(() => {
        setPlusEnabled(() => {
            if (addedVotes === 1) return false
            else return true
        })
        setMinusEnabled(() => {
            if (addedVotes === -1) return false
            else return true
        })
    }, [addedVotes])

    return (
        <>
            <h3><Link to={`/articles/${props.article_id}`}>{props.title}</Link></h3>
            <p>{props.topic}</p>
            <section className="App-vote-bar">
                <button
                    disabled={!plusEnabled}
                    onClick={() => {
                        return handleVotes(1)
                    }}
                >
                    +
                </button>
                votes: {props.votes + addedVotes}
                <button
                    disabled={!minusEnabled}
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
