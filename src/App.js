import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import { useEffect, useContext } from 'react'
import { UserContext } from './contexts/User'

function App() {
    const { setCurrentUser } = useContext(UserContext)

    useEffect(() => {
        setCurrentUser('tickle122')
    }, [setCurrentUser])

    // useEffect(() => {
    //     getUsers().then((users) => {
    //         console.log(users)
    //         setAllUsers(users)
    //         setAllUsers(
    //             users.map((user, index) => {
    //                 !index && setCurrentUser(user.username)
    //                 return user.username
    //             })
    //         )
    //     })
    // }, [])

    // useEffect(() => {
    //     setCurrentUser(allUsers[0])
    // }, [allUsers])

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
