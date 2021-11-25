import { useState } from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({topics}) => {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className="dd-wrapper">
            <Link
                to="/topics"
                onClick={() => {
                    setIsHidden(() => {
                        if (isHidden) return false
                        return true
                    })
                }}
                className="dd-title"
            >
                Topics
            </Link>
            {topics.map((topic) => {
                return (
                    <Link to={`/topics/`+topic.slug} key={topic.slug} className="dd-list-item">
                        {topic.slug}
                    </Link>
                )
            })}
        </div>
    )
}

export default DropdownMenu
