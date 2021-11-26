import { useState } from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({ topics }) => {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className="Dropdown">
            <Link
                to="/topics"
                onClick={() => {
                    setIsHidden(() => {
                        if (isHidden) return false
                        return true
                    })
                }}
                className="Dropdown-title"
            >
                Topics
            </Link>
            <div className="Dropdown-items">
                {topics.map((topic) => {
                    return (
                        <Link
                            to={`/topics/` + topic.slug}
                            key={topic.slug}
                            className="Dropdown-item"
                        >
                            {topic.slug}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default DropdownMenu
