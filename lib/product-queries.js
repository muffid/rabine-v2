// lib/queries.js
import { gql } from 'graphql-request';

export const GET_PRODUCTS = gql`
 query Presets {
  presets {
    createdAt
    id
    price
    productName
    publishedAt
    updatedAt
    image {
      url
    }
    category
    slug
  }
}
`;
