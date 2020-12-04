import React from "react"
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core'
import { Wrapper, PostCard2 } from '../../components/dashboard'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const LiveHome = () => {

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