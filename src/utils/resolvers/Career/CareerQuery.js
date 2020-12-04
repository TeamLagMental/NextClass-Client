import gql from 'graphql-tag'

export const CAREER = gql`
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

export const CAREERS = gql`
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