import React from 'react';

// Styles
import { Wrapper, Content } from './styles.js';

const Grid = ({ header, children }) => (
	<Wrapper>
		<h1>{header}</h1>
		<Content>{children}</Content>
	</Wrapper>
);

export default Grid;
