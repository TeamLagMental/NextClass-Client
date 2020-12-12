import React from 'react'
import { Wrapper, SubjectTasksTable } from './../../../components/dashboard'

export const DStudentMyTasks = () => {
    const myData = [
        { name: 'Hola', subject: 'ADSA', delivered: 'No' },
        { name: 'Hola1', subject: 'ADSA', delivered: 'No' },
        { name: 'Hola2', subject: 'ADSA', delivered: 'No' },
        { name: 'Hola3', subject: 'ADSA', delivered: 'No' },
    ]

    return (
        <Wrapper>
            <SubjectTasksTable dataPass={myData}/>
        </Wrapper>
    )
}