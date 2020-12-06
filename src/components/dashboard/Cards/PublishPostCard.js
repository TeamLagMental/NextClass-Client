import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import TextField from '@material-ui/core/TextField';

function PublishPostCard(props){
    const subjectID = props.subjectID
    const mutation = props.mutation
    let myBody
    const [buttonState, setButtonState] = useState(true)
    const textFieldChange = () => {
        const textFieldValue = document.getElementById('myBody').value
        textFieldValue.length === 0 ? setButtonState(true) : setButtonState(false)
        myBody = textFieldValue
    }

    const [setPost] = useMutation(mutation)

    return (
        <form>
            <Card className="mb-xs">
                <TextField
                    label="Comparte algo..."
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    style={{ margin: 8, width: '97%', minWidth: '97%', maxWidth: '100%' }}
                    onChange={textFieldChange}
                    id="myBody"
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

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={buttonState}
                        onClick={ async(e) => {
                            e.preventDefault()
                            await setPost({ variables: { body: myBody, subjectID: subjectID } })
                        }}
                    >
                        Publicar
                    </Button>
                </CardActions>
            </Card>
        </form>
    )
}

export default PublishPostCard