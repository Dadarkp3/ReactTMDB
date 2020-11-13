import React from 'react';
import PropTypes from 'prop-types'
// Styles
import { Wrapper } from './styles.js';

const Button = ({ text, callback }) => (
	<Wrapper type="button" onClick={callback}>
		{text}
	</Wrapper>
);

Button.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func,
}

export default Button;
