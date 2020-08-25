import React, { useState, useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

const Search = (props) => {

	const [searchtext, setSearchtext] = useState('')
	const movieContext = useContext(MovieContext)

	const handlesubmit = () => {
		debugger
		console.log("props", props)
		console.log("Handle Submit: ", searchtext)
		movieContext.setSearchmovie(searchtext)
		console.log("Search", movieContext.searchmovie)
	}

	return (
		// <form className="flex py4" onSubmit={handlesubmit()}>
		<form className="flex py4" onSubmit={handlesubmit}>
			<input className="mb0 mr1"
				type="text" name="search" placeholder="Search a Movie...."
				value={searchtext} onChange={(e)=>setSearchtext(e.target.value)}
			/>
			<button className="btn btn-primary btn-small" type="submit">Find&nbsp;Movie</button>
		</form>
	)
}

export default Search
