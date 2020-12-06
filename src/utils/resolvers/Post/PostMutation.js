import gql from 'graphql-tag'

export const SETPOST = gql`
  mutation createPost($body: String!, $subjectID: ID!){
    createPost(body: $body, subjectID: $subjectID){
        id
        subjectID
        body
        createdAt
        user
    }
  }
`