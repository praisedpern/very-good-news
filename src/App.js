import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopics } from './utils/apiGet'

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import AllTopics from './components/AllTopics'
import SingleArticle from './components/SingleArticle'

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
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topicsToSet) => {
            setTopics([...topicsToSet])
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar topics={topics} />
                <Sorter />
                <Routes>
                    <Route
                        path="/topics"
                        element={<AllTopics topics={topics} />}
                    />
                    <Route path="/" element={<Articles />} />
                    <Route path="/articles" element={<Articles />} />
                    {topics.map((topic) => {
                        return (
                            <Route
                                key={'topicRoute-' + topic.slug}
                                path={`/topics/${topic.slug}`}
                                element={<Articles topic={topic.slug} />}
                            />
                        )
                    })}
                    <Route
                        path="/articles/:article_id"
                        element={<SingleArticle />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
