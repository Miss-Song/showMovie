import React ,{ useState , useEffect } from 'react'
import { getMovieDetails , getMovieReviews} from '../../services/movies'


function index() {
	const [movies, setMovies] = useState({
		video: '',
		data: {}
	})
	const [reviews,setReviews] = useState({
		list: [],
	})

	useEffect(()=>{
		const result_Details = getMovieDetails({
			locationId:290,
			movieId:125805
		})
		// console.log(result_Details)
	},[])


	return (
		<div>
			<video src=""></video>
		</div>
	)
}

export default index
