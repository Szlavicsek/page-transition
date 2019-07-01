import React, {Component} from 'react';
import styles from "./Lead.module.scss"
import HomeContent from "../../routes/Home/HomeContent"
import LeadText from '../LeadText/LeadText'
import {GlobalContext} from "../../Contexts/GlobalContext";

class Lead extends Component {
	componentDidMount() {
		setTimeout(() => {
			Object.values(this.refs).forEach(x => x.classList.remove('preventTransition'))
		}, 500)
	}
	
	render() {
		return (
			<div ref="lead" className={`lead ${styles.lead} preventTransition`}>
				<div className='lead_title__wrapper'>
					<LeadText
						id="6"
						position="left-top"
						textColor="#000"
						title={["Digital?", "That's what we do"]}
						subtitle={"We are a digital agency"}/>
				</div>
				<HomeContent className={styles.lead__layer} canRenderSidebar={this.props.canRenderSidebar}/>
				<div ref="bgc" id="lead__layer--color" className={`${styles.lead__layer} preventTransition`}></div>
				<img ref="img" id="lead__layer--image" className={`${styles.lead__layer} preventTransition`} alt="" />
				<video ref="video" id="lead__layer--video" className={`${styles.lead__layer} preventTransition`} src="" autoPlay loop></video>
				<div ref="canvas" id="lead__layer--canvas" className={`${styles.lead__layer} preventTransition`}></div>
			</div>
		);
	}
}

Lead.contextType = GlobalContext;
export default Lead;