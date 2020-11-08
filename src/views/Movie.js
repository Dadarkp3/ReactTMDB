import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../helpers/config';

// Components
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import BreadCrumbs from '../components/BreadCrumbs';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image
import NoImage from '../assets/images/no_image.jpg';

const Movie = () => {
	const { movieId } = useParams();
	const { state: movie, loadingo, error } = useMovieFetch(movieId);

	return (
		<>
			<BreadCrumbs movieTitle={movie.title} />
			<div>Movie</div>
		</>
	);
};

export default Movie;
