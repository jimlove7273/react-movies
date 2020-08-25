import React from 'react'
import ReactDOM from 'react-dom'

import { MovieProvider } from './contexts/MovieContext'

import Search from './components/Search'

// --- Components
import Moviegrid from './components/Moviegrid'

export const App = () => {
  return (
    <MovieProvider>
      <div className="container">
        <h1 className="py4">Total Movies</h1>
        <Search />
        <Moviegrid />
      </div>
    </MovieProvider>

)
}

ReactDOM.render(<App />, document.querySelector("#root"))