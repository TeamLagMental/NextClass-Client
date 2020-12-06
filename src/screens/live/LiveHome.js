import React from "react"
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Wrapper, PostCard2 } from '../../components/dashboard'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
    grid: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%'
    },
    video: {
        height: '55vh'
    },
    videos: {
        height: '27vh'
    },
    buttons: {
        height: '7vh'
    },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',

  },
}));


const LiveHome = () => {
    const classes = useStyles() 

  return(
    <Paper spacing={12}>
        <Wrapper>
        <Grid  container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={7} >
                <PostCard2 spacing={3}
                    image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                    imageHeight={250}
                />
                <Paper variant="outlined">
                <Grid container direction="row"justify="center"alignItems="center" >
                    <Button>Activar camara</Button>
                    <Button>Activar Microfono</Button>
                </Grid>
                </Paper>
            </Grid>
            <Paper variant="outlined">
                <Grid>
                    <CardHeader title="Matematicas" subheader="04-12-2020" />
                    <CardContent>
                        <Button>Ingresar a la clase</Button>
                    </CardContent>
                </Grid>
            </Paper>    
            </Grid>
        </Wrapper>
    </Paper> 
    )
}


export default LiveHome;