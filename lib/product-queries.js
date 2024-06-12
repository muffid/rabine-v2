
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

export const GET_PRODUCTS_BY_ID = (slug) =>{
  return(
    gql`
    query Presets {
      presets(where: {slug: "`+slug+`"}) {
        createdAt
        id
        price
        productName
        publishedAt
        updatedAt
        category
        slug
        image {
          url
        }
      }
    }
  `
  )
 
}
