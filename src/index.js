import ReactDOM from 'react-dom'
import React from 'react';
import ApolloProvider from './ApolloProvider'

ReactDOM.render(
    <React.StrictMode>{ApolloProvider}</React.StrictMode>,
    document.getElementById('root')
)