import {gql} from '@apollo/client'


const GET_CLIENTS = gql`
    query GetClients {
        clients {
            id,
            name,
            email,
            phone, 
        }
    }
    
`;

const GET_CLIENT = gql`
query GetClients($id:ID!) {
    client(id: $id) {
        id,
        name,
        email,
        phone, 
    }
}
`;
 export {GET_CLIENT, GET_CLIENTS }