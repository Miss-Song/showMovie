import styles from './index.css';
import React, { useState, useEffect } from 'react'
import { getHotMovie, getRegion } from '../services/movies'
import { Card, message, Menu, Dropdown, Icon } from 'antd';
import router from 'umi/router';

const { Meta } = Card;


function Aeras(props) {
console.log(props)
  const [Region, setRegion] = useState({
    aera: '',
    locationId: 290
  })
  useEffect(() => {
   /*  if(props){
      setRegion({
        locationId:props.locationId
      })
    } */
    getRegion()
      .then(res => {
        setRegion({
          aera: res.data.p.slice(0, 50)
        })
      })

  }, [])
  function onClick(item){
    // console.log(item)
    props.abc(item)
    localStorage.setItem('locationId',item);

    message.info(`当前城市为 ${item.n}`);
  };
  function Menus() {
    return (<Menu>
      {Region.aera.map(items => {
        return (<Menu.Item onClick={()=>onClick(items)} key={items.id}>{items.n}</Menu.Item>)
      })}
    </Menu>)
  }

  return (
    <div className={styles.aera}>
      <Dropdown overlay={Menus}>
        <a className="ant-dropdown-link" href="#">
         选择城市 <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  )
}


function HotMovie(props) {
  console.log(props)

  var [HotMovies, setHotMovies] = useState({
    a: [],
    b: {},
    lId: 290
  })
 /*  if(localStorage.getItem('HotMovies-a')){
    setHotMovies({
      ...HotMovies,
      a:JSON.parse(localStorage.getItem('HotMovies-a'))
    })
  } */
  useEffect(() => {
    //console.log(11111111111, HotMovies.movieId)
    if(localStorage.getItem('locationId')){
      setHotMovies({...HotMovies,
        lId:localStorage.getItem('locationId')
      })
    }
    console.log(HotMovies.lId)
    getHotMovie({
      locationId: HotMovies.lId,
    })
      .then(res => {
        console.log(res.data.movies)
        localStorage.setItem('locationId',HotMovies.lId)
     //   localStorage.setItem('HotMovies-a',JSON.stringify(res.data.movies));
        setHotMovies({...HotMovies,
          a: res.data.movies,
        })
      })
  }, [])



  const tiao= (movieId,movieName) =>{
    //localStorage.setItem('locationId',locationId);
    localStorage.setItem('movieId',movieId);
    localStorage.setItem('movieName',movieName);
    console.log(movieId,HotMovies.lId,movieName)
    router.push({
      pathname: '/Detail',
      params: {
        movieId,
        locationId: HotMovies.lId,//到时候通过props.location.params.locationId获取
        movieName
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
          lId: props
        })
      })
  }
  return (
    <div>
      <Aeras abc={qqq}/*  locationId={HotMovies.locationId} *//>
      <div className={styles.HotMoviesList}>
        <ul className={styles.list} >
          {HotMovies.a.map((item,index) => {

            return (<li key={index}>

              <Card
                hoverable
                style={{ width: 240, height: 460 }}
                cover={<img alt={item.actorName1} src={item.img} onClick={() => tiao(item.movieId,item.titleCn)} />}
              >
                <b><p>主演：{item.actorName1}&nbsp;&nbsp;&nbsp;{item.actorName2}</p></b>
                <Meta
                  title=""
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

