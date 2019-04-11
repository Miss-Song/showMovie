import { get,post } from 'axios'
// import qs from 'qs'

// 当发送get请求的时候 axios需要把参数放在params属性中,
// params属性的值会拼接在url地址后面

/**
 * 获取影片详情请求(个人定义)
 * @param {*} params 请求参数
 */
export function getMovieDetails(params) {
  return post('https://api.cat-shop.penkuoer.com/api/v2/proxy', {
    url:`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=${params.locationId}&movieId=${params.movieId}`
  })
  .then(res=>{
    // console.log(res);
    return res
  })
  .catch(err=>{
    console.log(err)
  })
}

/**
 * 获取影片评论(个人定义)
 * @param {*} params 请求参数
 */
export function getMovieReviews(params){
  return post('https://api.cat-shop.penkuoer.com/api/v2/proxy', {
    url: `https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=${params.movieId}`
  })
  .then(res=>{
    // console.log(res.data.data.mini.list)
    return res.data.data.mini.list
  })
  .catch(err=>{
    console.log(err)
  })
}

/**
 * 获取正在热映
 * @param {*} params 请求参数
 */
export function getHotMovie(params){
  return post('https://api.cat-shop.penkuoer.com/api/v2/proxy', {
    url: `https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=${params.locationId}`
  })
  .then(res=>{
    // console.log(res)
    return res
  })
  .catch(err=>{
    console.log(err)
  })
}
