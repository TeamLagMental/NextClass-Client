import gql from 'graphql-tag'

//
export const GETSTUDENTTASKS = gql`
    query getStudentTasks($userID: ID!){
        getStudentTasks(userID: $userID){
            id
            subjectID
            userID
            title
            body
            createdAt
            delivered
        }
    }
`

export const GETSTUDENTTASK = gql`
    query getStudentTask($studentTaskID: ID!){
        getStudentTask(studentTaskID: $studentTaskID){
            id
            subjectID
            userID
            title
            body
            createdAt
            delivered
        }
    }
`