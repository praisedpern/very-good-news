import { getUserById } from '../utils/apiGet'
import { useState, useEffect } from 'react'

const UserCard = ({ user }) => {
    const [avatarUrl, setAvatarUrl] = useState(
        'https://media.gq.com/photos/5582cbcb1177d66d68d5912d/master/pass/entertainment-2011-08-mustache-nick-offerman-mustache-96.jpg'
    )

    useEffect(() => {
        getUserById(user).then(({ avatar_url }) => {
            if (avatar_url) setAvatarUrl(avatar_url)
        })
    }, [user])

    return (
        <section className="App-votebar-usercard">
            <img alt="User avatar" src={avatarUrl} />
            <p>{user}</p>
        </section>
    )
}

export default UserCard
