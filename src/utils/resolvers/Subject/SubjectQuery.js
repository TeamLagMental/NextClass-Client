import gql from 'graphql-tag'

export const GETSUBJECT = gql`
    query getSubject($subjectId: ID!){
        getSubject(subjectId: $subjectId){
            id
            name
            description
            teacher
            image
            image
            careers{
                id
            }
        }
    }
`

export const GETSUBJECTSUSER = gql`
    query getSubjectsUser($userId: ID!){
        getSubjectsUser(userId: $userId){
            id
            name
            description
            careers{
                id
            }
            teacher
            image
            createdAt
        }
    }
`