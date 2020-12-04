import gql from 'graphql-tag'

export const GETCOMMENTS = gql`
    subscription getSubject($subjectId: ID!){
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