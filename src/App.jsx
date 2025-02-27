import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieList } from './components/movieList'
import { MovieInputs } from './components/movieInputs'

function App() {
  return (
    <>
      <MovieList />
      <MovieInputs />
    </>
  )
}

export default App
