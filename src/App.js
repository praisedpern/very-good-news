import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import { useState, useEffect } from 'react'
import { getUsers } from './utils/apiGet'
import { UserContext } from './contexts/User'

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
            setCurrentUser(allUsers[0])
        })
    }, [allUsers])

    return (
        <UserContext.Provider value={{ currentUser }}>
            <div className="App">
                <Header />
                <Navbar />
                <Sorter />
                <Articles />
            </div>
        </UserContext.Provider>
    )
}

export default App
