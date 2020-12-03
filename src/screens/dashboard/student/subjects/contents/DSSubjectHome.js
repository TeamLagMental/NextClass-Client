import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'

import { SUBJECT } from './../../../../../utils'
//import { AuthContext } from './../../../../context/auth'

import { Loader1, Wrapper, PostCard2, Comment } from './../../../../../components/dashboard'

function DSSubjectHome(props){
    const subjectId = props.subjectId
    //const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(SUBJECT, {
        variables: { subjectId }
    })
    
    return loading ? (
        <Loader1/>
    ) : error ? (
        <p>Hubo un error interno...</p>
    ) : (
        <>
            {data.getSubject.id}
            {data.getSubject.name}
            <br/>
            <Link to="/live/1">Live</Link>
            {data.getSubject.students.map(s => (<li>{s.id}</li>))}


            <Wrapper>
                <Grid container spacing={1}>
                    <Grid item sm={12} md={6}>
                        <PostCard2
                            avatar={
                                <Avatar alt="Rolon Lautaro" aria-label="Post"  style={{ backgroundColor: blue[500] }}> 
                                </Avatar>
                            }
                            title="Rolon Lautaro"
                            subtitle="00/00/0000"
                            text="Hola chicos como estan?"
                            buttons={
                                <Button to="">Comentar</Button>
                            }
                            comment={
                                <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems="stretch"
                                >
                                    <Comment text="Chupe al perro"
                                            avatar={
                                                <Avatar alt="Rolon Lautaro" aria-label="Post"  style={{ backgroundColor: blue[500] }}> 
                                                 </Avatar>
                                                }
                                            user="Silva">
                                    
                                    </Comment>
                                </Grid>
                            }
                        />
                    </Grid>
                </Grid>
            </Wrapper>

        </>
    )
}

export default DSSubjectHome