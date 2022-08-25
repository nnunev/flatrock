import { FaUser, FaCog } from 'react-icons/fa'
import DeleteUserModal from './DeleteUserModal';

export default function UserRow({user}) {
  return (
    <tr>
        <td><FaUser className='icon'/></td>
        <td><p>{user.firstName} {user.lastName}</p><p>{user.email}</p></td>
        <td>{user.usergroup}</td>
        <td>{user.status}</td>
        <td>
          <a className='btn btn-light' href={`/user/${user.id}`}>
            <FaCog/>
          </a>

          <DeleteUserModal user={user}/>
        </td>
    </tr>
  )
}
