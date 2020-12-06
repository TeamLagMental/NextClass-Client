import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GETUSER } from '../index'

function GetUserNames(props){
    const userId = props.userID
    const { loading, error, data } = useQuery(GETUSER, {
        variables: { userId }
    })

    if(error) return <>ERROR...</>
    if(loading) return <>...</>

    return data.getUser.lastNames + ' ' + data.getUser.names
}

export default GetUserNames