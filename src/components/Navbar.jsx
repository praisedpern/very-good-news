import UserCard from './UserCard'

const Navbar = () => {
    return (
        <nav className="App-nav">
            <h2>Topics</h2>
            <h2>Articles</h2>
            <h2>Comments</h2>
            <UserCard user='grumpy19'/>
        </nav>
    )
}

export default Navbar
