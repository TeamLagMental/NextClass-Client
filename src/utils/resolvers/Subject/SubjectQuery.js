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