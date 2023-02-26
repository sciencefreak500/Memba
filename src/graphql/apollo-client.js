import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://hasura.dappd.net/v1/graphql",
    fetch,
    headers: {},
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
