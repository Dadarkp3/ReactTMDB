import React from 'react';
import { Link } from 'react-router-dom';

//Image
import RMDBLogo from '../../assets/images/react-movie-logo.svg';
import TMDBLogo from '../../assets/images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './styles.js';

const Header = () => (
	<Wrapper>
		<Content>
			<Link to="/">
				<LogoImg src={RMDBLogo} alt="rmdb-logo" />
			</Link>
			<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
		</Content>
	</Wrapper>
);

export default Header;
