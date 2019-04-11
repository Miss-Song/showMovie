import { fetchCelebrities } from '../services/Detail'
export default {
  namespace: 'Celebrities',
  state: {

  },
  //同步操作
  reducers: {
    'save'(state,  payload ) {
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
    *loadCelebrities(action,{call,put}){
      console.log(action);
      const result=yield call(fetchCelebrities,action.movieId);
      console.log(result.data.types);
      yield put({
        type:'save',
        payload:result.data.types
      });
    }
  }
}
