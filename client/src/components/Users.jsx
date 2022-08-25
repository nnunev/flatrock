import { useQuery } from '@apollo/client'
import UserRow from './UserRow'
import { GET_USERS } from '../queries/userQueries'

export default function Users() {
 
  const { loading, error, data } = useQuery(GET_USERS)
  if (loading) return <p>Loading</p>
  if (loading) return <p>Something went wrong</p>
  
  return (
    <>
    
    {!loading&&!error&& (
        <table className='table table-hover mt-5'>
            <thead>
                <tr>
                    <th></th>
                    <th> USER </th>
                    <th> ROLE </th>
                    <th> STATUS </th>
                    <th> ACTIONS</th>
                </tr>
            </thead>
            <tbody>
              
                {(data).users.map(user => (
                    <UserRow key={user.id} user={user} />
                ))}
            </tbody>
        </table>
    )}</>
  )
}
