import {post} from '../utils/request'

export function fetchMovieDetail(params) {
  return post('/api/v2/proxy',{
    url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=217896'
  })
}

export function fetchActorsList(params){
  return post('/api/v2/proxy',{
    url:'https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896'
  })
}
