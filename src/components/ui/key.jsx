import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Key = ( { keyValue, bigKey }) => {

	const { grid, setGrid, attempt, setAttempt } = useContext(AppContext);

	function chooseLetter() {
		const edittedGrid = [...grid];
		edittedGrid[attempt.row][attempt.column] = keyValue;
		setGrid(edittedGrid);
		setAttempt({...attempt, column: attempt.column + 1});
	}

  return (
    <button className={`key ${bigKey && "large"}`} onClick={chooseLetter} >
      {keyValue}
    </button>
  );
}

export default Key;
