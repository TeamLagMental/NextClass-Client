import React, { useContext, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { SUBJECT } from './../../../../utils'
import { AuthContext } from './../../../../context/auth'
import { Wrapper, Loader1 } from './../../../../components/dashboard'
import DSSubjectHome from './contents/DSSubjectHome'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: "0px"
    }
})

function DStudentSubject(props){
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const subjectId = props.match.params.id
    const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(SUBJECT, {
        variables: { subjectId }
    })
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return loading ? (
        <Loader1/>
    ) : error ? (
        <p>ERROR</p>
    ) : data.getSubject.students.filter(e => e.id === user.id).length > 0 ? (
        <>
            <Paper className={classes.root}>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Inicio" />
                    <Tab label="Trabajos de clase" />
                    <Tab label="Otros" />
                </Tabs>
            </Paper>

            <Wrapper>
                {
                    value === 0 ?
                        <DSSubjectHome subjectId={subjectId}/>
                    : value === 1 ?
                        'Trabajos'
                    : 'Otros'
                }
            </Wrapper>
        </>
    ) : (
        <p>La materia existe pero no estás inscripto en ella</p>
    )
}

export default DStudentSubject