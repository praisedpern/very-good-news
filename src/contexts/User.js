import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('light')

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}
