import { useState, createContext, useEffect, useRef } from 'react'
import axios from "axios"
import './App.css'
import Keyboard from './components/keyboard.jsx'
import Grid from './components/grid.jsx'
import Nav from './components/nav.jsx'
import { wordleGrid, emptyWordleGrid } from './words.js'
import wordbank from "./wordbank.txt";
import toast, { Toaster } from 'react-hot-toast';
import GameEnd from './components/gameEnd.jsx';
import { logNewGame } from './userData.js'
// import {auth} from './firebase/firebase.js';

export const AppContext = createContext();

function App() {

  const [user, setUser] = useState(null);
  const [grid, setGrid] = useState(wordleGrid);
  const [attempt, setAttempt] = useState({ row: 0, column: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [wrongLetters, setWrongLetters] = useState([]);
  const [chosenWord, setChosenWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    isWordGuessed: false
  });
  const [hideEndScreen, setHideEndScreen] = useState(true);

  const isFirstRender = useRef(true);


  /* Word Set */

  async function fetchWordSet() {
    const { data } = await axios("http://localhost:5173/src/wordbank.txt");

    const wordArr = data.split("\n")
    const wordsSet = new Set(wordArr);

    const wordChosen = wordArr[Math.floor(Math.random() * wordArr.length )]
    
    setChosenWord(wordChosen.toUpperCase());
    setWordSet(wordsSet)
  }

  useEffect(() => {
    fetchWordSet()
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log('asd');
      return;
    }
    logNewGame(attempt, gameOver, user);
  }, [gameOver.gameOver])

  /* Letters and keyboard functionality */

  function deleteLetter() {
    if (attempt.column === 0) {
      return;
    }
    const edittedGrid = [...grid];
    edittedGrid[attempt.row][attempt.column - 1] = "";
    setGrid(edittedGrid);
    setAttempt({ ...attempt, column: attempt.column - 1 });
  }

  function enter() {
    if (attempt.column !== 5) {
      toast.error("Not a 5 letter word!")
      return;
    }

    let enteredGuess = "";
    for (let i = 0; i < 5; i++) {
      enteredGuess += grid[attempt.row][i];
    }

    if (wordSet.has(enteredGuess.toLowerCase() /* + "\r" */)) {
      setAttempt({ row: attempt.row + 1, column: 0 });
    } else {
      toast.error("Word not found!");
    }

    if (enteredGuess /* + "\r" */=== chosenWord) {
      toast.success("You win!")
      setGameOver({gameOver: true, isWordGuessed: true});
      setHideEndScreen(false);
      return;
    }

    if (attempt.row === 5) {
      toast(chosenWord);
      setGameOver({gameOver: true, isWordGuessed: false});
    }

    console.log(chosenWord);
    console.log(attempt.row);
  }

  function selectLetter(keyValue) {
    if (attempt.column >= 5) {
      return;
    }
    const edittedGrid = [...grid];
    edittedGrid[attempt.row][attempt.column] = keyValue;
    setGrid(edittedGrid);
    setAttempt({ ...attempt, column: attempt.column + 1 });
  }

  // /* New Game */
  // function restartGame() {
	// 	setGrid(emptyWordleGrid);
  //   setAttempt({ row: 0, column: 0 });
  //   setWrongLetters([]);

	// }


  return (
    <>
      <AppContext.Provider value={{
        grid, setGrid,
        attempt, setAttempt,
        user, setUser,
        selectLetter, deleteLetter, enter,
        chosenWord,
        wrongLetters, setWrongLetters,
        gameOver, setGameOver,
        hideEndScreen, setHideEndScreen
      }}>
        <Toaster position='top-center' />
        <Nav />
        <Grid />
        <Keyboard />
        <GameEnd />
      </AppContext.Provider>
    </>
  )
}

export default App;
