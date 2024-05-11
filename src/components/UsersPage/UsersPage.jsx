import useFetchUsers from '../../hooks/useFetchUsers'
import UserCard from './components/UserCard/UserCard';

const UsersPage = () => {
  const {users = [], loading} = useFetchUsers()
  console.log(users);
  console.log(loading);

  return (
    <div className='container'>{users.map(user => <UserCard key={user.id} user={user}/>)}</div>
  )
}

export default UsersPage