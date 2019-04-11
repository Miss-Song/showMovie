/* import React from 'react'
import { connect } from 'dva'
import {Button} from 'antd'
function aa(props) {
  console.log(props.movieDetail);
  function loadDetail() {
    props.dispatch({
      type: 'movieDetail/loadMovieDetail',
    })
  }
  return (
    <div>
      我是详情页
      <Button onClick={loadDetail()}>加载</Button>
    </div>
  )
}
function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(aa)

 */
//import styles from './index.css';

import React from 'react'
import { connect } from 'dva';
 function  qqq(props) {
   console.log(props);
  return (
   <div>home</div>

    /* <div className={styles.normal}><p>99999</p>
    <div><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>

    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    <div className={styles.normal}><p>99999</p></div>
    </div>
 */



  );
}
function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(qqq)
