import styles from './index.css';

function BasicLayout(props) {
  return (
    <div>
    <div className={styles.dbnavmovie}>
      <div className={styles.navwrap}>
        <div className={styles.navprimary}>
          <div className={styles.navlogo}>
            <a href=""></a>
          </div>
          <div className={styles.navsearch}>

            <form action="https://movie.douban.com/subject_search" method="get">
              <fieldset>
                <legend>搜索：</legend>
                <label>
                </label>
                <div className={styles.inp}><input name="search_text" size="22"  placeholder="搜索电影、电视剧、综艺、影人" /></div>
                <div className={styles.inpbtn}><input type="submit" value="搜索" /></div>
                <input type="hidden" name="cat" value="1002" />
              </fieldset>

            </form>
          </div>
        </div>
      </div>
      <div className={styles.navsecondary}>


        <div className={styles.navitems}>
          <ul>
            <li><a href="">影讯&amp;购票</a>
            </li>
            <li><a href="">选电影</a>
            </li>
            <li><a href="">电视剧</a>
            </li>
            <li><a href="">排行榜</a>
            </li>
            <li><a href="">分类</a>
            </li>
            <li><a href="">影评</a>
            </li>
            <li><a href="">2018年度榜单</a>
            </li>
            <li><a href="">2018书影音报告</a>
            </li>
          </ul>
        </div>

        <a href="" className={styles.movieannual2018}></a>
      </div>

    </div>
    {props.children}
    </div>
  );
}
export default  BasicLayout;
