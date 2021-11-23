import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('')
    const [allUsers, setAllUsers] = useState([])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, allUsers, setAllUsers }}>
            {children}
        </UserContext.Provider>
    )
}
