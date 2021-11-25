import { useState } from 'react'

const DropdownMenu = ({topics}) => {
    const [isHidden, setIsHidden] = useState(true)

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
