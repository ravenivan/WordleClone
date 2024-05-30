import React from 'react';
import { wordleGrid } from '../words';
import TileLetter from './tileLetter';
import { useState } from 'react';

const Grid = () => {



	return (
		<div className="grid">
			<TileLetter row={0} column={0} />
			<TileLetter row={0} column={1} />
			<TileLetter row={0} column={2} />
			<TileLetter row={0} column={3} />
			<TileLetter row={0} column={4} />

			<TileLetter row={1} column={0} />
			<TileLetter row={1} column={1} />
			<TileLetter row={1} column={2} />
			<TileLetter row={1} column={3} />
			<TileLetter row={1} column={4} />

			<TileLetter row={2} column={0} />
			<TileLetter row={2} column={1} />
			<TileLetter row={2} column={2} />
			<TileLetter row={2} column={3} />
			<TileLetter row={2} column={4} />

			<TileLetter row={3} column={0} />
			<TileLetter row={3} column={1} />
			<TileLetter row={3} column={2} />
			<TileLetter row={3} column={3} />
			<TileLetter row={3} column={4} />

			<TileLetter row={4} column={0} />
			<TileLetter row={4} column={1} />
			<TileLetter row={4} column={2} />
			<TileLetter row={4} column={3} />
			<TileLetter row={4} column={4} />

			<TileLetter row={5} column={0} />
			<TileLetter row={5} column={1} />
			<TileLetter row={5} column={2} />
			<TileLetter row={5} column={3} />
			<TileLetter row={5} column={4} />

		</div>
	);
}

export default Grid;
