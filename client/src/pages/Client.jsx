import { GET_CLIENT } from '../queries/clientQueries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'


export default function Client( ) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CLIENT, {variables: {id}})
  if (loading) return <p>Loading</p>
  if (loading) return <p>Something went wrong</p>
  
  return (
    <>
    {!loading&&!error&& ( 
    <table><tbody>   
       <tr>
       <td><FaUser className='card'/></td>
       <td><p>{data.client.name}</p><p>{data.client.email}</p></td>
       <td></td>
       <td>{data.client.phone}</td>
       <td>
           
           {/* <button className="btn btn-sm" onClick={deleteClient}> */}
           <a className='btn btn-light' href={`/client/${data.client.id}`}>
             
           </a>
           
           {/* </button> */}
           
           
          

       </td>
   </tr></tbody></table>
    )}
    </>
  )
}
