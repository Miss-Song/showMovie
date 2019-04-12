import React, { useEffect, useState } from 'react'
//import Link from 'umi/link'//跳转插件
import router from 'umi/router';
import { connect } from 'dva'
import { Card, Col, Row, Button, Icon, List,Avatar , Typography } from 'antd'
import styles from './css/detail.css'
function Celebrities(props) {
  console.log(props);
  var { Celebrities,movieDetail } = props;
  var mid = 217896;
  var lid=290;
  if (props.location.params) {
    mid = props.location.params.movieId;
    lid=props.location.params.locationId;
  }
  function tiao() {
    router.push({
      pathname: '/play',
      params: {
        movieId: movieDetail.boxOffice.movieId,
        locationId:props.location.params.locationId// 到时候通过props.location.params.locationId获取
      },
    })
  }
  useEffect(() => {
    console.log('loading celebrities  from server...')
    function actorFetch() {
      props.dispatch({
        type: 'Celebrities/loadCelebrities',
        movieId: mid,//通过props.location.params.movieId获取
      })
    }
    function loadDetail() {
      props.dispatch({
        type: 'movieDetail/loadMovieDetail',
        movieId:mid,//到时候通过props.location.params.movieId获取
        locationId:lid////到时候通过props.location.params.locationId获取
      })
    }
    loadDetail();
    actorFetch();
  }, [])
  function tiaoDetail(){
    router.push({
      pathname:'/Detail',
      params:{
        movieId:mid,
        locationId:lid
      }
    })
  }
  if (Celebrities.payload&&movieDetail.basic) {
    console.log(Celebrities.payload)
    const moviename = props.location.params ? (props.location.params.movieName + ' 的全部演职员') : '功夫瑜伽 的全部演职员';

    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title={moviename} bordered={false}></Card>
        <Row gutter={16}>
          <Col span={15}>
            {Celebrities.payload.map((item, index) => {
               const tn = item.typeName;
              return (
                <Row key={index}/* gutter={16} */>
                  <Col >
                    <Card title={item.typeName ? item.typeNameEn ? item.typeName + item.typeNameEn : item.typeName : item.typeNameEn} bordered={false}>
                      <List
                        itemLayout="horizontal"
                        grid={{ gutter: 8, column: 2 }}
                        dataSource={item.persons}
                        renderItem={item => (
                          <List.Item className={styles.tupian}>
                            <List.Item.Meta className={styles.metap}
                              avatar={<Avatar  src={item.image} className={styles.bigPic}/>}
                              title={item.name+item.nameEn}
                              description={item.personate?tn+'(饰'+item.personate+')':tn}
                            />
                          </List.Item>
                        )}
                      />
                    </Card>
                  </Col>
                </Row>
              )
            })}
          </Col>
          <Col span={9}>
          <Button type="primary" onClick={tiaoDetail} style={{backgroundColor:'rgb(124, 142, 189)'}} icon="double-right">去{movieDetail.basic.name}的页面</Button>
          <Card title={movieDetail.basic.name} bordered={false}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <div style={{ display: "inline-block", width: '45%' }}><img alt="图片找不到了" src={movieDetail.basic ? movieDetail.basic.img : ' '} style={{ width: '100%' }} /></div>
                  <div className={styles.movieInstru}>
                    <p>导演：{movieDetail.basic.director.nameEn ? movieDetail.basic.director.nameEn : movieDetail.basic.director.name}</p>
                    <p>主演：{movieDetail.basic.actors.map((item, index) => {
                      if (index === movieDetail.basic.actors.length - 1) { return <span key={index}>{item.name ? item.name : item.nameEn}</span> }
                      else { return <span key={index}>{item.name ? item.name : item.nameEn}/</span> }
                    })}</p>
                    <p>类型：{movieDetail.basic.type}</p>
                    <p>上映地区：{movieDetail.basic.releaseArea}</p>
                    <p>片长:{movieDetail.basic.mins}</p>
                  </div>
                </div>
              </div>
              <Button icon="play-circle" type="primary" onClick={tiao} style={{backgroundColor:'rgb(124, 142, 189)'}}>预告片</Button>
            </Card>
          </Col>
        </Row>
        {/*    <List
          grid={{ gutter: 16, column: 4 }}
          bordered={false}
          dataSource={Celebrities.payload}
          renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item.typeName}</List.Item>)}
        /> */}
        {/*  <List
          grid={{ gutter: 16, column: 4 }}
          bordered={false}
          dataSource={Celebrities.payload}
          renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item.typeName}</List.Item>)}
        /> */}
      </div>
    )
  } else {
    return (<div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={32}>
          <Card title='稍等哟' loading bordered={false}></Card>
        </Col></Row>
    </div>)
  }

}
function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(Celebrities)

