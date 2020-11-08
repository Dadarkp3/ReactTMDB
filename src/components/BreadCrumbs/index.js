import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content } from './styles.js';

const BreadCrumbs = ({ movieTitle }) => (
	<Wrapper>
		<Content>
			<Link to="/">
				<span>Home</span>
			</Link>
			<span>|</span>
			<span>{movieTitle}</span>
		</Content>
	</Wrapper>
);

export default BreadCrumbs;
