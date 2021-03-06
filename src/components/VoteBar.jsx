import { useState, useEffect } from 'react'
import { patchVotes } from '../utils/apiPatch'
import { Link } from 'react-router-dom'

const VoteBar = ({ props }) => {
    const [addedVotes, setAddedVotes] = useState(0)
    const [plusEnabled, setPlusEnabled] = useState(true)
    const [minusEnabled, setMinusEnabled] = useState(true)
    const [articleTopicStr, setArticleTopicStr] = useState('')

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

    useEffect(() => {
        if (props.topic) {
            return setArticleTopicStr(`in ${props.topic}`)
        }
    }, [props.topic])

    return (
        <section className="App-votebar">
            <h3 className="App-votebar-title">
                <Link to={`/articles/${props.article_id}`}>{props.title}</Link>
            </h3>
            <p className="App-votebar-timestamp">
                posted at {props.created_at}
                <Link to={`/topics/${props.topic}`}>{articleTopicStr}</Link>
            </p>
            <div className="App-votebar-votepanel">
                <button
                    className="App-votebar-plusbutton"
                    disabled={!plusEnabled}
                    onClick={() => {
                        return handleVotes(1)
                    }}
                >
                    +
                </button>
                <p className="App-votebar-votes">
                    votes: {props.votes + addedVotes}
                </p>
                <button
                    className="App-votebar-minusbutton"
                    disabled={!minusEnabled}
                    onClick={() => {
                        return handleVotes(-1)
                    }}
                >
                    -
                </button>
            </div>
        </section>
    )
}

export default VoteBar
