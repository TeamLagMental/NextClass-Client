import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import ReactQuill from 'react-quill';
import Button from '@material-ui/core/Button';
import { Wrapper } from './../../../../components/dashboard'

import 'react-quill/dist/quill.snow.css';
import './editor.css';

export const DStudentAddTask = () => {
    const [text] = useState('')

    return (
        <Wrapper>
            <Card className="overflow-visible">
                <ReactQuill value={text} placeholder={'Escribe algo...'} />
            </Card>
            <br></br>
            <Button variant="outlined" color="primary">
                Guardar
            </Button>
        </Wrapper>
    )
}