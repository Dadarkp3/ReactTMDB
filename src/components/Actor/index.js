import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './styles.js';

const Actor = ({ image, name, character }) => (
	<Wrapper>
		<Image src={image} alt="actor-thumb" />
		<h3>{name}</h3>
		<p>{character}</p>
	</Wrapper>
);

Actor.propTypes = {
	image : PropTypes.string,
	name : PropTypes.string,
	character: PropTypes.string
}

export default Actor;
