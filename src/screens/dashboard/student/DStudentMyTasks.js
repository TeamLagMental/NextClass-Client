import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Wrapper, SubjectTasksTable } from './../../../components/dashboard'

import { GETSTUDENTTASKS } from './../../../utils'
import { AuthContext } from './../../../context/auth'

export const DStudentMyTasks = () => {
    const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(GETSTUDENTTASKS, { variables: { userID: user.id } })

    if(loading) return <div>loading....</div>
    if(error) return <div>Error....</div>

    const myData = [
        { title: 'Mi tarea 1', subjectID: 'No definido', createdAt: '15/02/1999', delivered: 'No' },
        { title: 'Tarea entregar', subjectID: 'No definido', createdAt: '', delivered: 'No' },
        { title: 'Para matemática', subjectID: 'Matemática', createdAt: '', delivered: 'No' },
        { title: 'Para entregar 2', subjectID: 'Matemática', createdAt: '', delivered: 'No' },
    ]

    const tasks = data.getStudentTasks

    return (
        <Wrapper>
            <SubjectTasksTable dataPass={tasks}/>
        </Wrapper>
    )
}