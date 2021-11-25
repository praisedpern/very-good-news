import UserCard from './UserCard'

const Navbar = () => {
    return (
        <nav className="App-nav">
            <h3>Topics</h3>
            <h3>Articles</h3>
            <h3>Comments</h3>
            <UserCard user='grumpy19'/>
        </nav>
    )
}

export default Navbar
