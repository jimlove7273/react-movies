import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import { MovieProvider } from './contexts/MovieContext'

import Search from './components/Search'

// --- Components
import Griddetail from './components/Griddetail'
import Moviegrid from './components/Moviegrid'
import Movie from './components/Movie'

export const App = (props) => {


  return (
    <MovieProvider>
      <div className="container">
        <h2 className="py2">React Movies</h2>
        <Search />
        <Griddetail />
      </div>
    </MovieProvider>

)
}

ReactDOM.render(<App />, document.querySelector("#root"))