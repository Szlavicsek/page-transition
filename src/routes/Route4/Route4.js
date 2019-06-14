import React, {Component} from 'react';
import styles from "./Route4.module.scss"
import * as help from "../../JsModules/helper";

class Route4 extends Component {
	componentDidMount() {
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundColor: "red"});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				
			</div>
		);
	}
}

export default Route4;