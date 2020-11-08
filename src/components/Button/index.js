import React from 'react';

// Styles
import { Wrapper } from './styles.js';

const Button = ({ text, callback }) => (
	<Wrapper type="button" onClick={callback}>
		{text}
	</Wrapper>
);

export default Button;
