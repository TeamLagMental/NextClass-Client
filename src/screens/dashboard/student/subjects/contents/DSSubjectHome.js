import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

import TextField from '@material-ui/core/TextField';

import { GETSUBJECT } from './../../../../../utils'
//import { AuthContext } from './../../../../context/auth'
import { Loader1 } from './../../../../../components/dashboard'

import DSSubjectNewPosts from './DSSubjectNewPosts'

function DSSubjectHome(props){
    const subjectId = props.subjectId
    //const { user } = useContext(AuthContext)
    const [buttonState, setButtonState] = useState(true)
    const { loading, error, data } = useQuery(GETSUBJECT, {
        variables: { subjectId }
    })

    const textFieldChange = () => {
        const textFieldValue = document.getElementById('standard-full-width').value
        textFieldValue.length === 0 ? setButtonState(true) : setButtonState(false)
    }

    return loading ? (
        <Loader1/>
    ) : error ? (
        <p>Hubo un error interno...</p>
    ) : (
        <>
            { /*data.getSubject.id*/ }
            { /*data.getSubject.students.map(s => (<li>{s.id}</li>))*/ }

            <Card className="mb-xs">
                <TextField
                    id="standard-full-width"
                    label="Comparte algo..."
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    style={{ margin: 8, width: '97%', minWidth: '97%', maxWidth: '100%' }}
                    onChange={textFieldChange}
                />
                <Divider />
                <CardActions>
                    <IconButton className="ma-0" aria-label="Insert Photo">
                        <InsertPhotoIcon />
                    </IconButton>
                    <IconButton className="ma-0" aria-label="Insert Link">
                        <InsertLinkIcon />
                    </IconButton>
                    <span className="flexSpacer" />
                    <Button variant="contained" color="primary" disabled={buttonState} >
                        Publicar
                    </Button>
                </CardActions>
            </Card>

            <DSSubjectNewPosts subjectID={subjectId}/>
        </>
    )
}

export default DSSubjectHome