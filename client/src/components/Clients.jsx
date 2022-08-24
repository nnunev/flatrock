import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'


export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS)
  if (loading) return <p>Loading</p>
  if (loading) return <p>Something went wrong</p>
  
  return (

    <div>{!loading&&!error&& (
        <table className='table table-hover mt-5'>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client => (
                    <ClientRow key={client.id} client={client} />
                ))}
            </tbody>
        </table>
    )}</div>
  )
}



///FaPlusCircle