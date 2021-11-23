import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import { useEffect, useContext } from 'react'
import { getUsers } from './utils/apiGet'
import { UserContext } from './contexts/User'

function App() {
    const { setCurrentUser, allUsers, setAllUsers } =
        useContext(UserContext)

    useEffect(() => {
        getUsers().then((result) => {
            setAllUsers(
                result.map((user) => {
                    return user.username
                })
            )
        })
    })

    useEffect(() => {
        setCurrentUser(allUsers[0])
    }, [allUsers])

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
