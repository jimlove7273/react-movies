import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext'

//import rounded-right from '../assets/css/rounded-right.svg'

const Moviegrid = (props) => {

	const movieContext = useContext(MovieContext)
	const [movies, setMovies] = useState([])
	const [pages, setPages] = useState(1)

	// console.log("Movie Context: ", movieContext)
	// console.log("props", props)
	// console.log("URL: ", movieContext.moviedburl)

	useEffect( () => {
		Axios.get(movieContext.moviedburl)
		.then( data => {
			console.log("data", data)
			console.log("data.data", data.data)
			console.log("results", data.data.results)
			console.log("Total Page: ", data.data.total_pages)
			console.log("Search:", movieContext.searchmovie)
			console.log("moviedburl", movieContext.moviedburl)
			setPages(data.data.total_pages)
			setMovies(data.data.results)
		})		
	}, [movieContext.curpage, movieContext.search])


	return (
		<div>
		<div className="grid grid-5column grid-lg-gap">
			{
				movies.map( movie =>
					<div key={movie.id} className="card">
						<div className="cardimage"><img src={`${process.env.REACT_APP_MOVIE_IMG_PREFIX}${movie.poster_path}`} /></div>
						<div className="cardcontent center">{ movie.title }</div>
					</div>
				)
			}
		</div>
		
		<div className="flex flex-between py4">
			<div>Page {movieContext.curpage} of {pages}</div>
			<div className="flex">
				<div>{ movieContext.curpage>1
					? <div onClick={()=>movieContext.setCurpage(movieContext.curpage-1)}><img src={require("../assets/css/rounded-left.svg")} width={20} /></div>
					: '' }
				</div>
				<div>{ movieContext.curpage<pages
					? <div onClick={()=>movieContext.setCurpage(movieContext.curpage+1)}><img src={require("../assets/css/rounded-right.svg")} width={20} /></div>
					: '' }
				</div>
			</div>
		</div>

		</div>
	)
}

export default Moviegrid
