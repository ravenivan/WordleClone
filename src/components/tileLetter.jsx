import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const TileLetter = ({ row, column }) => {
	const { grid, chosenWord, attempt, wrongLetters, setWrongLetters } = useContext(AppContext);

	const tileLetter = grid[row][column]

	const correct = chosenWord[column] === tileLetter;
	const wrongSpot = !correct && tileLetter !== "" && chosenWord.includes(tileLetter);

	const tileState = (attempt.row > row) && (correct ? "correct" : wrongSpot ? "wrong-spot" : "wrong");

	useEffect(() => {
		if (tileLetter !== "" && !correct && !wrongSpot) {
			setWrongLetters((prev) => [...prev, tileLetter ])
		}
	}, [attempt.row])

	return (
		<div className={`tile ${tileState}`}>{tileLetter}</div>
	);
}

export default TileLetter;
