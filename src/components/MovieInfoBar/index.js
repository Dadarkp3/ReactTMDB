import React from 'react';
import PropTypes from 'prop-types';

// helpers
import { calcTime, convertMoney } from '../../helpers/helpers';

// Styles
import { Wrapper, Content } from './styles.js';

const MovieInfoBar = ({ time, budget, revenue }) => (
	<Wrapper>
		<Content>
			<div className="column">
				<p>Tempo de duração: {calcTime(time)}</p>
			</div>
			<div className="column">
				<p>Orçamento: {convertMoney(budget)}</p>
			</div>
			<div className="column">
				<p>Lucro: {convertMoney(revenue)}</p>
			</div>
		</Content>
	</Wrapper>
);

MovieInfoBar.propTypes = {
	time: PropTypes.number,
	budget: PropTypes.number,
	revenue: PropTypes.number
}

export default MovieInfoBar;
