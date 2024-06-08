import React, { useCallback, useContext, useEffect } from 'react';
import Key from './ui/key';
import { AppContext } from '../App';

const Keyboard = () => {

  const { enter, deleteLetter, selectLetter, wrongLetters} = useContext(AppContext);

  const row1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3Keys = ["Z", "X", "C", "V", "B", "N", "M"];
  const allLetterKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

  const keyboardEventListener = useCallback((event) => {
    if (event.key === "Enter") {
      enter();
    } else if (event.key === "Backspace") {
      deleteLetter();
    } else {
      allLetterKeys.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          selectLetter(key);
        }
      })
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", keyboardEventListener)

    return () => {
      document.removeEventListener("keydown", keyboardEventListener)
    }
  }, [keyboardEventListener])

  return (
    <div className='keyboard' onKeyDown={keyboardEventListener} >
      {row1Keys.map((keyVal, key) => {
        return <Key keyValue={keyVal} bigKey={false} wrong={wrongLetters.includes(keyVal)} key={key} />
      })}
      <div className="space"></div>
      {row2Keys.map((keyVal, key) => {
        return <Key keyValue={keyVal} bigKey={false} wrong={wrongLetters.includes(keyVal)} key={key} />
      })}
      <div className="space"></div>
      <Key keyValue={"ENTER"} bigKey={true} />
      {row3Keys.map((keyVal, key) => {
        return <Key keyValue={keyVal} bigKey={false} wrong={wrongLetters.includes(keyVal)} key={key} />
      })}
      <Key keyValue={
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" className="game-icon backspace" data-testid="icon-backspace">
          <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
        </svg>}
        bigKey={true}
      />


      {/* <button data-delete className="key large">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" className="game-icon backspace" data-testid="icon-backspace">
					<path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>
				</button> */}

    </div>
  );
}

export default Keyboard;
