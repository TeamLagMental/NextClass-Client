import React, { Component } from 'react';

const file = require('../docs/ReactJS.pdf')
console.log(file)
console.log(file ? 'si': 'no')
class Pdf extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}><a href={file} id="enlaceDescargarPdf"
            download="ReactJS.pdf"
            >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                <object
                data={file}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    
                </object>
            </div>
        );
    }
}

export default Pdf;