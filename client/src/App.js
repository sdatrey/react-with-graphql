import './App.css';
import {ApolloClient} from '@apollo/client';
import {ApolloProvider} from "@apollo/client";

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphiql'
  })
  return (
      <ApolloProvider client={client}>
        <div className="App">

        </div>
      </ApolloProvider>

  );
}

export default App;
