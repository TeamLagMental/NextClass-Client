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
            <Grid item xs={12} sm={9} md={4}>
                <Wrapper>
                <PostCard2
                    title="Profesorado en matemática"
                    subtitle="Duracion: 4 años"
                    image={`https://www.famaf.unc.edu.ar/media/images/foto_retocada_baja_calidad.2e16d0ba.fill-960x420.jpg`}
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
            <Grid item xs={12} sm={9} md={4}>
                <Wrapper>
                <PostCard2
                    title="Profesorado en Lengua"
                    subtitle="Duracion: 4 años"
                    image={`https://media.eqsnotas.com/p/d7b7ddaa19ef476ad5d1cf28596c85a2/adjuntos/302/imagenes/000/255/0000255481/inscripcion-lengua-y-literatura.jpg`}
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