import { getTopics } from '../utils/apiGet'
import { useState, useEffect } from 'react'

const DropdownMenu = () => {
    const [topics, setTopics] = useState([])
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        getTopics().then((topicsToSet) => {
            setTopics([{slug: 'all'}, ...topicsToSet])
        })
    }, [])

    return (
        <div className="dd-wrapper">
            <p
                onClick={() => {
                    setIsHidden(() => {
                        if (isHidden) return false
                        return true
                    })
                }}
                className="dd-title"
            >
                Topics
            </p>
            {topics.map((topic) => {
                return (
                    <button key={topic.slug} className="dd-list-item">
                        {topic.slug}
                    </button>
                )
            })}
        </div>
    )
}

export default DropdownMenu
