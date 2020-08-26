import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {

	const [curpage, setCurpage] = useState(1)
	const [movies, setMovies] = useState([])
	const [searchmovie, setSearchmovie] = useState('')

	let moviedburl
	
	if ( searchmovie === '' ) {
		moviedburl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=${curpage}`
	} else {
		moviedburl = `https://api.themoviedb.org/3/search/movie?query=${searchmovie}&api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=${curpage}`
	}

	const returnlist = {
		moviedburl, curpage, setCurpage, searchmovie, setSearchmovie,
		movies, setMovies
	}

	return (
		<MovieContext.Provider value={returnlist}>
			{ props.children }
		</MovieContext.Provider>
	)
}