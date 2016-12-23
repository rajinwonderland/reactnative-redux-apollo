import ApolloClient, { createNetworkInterface } from 'apollo-client'

// eslint-disable-next-line
export const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' }),
})
