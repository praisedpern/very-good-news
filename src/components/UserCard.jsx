import { useContext } from 'react'
import { UserContext } from '../contexts/User'

const UserCard = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <section class="App-user-card">
            <img alt='User avatar ' src="https://media.gq.com/photos/5582cbcb1177d66d68d5912d/master/pass/entertainment-2011-08-mustache-nick-offerman-mustache-96.jpg" />
            {currentUser}
        </section>
    )
}

export default UserCard
