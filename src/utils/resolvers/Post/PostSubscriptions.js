import gql from 'graphql-tag'

export const NEWPOSTS = gql`
    subscription newPost{
        newPost{
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