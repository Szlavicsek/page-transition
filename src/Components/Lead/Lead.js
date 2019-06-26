import React, {Component} from 'react';
import styles from "./Lead.module.scss"
import HomeContent from "../../routes/Home/HomeContent"

class Lead extends Component {
	render() {
		return (
			<div className={`lead ${styles.lead}`}>
				<HomeContent className={styles.lead__layer} canRenderSidebar={this.props.canRenderSidebar}/>
				<div id="lead__layer--color" className={styles.lead__layer}></div>
				<img id="lead__layer--image" className={styles.lead__layer} alt="" />
				<video id="lead__layer--video" className={styles.lead__layer} src="" autoPlay loop></video>
				<div id="lead__layer--canvas" className={styles.lead__layer}></div>
			</div>
		);
	}
}

export default Lead;