import React, {Component} from 'react';
import styles from "./Route3.module.scss"
import * as help from "../../JsModules/helper";

class Route3 extends Component {
	componentDidMount() {
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundColor: "blue"});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				
			</div>
		);
	}
}

export default Route3;