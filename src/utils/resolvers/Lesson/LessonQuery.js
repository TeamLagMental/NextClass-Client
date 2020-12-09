import gql from 'graphql-tag'

export const GETLESSONS = gql`
    query getLessons{
        getLessons{
            id
            teacherID
            subjectID
            createdAt
            start
            end
            title
            description
        }
    }
`

export const GETSUBJECTLESSONS = gql`
    query getSubjectLessons($subjectID: ID!){
        getSubjectLessons(subjectID: $subjectID){
            id
            teacherID
            subjectID
            createdAt
            start
            end
            title
            description
        }
    }
`