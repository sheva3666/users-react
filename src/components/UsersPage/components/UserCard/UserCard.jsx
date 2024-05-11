/* eslint-disable react/prop-types */
import './UserCard.css'

const UserCard = ({user}) => {
  return (
    <div className="user-card">
        <h2>Name: {user.first_name} {user.last_name}</h2>
        <img src={user.avatar} alt={user.first_name} />
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserCard