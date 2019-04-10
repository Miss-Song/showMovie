import { get } from 'axios'

  // 当发送get请求的时候 axios需要把参数放在params属性中,
  // params属性的值会拼接在url地址后面

/**
 * 获取影片详情请求(个人定义)
 * @param {*} params 请求参数
 */

export function getMovieDetails(params) {  
  return get('https://ticket-api-m.mtime.cn/movie/detail.api', {              
    params
  })
}

/**
 * 获取影片评论(个人定义)
 * @param {*} params 请求参数
 */
export function getMovieReviews(params){
  return get('https://ticket-api-m.mtime.cn/movie/hotComment.api', {              
    params
  })
}