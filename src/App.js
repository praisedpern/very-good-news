import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'

function App() {

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
