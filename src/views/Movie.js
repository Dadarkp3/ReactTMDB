import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../helpers/config';

// Components
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import BreadCrumbs from '../components/BreadCrumbs';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image
import NoImage from '../assets/images/no_image.jpg';
import Actor from '../components/Actor';

const Movie = () => {
	const { movieId } = useParams();
	const { state: movie, loading, error } = useMovieFetch(movieId);

	if (loading) return <Spinner />;
	if (error) return <div>...Opps, aconteceu algo de estranho!</div>;

	return (
		<>
			<BreadCrumbs movieTitle={movie.title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid header="Atores">
				{movie.actors.map((actor) => (
					<Actor
						key={actor.credit_id}
						image={
							actor.profile_path
								? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
								: NoImage
						}
						name={actor.name}
						character={actor.character}
					/>
				))}
			</Grid>
		</>
	);
};

export default Movie;
