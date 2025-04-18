import { gql } from "@apollo/client";

export const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!){
    loginUser(user: { password: $password, login: { email: $email }}) {
      successful
      message
      token
    }
  }
`;
