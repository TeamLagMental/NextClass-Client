import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper, Loader1, PostCard2 } from './../../../../components/dashboard'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
function DStudentCareers(){
    return (
      <Wrapper>
      <Grid>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={3} key="">
                <Wrapper>
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Link to="./Career">
                            <Button >Más Información</Button>
                            </Link>
                        }
                    /></Wrapper>
                    <Wrapper>
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Link to="./Career">
                            <Button >Más Información</Button>
                            </Link>
                        }
                    /></Wrapper>
                    <Wrapper>
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Link to="./Career">
                            <Button >Más Información</Button>
                            </Link>
                        }
                    /></Wrapper>
                    <Wrapper>
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Link to="./Career">
                            <Button >Más Información</Button>
                            </Link>
                        }
                    />
                    </Wrapper>
                    <Wrapper>
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Link to="./Career">
                            <Button >Más Información</Button>
                            </Link>
                        }
                    />
                    </Wrapper>
                    <Wrapper>
                    <PostCard2 spacing={3}
                        title="Nombre de la Carrera"
                        subtitle="Duracion: 3 años"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                        text="Inscripciones Cerradas"
                        buttons={
                            <Link to="./Career">
                            <Button >Más Información</Button>
                            </Link>
                        }
                    /></Wrapper>
                </Grid>
      </Grid>
  </Wrapper>
    )
}

export default DStudentCareers