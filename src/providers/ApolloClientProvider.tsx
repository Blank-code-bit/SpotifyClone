import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: "https://portocesareo.stepzen.net/api/mottled-moose/__graphql",
  headers: {
    Authorization:
      "apikey portocesareo::stepzen.net+1000::575db88f973f6f33362c15603a8741d6196ca3dee92dc2fd115cadb78236bc61",
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
