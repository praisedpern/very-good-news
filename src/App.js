import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Sorter />
            <Articles />
        </div>
    )
}

export default App
