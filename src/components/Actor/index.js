import React from 'react';

// Styles
import { Wrapper, Image } from './styles.js';

const Actor = ({ image, name, character }) => (
	<Wrapper>
		<Image src={image} alt="actor-thumb" />
		<h3>{name}</h3>
		<p>{character}</p>
	</Wrapper>
);

export default Actor;
