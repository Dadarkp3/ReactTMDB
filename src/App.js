import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './views/Home';
import Movie from './views/Movie';
import NotFound from './views/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/movie/:movieId" element={<Movie />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
		<GlobalStyle />
	</Router>
);

export default App;
