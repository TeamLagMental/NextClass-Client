import gql from 'graphql-tag'

//import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            id
            email
            username
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
            createdAt
            students {
                id
                status
                year
            }
        }
        
    }
`

export const SUBJECT = gql`
    query getSubject($subjectId: ID!){
        getSubject(subjectId: $subjectId){
            id
            name
            description
            teacher
            createdAt
            students {
                id
                status
                year
            }
        }
        
    }
`