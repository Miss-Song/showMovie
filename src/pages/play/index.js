import styles from './style.css'
import React, { useState, useEffect } from 'react'
import { Button, Icon } from 'antd'
import { getMovieDetails, getMovieReviews } from '../../services/movies'


function Review(props) {
	const [wordNum, setWordNum] = useState({
		num: 0
	})

	const [content, setcontent] = useState({
		reviewData: ''
	})
	const [publish, setPublish] = useState(false)
	/**
	 * 评论框内容长度
	 * @param {*} e 事件对象
	 */
	var changeHandle = (e) => {
		setPublish(false)
		setWordNum({
			num: e.target.value.length
		})
	}

	/**
	 * 提交评论
	 * @param {*} e 事件对象
	 */
	var commitReviewHandle = (e) => {
		let val = document.getElementsByTagName('textarea')[0].value;
		if (val !== '') {
			setcontent({
				reviewData: val
			})
			document.getElementsByTagName('textarea')[0].value = '';
			setWordNum({
				num: 0
			})
			setPublish(true)
		}
	}

	return (
		<div>
			<p className={styles.tips}>在此处评论
				<span className={styles.wordNum}>{/* TODO: */}
					<span>{wordNum.num}</span>
					<span>/300</span>
				</span>
			</p>

			<textarea onChange={changeHandle} maxLength="300" className={styles.txt_review} cols="160" rows="5" placeholder="快来说说想法吧~~~">
			</textarea>

			<div>
				<Button onClick={commitReviewHandle} type="primary">发表评论<Icon type='right' /> </Button>
			</div>

			<p className={styles.p_style + " " + styles.word_allReviews}>全部评论</p>

			<div className={styles.allReviewsBox}>
				<Other selfReview={publish ? content.reviewData : ''} movieId = { props.movieId} />
			</div>
		</div>
	)
}

class Other extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			praiseCount: 0,
		}
	}

	componentDidMount() {
		console.log('props=',this.props)
		getMovieReviews({
			movieId: this.props.movieId,

		})
			.then(res => {
				this.setState({
					list: res,
					praiseCount: 0
				})
				console.log(res)
			})
	}

	componentWillReceiveProps(next) {
		let val = next.selfReview
		let obj = {
			commentDate: Date.now(),
			content: val,
			headImg: 'https://ws3.sinaimg.cn/large/005BYqpgly1g1ys33mp09j30tg0q7tse.jpg',
			nickname: '金木研',
			praiseCount: 0,
			isPraise: false,
			replyCount: 0,
		}

		if (val !== '') {
			let arr = this.state.list;
			arr.push(obj);
			this.setState({
				list: arr
			})
		}
	}

	praiseHandle(index) {
		let arr = this.state.list;
		if(arr[index].isPraise){
			arr[index].praiseCount--;
		}else{
			arr[index].praiseCount++;
		}
		arr[index].isPraise = !arr[index].isPraise;
		this.setState({
			list: arr
		})
	}

	render() {
		return (
			<div className={styles.allReviews}>
				{this.state.list.length > 0 ? this.state.list.map((item, index) => {
					return (
						<div key={index} className={styles.item_container}>
							<div>
								<figure className={styles.headImg}>
									<img src={item.headImg} />
								</figure>

								<div className={styles.user_item}>
									<div className={styles.nicknameBox}>
										<span className={styles.nickname}>{item.nickname}</span>
										<span className={styles.reviewData}>{(new Date(item.commentDate)).toLocaleString() }</span> {/* TODO: */}
									</div>

									<p className={styles.p_style}>{item.content}</p>

									<div className={styles.praiseBox}>
										<span className={styles.praise}>
											<Icon type="like" onClick={()=>{this.praiseHandle(index)}} className={styles.praiseIcon + ' ' + (this.state.list[index].isPraise && styles.clicked)} />
											<span>{item.praiseCount || 0}</span>
										</span>

										<span className={styles.praise}>
											<span className={styles.reply}>{'评论（'+ this.state.praiseCount+'）'}</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					)
				}) : <span className={styles.noReviews}>暂无评论</span>
				}
			</div>
		)
	}
}

function index(props) {
	const [movies, setMovies] = useState({
		video: '',
		data: {},
	})

	useEffect(() => {
		getMovieDetails({
			locationId: props.location.params.locationId,
			movieId: props.location.params.movieId,
		})
		.then(res => {
			setMovies({
				video: res.data.data.basic.video.url
			})
		})
	}, [])


	return (
		<div>
			<div className={styles.bg000}>
				<video className={styles.video} controls preload="none" src={movies.video}></video>
			</div>
			<div className={styles.container}>
				<Review  movieId = {props.location.params.movieId}/>
			</div>
		</div>
	)
}

export default index
