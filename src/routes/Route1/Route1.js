import React, {Component} from 'react';
import styles from "./Route1.module.scss"
import * as help from "../../JsModules/helper"

class Route1 extends Component {
	componentDidMount() {
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundColor: "#6e00ff"});
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
	}

	render() {
		return (
			<div className={styles.wrapper}>
			</div>
		);
	}
}

export default Route1;