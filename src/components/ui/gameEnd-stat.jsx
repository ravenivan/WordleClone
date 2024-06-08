import React from 'react';

const GameEndStat = ({ num, title }) => {
	return (
		<div className="end-stat">
			<div className="end-stat-num">
				{num}
			</div>
			<div className="end-stat-title">
				{title}
			</div>
		</div>
	);
}

export default GameEndStat;
