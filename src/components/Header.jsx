import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="App-title">
        <Link to="/">
            <h1>Very Good</h1>
            <h2>News &amp; Commentary Co.</h2>
        </Link>
        </header>
    )
}

export default Header
