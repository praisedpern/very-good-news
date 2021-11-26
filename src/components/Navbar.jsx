import { Link } from 'react-router-dom'
// import UserCard from './UserCard'
import DropdownMenu from './DropdownMenu'

const Navbar = ({ topics }) => {
    return (
        <nav className="App-nav">
            <>
                <DropdownMenu topics={topics} />
            </>
            <Link to="/articles">Articles</Link>
            <Link to="/comments">Comments</Link>
            {/* <UserCard user='grumpy19'/> */}
        </nav>
    )
}

export default Navbar
