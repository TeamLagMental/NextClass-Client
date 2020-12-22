import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { dateFormat } from '../../../utils'

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: 'bold'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0
    },
    taskName: {

        padding: 0
    }
}))

export default function TeacherTasksAccordion(props){
    const data = props.data
    const key = props.k
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    const title = (text) => { return <span className={ classes.heading }>{text}</span> }
    const newDate = dateFormat(data.createdAt)

    return(
        <Accordion expanded={expanded === 'panel'+key} onChange={handleChange('panel'+key)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={'panel'+key+'bh-content'}
                id={'panel'+key+'bh-header'}
            >
                <ListItem className={classes.list}>
                    <ListItemAvatar>
                        <Avatar>
                            <AssignmentIcon fontSize="small"/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={title(data.title)} secondary={newDate}/>
                </ListItem>
            </AccordionSummary>
            <Divider/>
            <AccordionDetails>
                <List className={classes.list}>
                    <ListItem>
                        <Typography component={'span'}>
                            {data.body}
                        </Typography>
                    </ListItem>
                    <Divider light />
                    <ListItem>
                        <Link to={'/d/teacher/subjects/'+data.subjectID+'/tasks/'+data.id}>
                            <Button variant="outlined" size="small" color="primary">
                                Ver tarea
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    ) 
}