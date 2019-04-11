import styles from './style.css'
import React, { useState, useEffect } from 'react'
import { Button, Icon } from 'antd'
import { getMovieDetails, getMovieReviews } from '../../services/movies'

function Review() {
	const [wordNum, setWordNum] = useState({
		num: 0
	})

	const [content, setcontent] = useState({
		reviewData: ''
	})

	/**
	 * 评论框内容长度
	 * @param {*} e 事件对象
	 */
	var changeHandle = (e) => {
		setWordNum({
			num: e.target.value.length
		})
	}
	
	/**
	 * 提交评论
	 * @param {*} e 事件对象
	 */
	var commitReviewHandle = (e)=>{
		setcontent({
			reviewData: document.getElementsByTagName('textarea')[0].value
		})
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
				<Other selfReview = {content.reviewData}/>
			</div>
		</div>
	)
}

function Other(props) {
	const [reviews, setReviews] = useState({
		list: [],
		praiseCount: 0,
	})

	useEffect(() => {
		getMovieReviews({
			movieId: 125805
		})
		.then(res => {
			setReviews({
				list: res,
				praiseCount: 0
			})
			console.log(res)
		})
		
	}, [])

	// componentWillReceiveProps(nextProps){
	// 	let obj = {
	// 		commentDate: Date.now(),
	// 		content: nextProps.selfReview,
	// 		headImg: '',
	// 		nickname: '我自己',
	// 		praiseCount: 0,
	// 	}

	// 	let arr = reviews.list;
	// 	arr.push(obj);
	// 	setReviews({list: arr})
	// }

	return (
		<div className={styles.allReviews}>
			{reviews.list.length > 0 ? reviews.list.map((item, index) => {
				return (
					<div key={index} className={styles.item_container}>
						<div>
							<figure className={styles.headImg}>
								<img src={item.headImg} />
							</figure>

							<div className={styles.user_item}>
								<div className={styles.nicknameBox}>
									<span className={styles.nickname}>{item.nickname}</span>
									<span className={styles.reviewData}>{item.commentDate}</span> {/* TODO: */}
								</div>

								<p className={styles.p_style}>{item.content}</p>

								<div className={styles.praiseBox}>
									<span className={styles.praise}>
										<Icon type="up" className={styles.praiseIcon}/>
										<span>{item.praiseCount || 0}</span>
									</span>

									<span className={styles.praise}>
										<Icon type="down" className={styles.praiseIcon}/>
										<span>{reviews.praiseCount || 0}</span>
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

function index() {
	const [movies, setMovies] = useState({
		video: '',
		data: {}
	})

	useEffect(() => {
		getMovieDetails({
			locationId: 290,
			movieId: 125805
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
				<video className={styles.video} controls src={movies.video}></video>
			</div>
			<div className={styles.container}>
				<Review />
			</div>
		</div>
	)
}


export default index
