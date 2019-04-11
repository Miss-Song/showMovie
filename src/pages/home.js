//import styles from './index.css';

import React from 'react'
import { connect } from 'dva';
 function  qqq() {
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
