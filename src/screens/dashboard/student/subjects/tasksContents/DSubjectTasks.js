import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles'
import { GETSUBJECTTASKS } from '../../../../../utils'
import { Loader1, SubjectTabs, Wrapper, TasksTab, TasksAccordion } from '../../../../../components/dashboard'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}))

function DSubjectTasks(props){
    const subjectID = props.match.params.id
    const classes = useStyles()
    const { loading, error, data } = useQuery(GETSUBJECTTASKS, { variables: { subjectID } })

    if(loading) return <Loader1/>
    if(error) return <div>Error al cargar las tareas...</div>

    const tasks = data.getSubjectTasks

    return (
        <>
        <SubjectTabs subjectID={subjectID}/>
        <Wrapper>
        {
            tasks.length > 0 ? (
                <div className={classes.root}>
                        {tasks.map((task, key) => {
                            return <TasksAccordion data={task} k={key} key={key}/>
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

export default DSubjectTasks