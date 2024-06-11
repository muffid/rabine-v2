import { useEffect } from "react";
import { graphQLClient } from "../lib/graphql-client"
import { GET_PRODUCTS } from "../lib/product-queries"
export default function halaman_iku({products}){

    return(
        <>
            <h1>Halaman Iku</h1>
        </>
    )
}
export async function getStaticProps() {
    const data = await graphQLClient.request(GET_PRODUCTS);
    return {
      props: {
        products: data.presets,
      },
    };
  }