import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GETCAREER } from './../index'

function GetCareerName(props){
    const careerId = props.careerId
    const { loading, error, data } = useQuery(GETCAREER, { careerId })

    if(error) return <>ERROR...</>
    if(loading) return <>...</>

    return data.getCareer.name
}

export default GetCareerName