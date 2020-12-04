import React from 'react'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import App from './App'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_URI,
  credentials: 'same-origin'
})

const wsLink = new WebSocketLink({
  //uri: `ws://localhost:5000/graphql`,
  uri: `ws://sheltered-everglades-00923.herokuapp.com/graphql`,
  timeout: 30000,
  options: {
    reconnect: true
  }
})

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken')
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  //authLink.concat(httpLink),
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link, //authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)