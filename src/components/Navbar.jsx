import UserCard from './UserCard'
import DropdownMenu from './DropdownMenu'

const Navbar = ({ topics }) => {
    return (
        <nav className="App-nav">
            <>
                <DropdownMenu topics={topics} />
            </>
            <p>Articles</p>
            <p>Comments</p>
            {/* <UserCard user='grumpy19'/> */}
        </nav>
    )
}

export default Navbar
