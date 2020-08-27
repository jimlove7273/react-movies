import React, { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

import Moviegrid from './Moviegrid'
import Movie from './Movie'

const Griddetail = () => {
	const movieContext = useContext(MovieContext)
	return (
		<div>
			{ movieContext.movieid === null
				? <Moviegrid />
				: <Movie />
			}
		</div>
	)
}

export default Griddetail
