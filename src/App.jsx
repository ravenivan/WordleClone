import { useState, createContext } from 'react'
import './App.css'
import Keyboard from './components/keyboard.jsx'
import Grid from './components/grid.jsx'
import Nav from './components/nav.jsx'
import { wordleGrid } from './words.js'

export const AppContext = createContext();

function App() {

  const [user, setUser] = useState(null);
  const [grid, setGrid] = useState(wordleGrid);
  const [attempt, setAttempt] = useState({ row: 0, column: 0 });

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
      return;
    }
    setAttempt({ row: attempt.row + 1, column: 0 });
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


  return (
    <>
      <AppContext.Provider value={{
        grid, setGrid,
        attempt, setAttempt,
        user, setUser,
        selectLetter, deleteLetter, enter
      }}>
        <Nav />
        <Grid />
        <Keyboard />
      </AppContext.Provider>
    </>
  )
}

export default App;
