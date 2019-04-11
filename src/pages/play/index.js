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
	const video = {
		width:'80%',
		height:'600px',
		marginLeft: '10%',
	}
	const bg000 = {
		background:'#000',
		marginTop:'-40px'
	}

	useEffect(()=>{
		getMovieDetails({
			locationId:290,
			movieId:125806
		}).then(res=>{
			setMovies({
				video:res.data.data.basic.video.url
			})
    })

	},[])


	return (
		<div style={bg000}>
			<video style={video} controls src={movies.video}></video>
		</div>
	)
}

export default index
