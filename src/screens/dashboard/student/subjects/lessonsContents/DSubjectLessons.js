import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Button from '@material-ui/core/Button';
import { GETSUBJECTLESSONS, dateFormat } from '../../../../../utils'
import { Loader1, SubjectTabs, Wrapper } from '../../../../../components/dashboard'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function DSubjectLessons(props){
    const subjectID = props.match.params.id
    const classes = useStyles();
    const { loading, error, data } = useQuery(GETSUBJECTLESSONS, { variables: { subjectID } })

    if(loading) return <Loader1/>
    if(error) return <div>Error al cargar las tareas...</div>

    const lessons = data.getSubjectLessons

    const newDate = (param) => {
        const date = dateFormat(new Date(parseInt(param)).toISOString().toString())
        return <>{date}</>
    }

    const getStatus = (start1, end1) => {
        const now = new Date().toISOString()
        const start = new Date(parseInt(start1)).toISOString()
        const end = new Date(parseInt(end1)).toISOString()

        return now < start ? (
            <TimelineDot>
                <AccessTimeIcon/>
            </TimelineDot>
        ) : now > start && now < end ? (
            <TimelineDot color="primary">
                <AccessTimeIcon/>
            </TimelineDot>
        ) : (
            <TimelineDot color="primary">
                <CheckCircleIcon/>
            </TimelineDot>
        )
    }

    return(
        <>
        <SubjectTabs subjectID={subjectID}/>
        <Wrapper>
            <Timeline align="alternate">
            {
                lessons.length > 0 ? lessons.map((lesson, key) => {
                    
                    return (
                        <TimelineItem key={key}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    {newDate(lesson.start)}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {getStatus(lesson.start, lesson.end)}
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {lesson.title}
                                    </Typography>
                                    <Typography>
                                        {lesson.description}
                                    </Typography>
                                    <Typography>
                                        <Link to={'/live/'+subjectID+'/l/'+lesson.id}>
                                            <Button variant="outlined" size="small" color="primary">
                                                Ingresar a la clase
                                            </Button>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    )
                }) : (
                    <div>No se encontró ninguna clase...</div>
                )
            }
            </Timeline>
        </Wrapper>
        </>
    )
}

export default DSubjectLessons