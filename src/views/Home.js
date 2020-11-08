import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../helpers/config';

// Components
import ImageMovie from '../components/ImageMovie';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../assets/images/no_image.jpg';

const Home = () => {
	const {
		state,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setIsLoadingMore,
	} = useHomeFetch();
	return (
		<>
			{!loading && state.results[0] ? (
				<ImageMovie
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].title}
					text={state.results[0].overview}
				/>
			) : null}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? 'Filmes Populares' : 'Resultado da Busca'}>
				{state.results.map((movie) => (
					<Thumb
						key={movie.id}
						image={
							movie.poster_path
								? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
								: NoImage
						}
						movieId={movie.id}
						clickable={true}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading ? (
				<Button text="Carregar mais" callback={() => setIsLoadingMore(true)} />
			) : null}
		</>
	);
};

export default Home;
