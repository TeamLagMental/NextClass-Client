import React from 'react';
import File from  "../docs/ReactJS.pdf"
function lol() {
    const file = File
    
    return typeof window.orientation == "undefined" ?
    
    (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <object
                data={file}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                </object>
            </div>
        ):(<a href={file} id="enlaceDescargarPdf"
        download="ReactJS.pdf"
        >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>)
        
}

export default lol;