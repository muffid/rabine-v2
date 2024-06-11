import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.HYGRAPH_URL

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer `+process.env.HYGRAPH_TOKEN,
  },
});