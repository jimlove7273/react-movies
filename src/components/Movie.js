import React, { useEffect, useContext, useState } from 'react'
import Axios from 'axios'
import { MovieContext } from '../contexts/MovieContext'

const Movie = () => {

	const movieContext = useContext(MovieContext)
	const [details, setDetails] = useState({
		poster_path: '',
		title: '',
		tagline: '',
		release_date: '',
		overview: '',
		runtime: 0,
		status: '',
		genres: {},
		popularity: ''
	})
	//console.log("Movie ID: ",  movieContext.movieid)

	useEffect( () => {

		Axios.get(`https://api.themoviedb.org/3/movie/${movieContext.movieid}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`)
		.then( data => { 

			setDetails({
				title: data.data.title,
				release_date: data.data.release_date,
				overview: data.data.overview,
				tagline: data.data.tagline,
				runtime: data.data.runtime,
				status: data.data.status,
				genres: data.data.genres,
				popularity: data.data.popularity,
				poster_path: data.data.poster_path
			})
			
		 } )
		//.then( data => setDetails(data) )
	}, [])

	const goback = () => {
		movieContext.setMovieid(null)
	}

	return (
		<div>
		{


			<div className="container">
				<div className="grid grid-1-2 grid-lg-gap">
					<div>
						{ details.poster_path !== null
							? <img src={`${process.env.REACT_APP_MOVIE_IMG_PREFIX}${details.poster_path}`} />
							: <img src="https://via.placeholder.com/440x660" />
						}
					</div>
					<div>
						<div className="list block pb5">
							{Object.values(details.genres).map(
								genre => <div key={genre.name} className="tag tag-primary"><a>{genre.name}</a></div>
							)}
						</div>
						<div className="list"><h1>{details.title}</h1></div>
						<div className="list pb4 font-size15"><b>Tagline: </b>{details.tagline}</div>
						<div className="list font-size15"><b>Release Date: </b>{details.release_date}</div>
						<div className="list font-size15"><b>Run Time: </b>{details.runtime}</div>
						<div className="list font-size15"><b>Popularity: </b>{details.popularity}</div>
						<div className="list font-size15"><b>Status: </b>{details.status}</div>
						<div className="py4 font-size15">{details.overview}</div>


						<div className="btn btn-primary mt5 cursor-pointer" onClick={goback}>Go Back</div>
					</div>
				</div>
			</div>


		}
		</div>
	)
}

export default Movie
