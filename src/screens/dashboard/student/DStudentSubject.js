import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SUBJECT } from './../../../utils'
import { AuthContext } from './../../../context/auth'

function DStudentSubject(props){
    const postId = props.match.params.id
    const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(SUBJECT, {
        variables: { subjectId: postId }
    })

    return loading ? (
        <p>Loading...</p>
    ) : error ? (
        <p>ERROR</p>
    ) : data.getSubject.students.filter(e => e.id === user.id).length > 0 ? (
        <div>
            {data.getSubject.id}
            {data.getSubject.name}
            {data.getSubject.students.map(s => s.id)}
        </div>
    ) : (
        <p>La materia existe pero no estás inscripto en ella</p>
    )
}

export default DStudentSubject