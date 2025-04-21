import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation SignUp($firstname: String! $lastname: String! $username: String! $email: String!){
    registerUser(user: { firstName: $firstname, lastName: $lastname, username: $username, email: $email }) {
      successful
      message
      token
    }
  }
`;
