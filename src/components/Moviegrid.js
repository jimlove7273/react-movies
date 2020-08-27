import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext'

//import rounded-right from '../assets/css/rounded-right.svg'

const Moviegrid = (props) => {

	const movieContext = useContext(MovieContext)
	const [pages, setPages] = useState(1)

	useEffect( () => {

		Axios.get(movieContext.moviedburl)
		.then( data => {
			setPages(data.data.total_pages)
			movieContext.setMovies(data.data.results)
		})		
	}, [movieContext.curpage, movieContext.searchmovie])

	const moviedetial = (movieid) => {
		movieContext.setMovieid(movieid)
	}


	return (
		<div>
		<div className="grid grid-5column grid-lg-gap">
			{
				movieContext.movies.map( movie =>
					<div key={movie.id} onClick={()=>moviedetial(movie.id)}>
						<div className="card">
							<div className="cardimage">
								{ movie.poster_path !== null
									? <img src={`${process.env.REACT_APP_MOVIE_IMG_PREFIX}${movie.poster_path}`} />
									: <img src="https://via.placeholder.com/440x660" />
								}
							</div>
							<div className="cardcontent center">{ movie.title }</div>
						</div>
					</div>
				)
			}
		</div>
		
		<div className="flex flex-between py4">
			<div>Page {movieContext.curpage} of {pages}</div>
			<div className="flex">
				<div>{ movieContext.curpage>1
					? <div className="cursor-pointer" onClick={()=>movieContext.setCurpage(movieContext.curpage-1)}><img src={require("../assets/css/rounded-left.svg")} width={20} /></div>
					: '' }
				</div>
				<div>{ movieContext.curpage<pages
					? <div className="cursor-pointer" onClick={()=>movieContext.setCurpage(movieContext.curpage+1)}><img src={require("../assets/css/rounded-right.svg")} width={20} /></div>
					: '' }
				</div>
			</div>
		</div>

		</div>
	)
}

export default Moviegrid
