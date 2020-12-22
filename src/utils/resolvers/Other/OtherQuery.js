import gql from 'graphql-tag'

export const GETPDFCONTENT = gql`
    query getPDFContent($subjectID: ID!, $taskID: ID!, $userType: String!, $documentName: String!){
        getPDFContent(subjectID: $subjectID, taskID: $taskID, userType: $userType, documentName: $documentName){
            text
            pages
        }
    }
`

export const GETWORDCONTENT = gql`
    query getDocument($subjectID: ID!, $taskID: ID!, $userType: String!, $documentName: String!){
        getDocument(subjectID: $subjectID, taskID: $taskID, userType: $userType, documentName: $documentName){
            text
        }
    }
`