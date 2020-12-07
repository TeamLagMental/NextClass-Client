import ReactDOM from 'react-dom'
import React from 'react';
import ApolloProvider from './ApolloProvider'
import './css/estilos.css'

ReactDOM.render(
    <React.StrictMode>{ApolloProvider}</React.StrictMode>,
    document.getElementById('root')
)