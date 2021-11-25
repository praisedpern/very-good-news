import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Link to="/">
        <header className="App-header">
            <h1>Very Good</h1>
            <h2>News &amp; Commentary Co.</h2>
        </header>
        </Link>
    )
}

export default Header
