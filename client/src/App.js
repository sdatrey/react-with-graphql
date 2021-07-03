import './App.css';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import logo from './logo.png'
import React from "react";
import Launches from "./components/Launches";
import {Switch, Route} from 'react-router-dom';
import Launch from "./components/Launch";


function App() {


  const client = new ApolloClient({
      uri: 'http://localhost:5000/graphql',
      cache: new InMemoryCache()
  })
  return (
          <ApolloProvider client={client}>
              <div className="container">
                  <Switch>
                      <Route path='/' exact>
                          <Launches/>
                      </Route>
                      <Route path='/launch/:flight_number' exact>
                        <Launch />
                      </Route>
                  </Switch>
              </div>
          </ApolloProvider>
  );
}

export default App;
