import styles from './index.css';
import React, { useState, useEffect } from 'react'
import { getHotMovie, getRegion } from '../services/movies'
import { Card, message, Menu, Dropdown, Icon } from 'antd';
import router from 'umi/router';

const { Meta } = Card;


function Aeras(props) {

  const [Region, setRegion] = useState({
    aera: '',
    locationId: 290
  })
  useEffect(() => {
    getRegion()
      .then(res => {
        setRegion({
          aera: res.data.p.slice(200, 300)
        })
      })

  }, [])
  const onClick = ({ key }) => {
    props.abc(key)
    message.info(`当前城市为 ${key}`);
  };
  function Menus() {
    return (<Menu onClick={onClick}>
      {Region.aera.map(items => {
        return (<Menu.Item key={items.id}>{items.n}</Menu.Item>)
      })}
    </Menu>)
  }

  return (
    <div>
      <Dropdown overlay={Menus}>
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  )
}


function HotMovie(props) {
  console.log(props)

  const [HotMovies, setHotMovies] = useState({
    a: [],
    b: {},
    locationId: 290
  })


  useEffect(() => {
    //console.log(11111111111, HotMovies.movieId)
    getHotMovie({
      locationId: HotMovies.locationId,
    })
      .then(res => {
        console.log(res.data.movies)
        setHotMovies({
          a: res.data.movies,
        })
      })
  }, [])



  function tiao(id, locationId) {
    router.push({
      pathname: '/Detail',
      params: {
        movieId: id,
        locationId: HotMovies.locationId//到时候通过props.location.params.locationId获取
      },
    })
  }

  function qqq(props) {
    console.log(props)
    getHotMovie({
      locationId: props,
    })
      .then(res => {
        console.log(res.data.movies)
        setHotMovies({
          a: res.data.movies,
          locationId: props
        })
      })
  }
  return (
    <div>
      <Aeras abc={qqq} />
      <div className={styles.HotMoviesList}>
        <ul className={styles.list} >
          {HotMovies.a.map((item,index) => {
            return (<li key={index}>

              <Card
                hoverable
                style={{ width: 240, height: 500 }}
                cover={<img alt={item.actorName1} src={item.img} onClick={() => tiao(item.movieId)} />}
              >
                <Meta

                  title={item.movieId}
                  description={item.commonSpecial}
                />
              </Card>

            </li>)
          })}
        </ul>
      </div>
    </div>
  );
}
export default HotMovie

