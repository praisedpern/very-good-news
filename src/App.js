import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import { useState } from 'react'
import {getUsers} from './utils/apiGet'

function App() {
  const [allUsers, setAllUsers] = useState([])

  console.log(process.env.REACT_APP_TOKEN)
  console.log(getUsers())

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
