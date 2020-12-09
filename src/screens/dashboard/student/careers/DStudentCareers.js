import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper, Loader1, PostCard2 } from './../../../../components/dashboard'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
function DStudentCareers(){
    return (
      <Wrapper>
        <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                >
        <Grid item xs={12} sm={6} md={3}>
            <Wrapper>
            <PostCard2 spacing={3}
                title="Nombre de la Carrera"
                subtitle="Duracion: 3 años"
                image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                imageHeight={150}
                text="Inscripciones Cerradas"
                buttons={
                    <Link to="./Career">
                    <Button >Más Información</Button>
                    </Link>
                }
            />
            </Wrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Wrapper>
            <PostCard2 spacing={3}
                title="Nombre de la Carrera"
                subtitle="Duracion: 3 años"
                image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                imageHeight={150}
                text="Inscripciones Cerradas"
                buttons={
                    <Link to="./Career">
                    <Button >Más Información</Button>
                    </Link>
                }
            />
            </Wrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Wrapper>
            <PostCard2 spacing={3}
                title="Nombre de la Carrera"
                subtitle="Duracion: 3 años"
                image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                imageHeight={150}
                text="Inscripciones Cerradas"
                buttons={
                    <Link to="./Career">
                    <Button >Más Información</Button>
                    </Link>
                }
            />
            </Wrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Wrapper>
            <PostCard2 spacing={3}
                title="Nombre de la Carrera"
                subtitle="Duracion: 3 años"
                image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                imageHeight={150}
                text="Inscripciones Cerradas"
                buttons={
                    <Link to="./Career">
                    <Button >Más Información</Button>
                    </Link>
                }
            />
            </Wrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Wrapper>
            <PostCard2 spacing={3}
                title="Nombre de la Carrera"
                subtitle="Duracion: 3 años"
                image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                imageHeight={150}
                text="Inscripciones Cerradas"
                buttons={
                    <Link to="./Career">
                    <Button >Más Información</Button>
                    </Link>
                }
            />
            </Wrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Wrapper>
            <PostCard2 spacing={3}
                title="Nombre de la Carrera"
                subtitle="Duracion: 3 años"
                image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                imageHeight={150}
                text="Inscripciones Cerradas"
                buttons={
                    <Link to="./Career">
                    <Button >Más Información</Button>
                    </Link>
                }
            />
            </Wrapper>
        </Grid>
        </Grid>
    </Wrapper>
    )
}

export default DStudentCareers