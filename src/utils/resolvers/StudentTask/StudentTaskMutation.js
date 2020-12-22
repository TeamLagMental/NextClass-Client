import gql from 'graphql-tag'

export const CREATESTUDENTTASK = gql`
  mutation createStudentTask($body: String!, $title: String!){
    createStudentTask(body: $body, title: $title){
      id
      title
      body
    }
  }
`