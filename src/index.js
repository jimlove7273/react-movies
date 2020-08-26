import React from 'react'
import ReactDOM from 'react-dom'

import { MovieProvider } from './contexts/MovieContext'

import Search from './components/Search'

// --- Components
import Moviegrid from './components/Moviegrid'
import Movie from './components/Movie'

export const App = () => {
  return (
    <MovieProvider>
      <div className="container">
        <h2 className="py4">React Movies</h2>
        <Search />
        <Moviegrid />
        <Movie />
      </div>
    </MovieProvider>

)
}

ReactDOM.render(<App />, document.querySelector("#root"))