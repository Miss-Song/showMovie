import React, { useState, useEffect } from 'react'
import styles from './style.css'
import { getStills } from '../../services/movies'

class index extends React.Component {
	constructor() {
		super()
		this.state = {
			pics: [],//所有的剧照图片[]
			types: [],//剧照类型
			curPics: [],//当前展示的剧照
		}
	}

	componentDidMount() {
		getStills({
			movieId: 125805
			//props.movieId
		})
			.then(res => {
				this.setState({
					pics: res.data.images
				})
				this.setState({
					types: res.data.imageTypes
				})
			})
	}

	/* function loadPic(i) {
		this.setState({
			curPics: 
		})
	} */

	render() {
		return (
			<div>
				<nav className={styles.nav}>
					{	this.state.types.map((item,index)=>{
						return (
							<div /* onClick= {} */ className={styles.nav_item}>{item.typeName}</div>
						)
						})}
				</nav>
			</div >
		)
	}
}

export default index


