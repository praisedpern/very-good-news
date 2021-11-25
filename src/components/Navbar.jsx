import UserCard from './UserCard'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
    return (
        <nav className="App-nav">
            <><DropdownMenu /></>
            <p>Articles</p>
            <p>Comments</p>
            {/* <UserCard user='grumpy19'/> */}
        </nav>
    )
}

export default Navbar
