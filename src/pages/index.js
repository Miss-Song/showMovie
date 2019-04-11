import styles from './index.css';
import React, { useState, useEffect } from 'react'
import { getHotMovie } from '../services/movies'
import { Card ,Button} from 'antd';
import { ButtonToolbar} from 'react-bootstrap';
const { Meta } = Card;

function HotMovies() {
  const [HotMovies, setHotMovies] = useState({
    a: [],
    b: {}
  })

  useEffect(() => {
    getHotMovie({
      locationId: 290
    })
      .then(res => {
        console.log(res.data.movies)
        setHotMovies({
          a: res.data.movies
        })
      })

  }, [])
  // function a(){
  //   var a = document.getElementsByClassName('list');
  //   setInterval({
  //     a.style.left =
  //   },2000)
  // }
  return (
    <div>
< ButtonToolbar >
  < Button  variant = "primary "  > Primary </ Button >
  < Button  variant = " secondary " > Secondary </ Button >
  < Button  variant = " success " > Success </ Button >
  < Button  variant = "warning " >警告 </ Button>
  <Button  variant = " danger " > Danger </ Button >
  < Button  variant =" info " > Info </ Button >
  < Button  variant = " light  "> Light </ Button >
  < Button  variant = "dark " > Dark </ Button >

</ ButtonToolbar > ;
      <Button>按钮</Button><Button>按钮</Button>
      <div className={styles.HotMoviesList}>
        <ul className={styles.list} >
          {HotMovies.a.map(item => {
            return (<li key={item.actorName1}>
              <Card
                hoverable
                style={{ width: 240 ,height:500}}
                cover={<img alt={item.actorName1} src={item.img} />}
              >
                <Meta
                  title={item.actorName1}
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
export default HotMovies
