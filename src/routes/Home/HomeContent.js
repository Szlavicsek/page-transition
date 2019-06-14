import React, {Component} from 'react';
import styles from './HomeContent.module.scss'
import sample from "../../assets/sample.mp4"
import image from "../../assets/96ADC2750551C6E70B719990D9D2C09236856C21.jpg"

class HomeContent extends Component {
	render() {
		return (
			<div id="lead__layer--home" >
				<div className={styles.container}>
					{/*<video src={sample} className={this.props.className} loop autoPlay></video>*/}
					<img className={this.props.className} src={image} alt=""/>
				</div>
			</div>
		);
	}
}

export default HomeContent;