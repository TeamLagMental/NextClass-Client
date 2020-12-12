import gql from 'graphql-tag'

export const GETCAREER = gql`
    query getCareer($careerId: ID!){
        getCareer(careerId: $careerId){
            id
            name
            description
            director
            year
        }
    }
`

export const GETCAREERS = gql`
    query {
        getCareers {
            id
            name
            description
            director
            year
        }
    }
`