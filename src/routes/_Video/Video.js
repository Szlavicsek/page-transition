import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom"
import AOS from 'aos'

import styles from "./Video.module.scss"
import * as help from "../../JsModules/helper";

import sampleVideo from '../../assets/media/sample.mp4'

import leadImage from "../../assets/images/pexels-photo-39811.jpeg"
import logo1 from "../../assets/images/cisco.PNG"

class Video extends Component {

	componentDidMount() {
		setTimeout(() => {
			if (this.props.currentSlideId === 1) {
				help.pageTransition({height: 90, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundColor: "transparent", needsTransition: this.props.leadNeedsTransition});
			} else {
				help.changeLeadText(["Video lead test page"], "Take a look at some of our recent projects", "white", "left-center");
				setTimeout(() => { help.animateLeadTextUp() }, 800); //=> help.changeleadtext
				help.pageTransition({height: 90, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundVideo: sampleVideo, needsTransition: this.props.leadNeedsTransition});
			}

			setTimeout(() => { AOS.refresh() }, 1500); //=> help.pagetransition
		}, 20)
	}

	render() {
		return (
			<div className={styles.wrapper}>

			</div>
		);
	}
}

export default withRouter(Video);