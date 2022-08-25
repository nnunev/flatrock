import { gql } from '@apollo/client'

const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $status: String!, $usergroup: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, status: $status, usergroup: $usergroup) {
      id,
      firstName,
      lastName,
      email,
      status,
      usergroup,
    }
  }
`;

const DELETE_USER = gql`
    mutation deleteUser($id: ID!){
        deleteUser(id: $id){
          id,
          firstName,
          lastName,
          email,
          status,
          usergroup,
        }
    }
`;
console.log(ADD_USER)
export { ADD_USER, DELETE_USER }
