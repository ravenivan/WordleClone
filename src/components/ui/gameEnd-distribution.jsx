import React from 'react';

const GameEndDistribution = ( {attempt, num} ) => {
	return (
		<div className="end-distribution-distribution">
			<h3 className="end-distribution-distribution-attempt">
				{attempt}
			</h3>
			<h3 className="end-distribution-distribution-num">
				{num}
			</h3>
		</div>
	);
}

export default GameEndDistribution;
