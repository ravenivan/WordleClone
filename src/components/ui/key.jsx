import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Key = ({ keyValue, bigKey, wrong }) => {

	const { selectLetter, deleteLetter, enter } = useContext(AppContext);

	function chooseLetter() {
		if (keyValue === "ENTER") {
			enter();
		} else if (typeof keyValue !== 'string') {
			deleteLetter();
		} else {
			selectLetter(keyValue);
		}
	}

	return (
		<button className={`key ${bigKey && "large"} ${wrong && "wrong"}`} onClick={chooseLetter} tabIndex={-1} >
			{keyValue}
		</button>
	);
}

export default Key;
