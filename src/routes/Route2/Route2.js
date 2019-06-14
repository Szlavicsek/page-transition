import React, {Component} from 'react';
import styles from "./Route2.module.scss"
import * as help from "../../JsModules/helper";
import image from "../../assets/96ADC2750551C6E70B719990D9D2C09236856C21.jpg"

class Route2 extends Component {
	componentDidMount() {
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundImage: image});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				
			</div>
		);
	}
}

export default Route2;