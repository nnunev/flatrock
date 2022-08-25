import {gql} from '@apollo/client'

const GET_USERS = gql`
    query GetUsers {
        users {
            id,
            firstName,
            lastName,
            email,
            status,
            usergroup, 
        }
    } 
`;

const GET_USER = gql`
query GetUser($id:ID!) {
    user(id: $id) {
        id,
        firstName,
        lastName,
        email,
        status,
        usergroup,
    }
}
`;

 export {GET_USER, GET_USERS }