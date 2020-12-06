import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: "0px"
    }
})

function SubjectTabs(props){
    const subjectID = props.subjectID
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Tabs>
                <Link to={'/d/student/subjects/'+subjectID}><Tab label="Inicio"/></Link>
                <Link to={'/d/student/subjects/'+subjectID+'/tasks'}><Tab label="Trabajos de clase"/></Link>
                <Tab label="Otros" />
                <Tab label="Live" />
            </Tabs>
        </Paper>
    )
}

export default SubjectTabs