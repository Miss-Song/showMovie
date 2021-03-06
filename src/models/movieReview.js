import { fetchMovieReview } from '../services/Detail'
export default {
  namespace: 'movieReview',
  state: {

  },
  //同步操作
  reducers: {
    'save'(state, payload) {
      return { ...state, ...payload }
    }
  },
  //异步操作
  /***
   * dva 提供多个 effect 函数内部的处理函数，比较常用的是 call 和 put。
call：执行异步函数
put：发出一个 Action，类似于 dispatch
   *  */
  effects:{
    *loadmovieReview(action,{call,put}){
      console.log(action);
      const result=yield call(fetchMovieReview,action.movieId);
      /*  const result=yield call(fetchMovieDetail,[290,217896]); */
      console.log(result);
      yield put({
        type:'save',
        payload:result.data.data.mini.list
      });
    }
  }
}
