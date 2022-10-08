import { ApolloProvider } from '@apollo/client';
import React, { Suspense, lazy } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const GhibliMovies = lazy(() => import('./components/GhibliMovies'));
const Film = lazy(() => import('./components/Film'));
const Header = lazy(() => import('./components/Header'));

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Suspense fallback={<p>Loading...</p>}>
					<div className='App'>
						<Routes>
							<Route path='/' element={<Header />} />
							<Route exact path='/' element={<GhibliMovies />} />
							<Route exact path='/Film/:id' element={<Film />} />
						</Routes>
					</div>
				</Suspense>
			</Router>
		</ApolloProvider>
	);
}

export default App;
