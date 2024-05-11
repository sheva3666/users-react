import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/api'

const useFetchUsers = () => {
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState()

    useEffect(() => {
    setLoading(true)
      fetchUsers()
      .then(data => setUsers(data.data))
      .catch(errors => setErrors(errors))
      .then(() => setTimeout(() => {
        setLoading(false);
      }, 2000))
    }, [])
    
  return {users, loading, errors}
}

export default useFetchUsers