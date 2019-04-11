/* import {post} from './utils/request'
post('/api/v2/proxy',{
  url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805'
})
.then(res=>{
  console.log(res)
}) */

export const dva = {

  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
