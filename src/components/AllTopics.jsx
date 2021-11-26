import { Link } from 'react-router-dom'

const AllTopics = ({ topics }) => {
    return topics.map((topic) => {
        return (
            <Link className="App-all-topics" key={`all-topics-` + topic.slug} to={`/topics/` + topic.slug}>
                {topic.slug}
            </Link>
        )
    })
}

export default AllTopics
