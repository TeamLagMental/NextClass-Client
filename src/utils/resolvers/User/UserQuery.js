import gql from 'graphql-tag'

export const GETUSER = gql`
    query getUser($userId: ID!){
        getUser(userId: $userId){
            id
            names
            secondNames
            lastNames
        }
        
    }
`

export const GETUSERSUBJECTS = gql`
    query getUserSubjects($userId: ID!){
        getUserSubjects(userId: $userId){
            id
            careerID
            teacherA
            teacherT
            student
            status
            enrollmentDate
        }
    }
`

export const GETUSERCAREERS = gql`
    query getUserCareers($userId: ID!){
        getUserCareers(userId: $userId){
            id
            director
            status
        }
    }
`