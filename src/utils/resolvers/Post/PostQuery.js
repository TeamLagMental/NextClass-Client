import gql from 'graphql-tag'

export const GETPOSTS = gql`
    query getPosts{
        getPosts{
            id
            body
            createdAt
            subjectID
            comments{
                id
                createdAt
                userID
                body
            }
            likes{
                id
                createdAt
                userID
            }
            likeCount
            commentCount
            user
        }
    }
`

export const GETSUBJECTPOSTS = gql`
    query getSubjectPosts($subjectID: ID!){
        getSubjectPosts(subjectID: $subjectID){
            id
            body
            createdAt
            subjectID
            likeCount
            commentCount
            user
        }
    }
`