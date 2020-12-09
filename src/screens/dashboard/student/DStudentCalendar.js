import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GETLESSONS } from './../../../utils'
import { CalendarApp } from './../../../components/dashboard'

const DStudentCalendar = () => {
    const { loading, error, data } = useQuery(GETLESSONS)

    if(loading) return <div>loading....</div>
    if(error) return <div>Error....</div>

    const events = data.getLessons

    return(
        <CalendarApp events={events}/>
    )
}

export default DStudentCalendar