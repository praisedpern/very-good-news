import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import { useState, useEffect } from 'react'
import { getUsers } from './utils/apiGet'

function App() {
    const [allUsers, setAllUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        getUsers().then((result) => {
            setAllUsers(
                result.map((user) => {
                    return user.username
                })
            )
        })
    }, [])

    console.log(allUsers)

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
