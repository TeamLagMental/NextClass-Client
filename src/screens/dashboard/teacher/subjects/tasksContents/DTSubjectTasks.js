import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles'
import { GETSUBJECTTASKS } from '../../../../../utils'
import { Loader1, SubjectTeacherTabs, Wrapper, TeacherTasksAccordion } from '../../../../../components/dashboard'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}))

export function DTSubjectTasks(props){
    const subjectID = props.match.params.id
    const classes = useStyles()
    const { loading, error, data } = useQuery(GETSUBJECTTASKS, { variables: { subjectID } })

    if(loading) return <Loader1/>
    if(error) return <div>Error al cargar las tareas...</div>

    const tasks = data.getSubjectTasks

    return (
        <>
        <SubjectTeacherTabs subjectID={subjectID}/>
        <Wrapper>
        {
            tasks.length > 0 ? (
                <div className={classes.root}>
                    {tasks.map((task, key) => {
                        return <TeacherTasksAccordion data={task} k={key} key={key}/>
                    })}
                </div>
            ) : (
                <div>¡Hurra! No se encontró ningún trabajo.</div>
            )
        }
        </Wrapper>
        </>
    )
}