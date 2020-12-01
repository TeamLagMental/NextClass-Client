import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { SUBJECT } from './../../../../../utils'
//import { AuthContext } from './../../../../context/auth'

import { Loader1 } from './../../../../../components/dashboard'

function DSSubjectHome(props){
    const subjectId = props.subjectId
    //const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(SUBJECT, {
        variables: { subjectId }
    })
    
    return loading ? (
        <Loader1/>
    ) : error ? (
        <p>Hubo un error interno...</p>
    ) : (
        <>
            {data.getSubject.id}
            {data.getSubject.name}
            <br/>
            <Link to="/live/1">Live</Link>
            {data.getSubject.students.map(s => (<li>{s.id}</li>))}
        </>
    )
}

export default DSSubjectHome