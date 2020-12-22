import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: "0px",
        backgroundColor: "#4040a1"
    }
})

function SubjectTabs(props){
    const subjectID = props.subjectID
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Tabs centered>

                <Link to={'/d/student/subjects/'+subjectID}>
                    <Tab label="Inicio" style={{ color: "white" }}/>
                </Link>
                <Link to={'/d/student/subjects/'+subjectID+'/tasks'}>
                    <Tab label="Trabajos de clase" style={{ color: "white" }}/>
                </Link>
                <Link to={'/d/student/subjects/'+subjectID+'/lessons'}>
                    <Tab label="Clases" style={{ color: "white" }}/>
                </Link>
            </Tabs>
        </Paper>
    )
}

export default SubjectTabs