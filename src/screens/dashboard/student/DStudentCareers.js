import React from 'react'
import { Grid } from '@material-ui/core'
import { Wrapper } from '../../../components/dashboard'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

function DStudentCareers(){
    const classes = useStyles()

    return (
        <Wrapper>
            <Grid container spacing={1}>
                <div className={classes.root}>
                    <Button variant="outlined">Default</Button>
                    <Button variant="outlined" color="primary">
                        Primary
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="outlined" disabled>
                        Disabled
                    </Button>
                    <Button variant="outlined" color="primary" href="#outlined-buttons">
                        Link
                    </Button>
                </div>
            </Grid>
        </Wrapper>
    )
}

export default DStudentCareers