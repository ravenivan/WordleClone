import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const TileLetter = ( { row, column }) => {
    const { grid } = useContext(AppContext);
    return (
        <div className="tile">{grid[row][column]}</div>
    );
}

export default TileLetter;
