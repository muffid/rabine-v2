import { GraphQLClient } from 'graphql-request';

const endpoint = `${process.env.NEXT_PUBLIC_HYGRAPH_URL}`

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer `+`${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});