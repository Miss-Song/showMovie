import React from 'react'
import { connect } from 'dva';
 function  qqq(props) {
   console.log(props);
   console.log(111111,props.location.params)
  return (
   <div>home</div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(qqq)
