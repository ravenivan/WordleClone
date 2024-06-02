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
  const [attempt, setAttempt] = useState( {row: 0, column: 0});


  return (
    <>
      <AppContext.Provider value={{ 
        grid, setGrid, 
        attempt, setAttempt,
        user, setUser,
      }}>
        <Nav />
        <Grid />
        <Keyboard />
      </AppContext.Provider>
    </>
  )
}

export default App;
