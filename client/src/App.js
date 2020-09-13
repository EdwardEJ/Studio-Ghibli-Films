import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GhibliMovies from './components/GhibliMovies'
import Film from './components/Film'
import Header from './components/Header'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={GhibliMovies} />
          <Route exact path="/Film/:id" component={Film} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
