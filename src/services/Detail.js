import {post} from '../utils/request'

/* export function fetchMovieDetail(params) {
  return post('/api/v2/proxy',{
    url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=217896'
  })
} */
export function fetchMovieDetail(LID,MID) {
  console.log(LID,MID);
  return post('/api/v2/proxy',{
    url:`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=${LID}&movieId=${MID}`
  })
}

export function fetchCelebrities(MID){
  return post('/api/v2/proxy',{
    url:`https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=${MID}`
  })
}
