import gql from 'graphql-tag'

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            id
            email
            username
            names
            secondNames
            lastNames
            createdAt
            access_id
            ranks
            token
        }
    }
`

export const SUBJECTS = gql`
    query {
        getSubjects {
            id
            name
            description
            image
            students {
                id
                status
                year
            }
        }
    }
`

export const STUDENT_SUBJECTS = gql`
    query getSubjectsUser($userId: ID!){
        getSubjectsUser(userId: $userId){
            id
            name
            description
            teacher
            image
            createdAt
            students {
                id
                status
                year
            }
        }
        
    }
`

export const TEACHER = gql`
    query getUser($userId: ID!){
        getUser(userId: $userId){
            id
            names
            secondNames
            lastNames
        }
        
    }
`