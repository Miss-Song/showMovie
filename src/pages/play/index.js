import React ,{ useState , useEffect } from 'react'
import { getMovieDetails , getMovieReviews} from '../../services/movies'
// import Link from 'umi/link'


function index() {
	const [movies, setMovies] = useState({
		video: '',
		data: {}
	})
	const [reviews,setReviews] = useState({
		list: [],
	})

	useEffect(()=>{
		// const moviesDetails = await getMovieDetails({
			
		// })
	},[])


	return (
		<div>
			<video src=""></video>
		</div>
	)
}

export default index
