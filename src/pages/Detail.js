import React, { useEffect, useState } from 'react'
//import Link from 'umi/link'//跳转插件
import router from 'umi/router';
import { connect } from 'dva'
import { Card, Col, Row, Button, Icon, List, Typography } from 'antd'
import styles from './css/detail.css'
function Detail(props) {
  console.log(props);
  var { movieDetail } = props;
  const [hidden, show] = useState({
    display: 'none'
  });
  // const [movie, viewMovie] = useState();
  function tiao() {
    /* router.push({
      pathname: '/bb/aa',
      query: {
        a: 'b',
      },
    }) */
    /* router.push('/bb/aa?a=b') */
    /* 以上两种方式参数都会体现在地址栏中，下面的这一种不会体现 */

    router.push({
      pathname: '/bb/aa',
      params: {
        movieId: movieDetail.boxOffice.movieId,
      },
    })
  }

  // 使用useEffect方法 执行类似于class定义组件的生命周期函数,
  //  第一个参数为一个function
  //  第二个参数为数组 表示当什么数据发生改变的时候触发
  //    使用空数组表示初始化的时候执行一次
  //    相当于class定义组件的组件创建完成之后执行
  function changeMoreActor() {
    var yc = '';
    if (hidden.display === 'none') {
      yc = 'inline-block'
    } else {
      yc = 'none'
    }
    show({
      ...hidden,
      display: yc
    });
  }
  useEffect(() => {
    console.log('loading data from server...')
    function loadDetail() {
      props.dispatch({
        type: 'movieDetail/loadMovieDetail',
      })
    }
    loadDetail();
  }, [])
  if (movieDetail.basic && movieDetail.boxOffice) {
    console.log('huojiang')
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={32}>
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
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={32}>
            <Card title='剧情介绍' bordered={false}>
              <p>{movieDetail.basic.story}</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={32}>
            <Card title='演员' bordered={false}>

              <div>
                {movieDetail.basic.actors.map((item, index) => {
                  if (index < Math.min(movieDetail.basic.actors.length, 6)) {
                    return (<figure key={index} style={{ display: 'inline-block' }}>
                      <figcaption><img src={item.roleImg ? item.roleImg : movieDetail.basic.actors[0].roleImg} alt='图片找不到了' />
                      </figcaption><span>{item.name ? item.name : item.nameEn}饰{item.roleName}</span></figure>)
                  } else {
                    return (
                      <figure key={index} style={hidden}>
                        <figcaption><img src={item.roleImg ? item.roleImg : movieDetail.basic.actors[0].roleImg} alt='图片找不到了' />
                        </figcaption><span>{item.name ? item.name : item.nameEn}饰{item.roleName}</span></figure>
                    )
                  }
                })
                }
              </div>
              <Button onClick={() => changeMoreActor()}>查看更多/收起</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={32}>
            <Card title='预告片及剧照' bordered={false} >

              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/*  <Link to='/bb/aa' style={{ width: Math.floor(1 / (movieDetail.basic.stageImg.list.length + 1) * 100) + '%' }}> */}
                <div style={{ width: Math.floor(1 / (movieDetail.basic.stageImg.list.length + 1) * 100) + '%', position: 'relative' }}>

                  <video style={{ backgroundColor: '#000', width: '100%' /* ,height:'12rem' */ }}>
                    <source src={movieDetail.basic.video.hightUrl} type="video/mp4" />
                    您的浏览器不支持 video 标签。
                </video>{/* </Link> */}
                  <Icon type="play-circle" onClick={tiao} className={styles.bofang} />
                </div>
                {movieDetail.basic.stageImg.list.map((item, index) => {
                  var len = movieDetail.basic.stageImg.list.length;
                  var wid = Math.floor(1 / (len + 1) * 100) + '%';
                  return (
                    <div key={index} style={{ display: 'inline-block', width: wid }}>
                      <img src={item.imgUrl} alt={movieDetail.basic.name} style={{ width: '100%'/* ,height:'12rem' */ }} />
                    </div>
                  )
                })}
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={32}>
            <Card title='获奖情况' bordered={false} >
                { movieDetail.basic.award.awardList.length>0?
                   (<List
                    bordered={false}
                    dataSource={movieDetail.basic.award.awardList}
                    renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
                  />)
                : (<List
                  bordered={false}
                  dataSource={['暂未获奖']}
                  renderItem={item => (<List.Item><Typography.Text mark>[{movieDetail.basic.name}]</Typography.Text> {item}</List.Item>)}
                />)}
            </Card>
          </Col>
        </Row>
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
export default connect(mapStateToProps)(Detail)

