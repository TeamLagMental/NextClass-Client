import React, { useState } from 'react'
import { useSubscription } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { NEWPOSTS } from '../../../../../utils'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
}));

function DSSubjectPublicPosts(props){
    const subjectID = props.subjectID
    const classes = useStyles()
    const [buttonState2, setButtonState2] = useState(true)
    const { loading, error, data } = useSubscription(NEWPOSTS, {});

    const textFieldChange2 = () => {
        const textFieldValue2 = document.getElementById('standard-full-width 2').value
        textFieldValue2.length === 0 ? setButtonState2(true) : setButtonState2(false)
    }

    function myRender(param){
        return (
            <Card className="mb-xs">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <Divider/>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {param.body}
                    </Typography>
                </CardContent>
                <Divider/>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            RL
                        </Avatar>
                    </ListItemAvatar>
                    <ListItem>
                        
                        <TextField
                            id="standard-full-width 2"
                            label="Realizar un comentario..."
                            multiline
                            rows={1}
                            defaultValue=""
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            style={{ margin: 1 }}
                            onChange={textFieldChange2}
                        />
                        <Divider />
                        <CardActions>
                            <span className="flexSpacer" />
                            <Button variant="contained" color="primary" disabled={buttonState2} >
                                Publicar
                            </Button>
                        </CardActions>
                        
                    </ListItem>
                </ListItem>

            </Card>
        )
    }

    if (loading) return <></>
    if (error) return <div>ERROR INESPERADO</div>
    if(data){
        const postData = data.newPost
        return postData.subjectID === subjectID ? myRender(postData) : <></>
    }
}

export default DSSubjectPublicPosts