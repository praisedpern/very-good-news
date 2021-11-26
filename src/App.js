import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopics } from './utils/apiGet'

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sorter from './components/Sorter'
import Articles from './components/Articles'
import AllTopics from './components/AllTopics'

function App() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topicsToSet) => {
            setTopics([...topicsToSet])
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <Header />
                    <Navbar topics={topics} />
                </div>
                <Sorter />
                <main className="App-main">
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
                            element={<Articles />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
