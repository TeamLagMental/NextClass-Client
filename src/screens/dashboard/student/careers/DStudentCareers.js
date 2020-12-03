import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper, Loader1, PostCard2 } from './../../../../components/dashboard'
import { Grid } from '@material-ui/core'


function DStudentCareers(){
    

    return (
      <Wrapper>
      <Grid>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={3} key="">
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        buttons={
                            <Button to="">Más Información</Button>
                        }
                    />
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Button to="">Más Información</Button>
                        }
                    />
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Button to="">Más Información</Button>
                        }
                    />
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Button to="">Más Información</Button>
                        }
                    />
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Button to="">Más Información</Button>
                        }
                    />
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Button to="">Más Información</Button>
                        }
                    />
                </Grid>
      </Grid>
  </Wrapper>
    )
}

export default DStudentCareers