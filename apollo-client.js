import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://dazhou.stepzen.net/api/ponderous-ladybird/__graphql",
    headers: {
        authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;