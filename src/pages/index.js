import styles from './index.css';
import React, { useState, useEffect } from 'react'
import { getHotMovie } from '../services/movies'
import { Card ,Button,Menu, Dropdown, Icon} from 'antd';

const { Meta } = Card;

function HotMovies() {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
      </Menu.Item>
    </Menu>
  );

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

  return (
    <div>
      <div>
      <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>,
      </div>
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
