import './App.css';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import logo from './logo.png'
import React from "react";
import Launches from "./components/Launches";


function App() {


  const client = new ApolloClient({
      uri: 'http://localhost:5000/graphql',
      cache: new InMemoryCache()
  })
  return (
          <ApolloProvider client={client}>
              <div className="container">
                  <Launches/>
              </div>
          </ApolloProvider>
  );
}

export default App;
