import React, {Component} from 'react';
import styles from "./Company.module.scss"
import * as help from "../../JsModules/helper"

class Company extends Component {
	componentDidMount() {
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundColor: "#6e00ff", needsTransition: this.props.leadNeedsTransition});
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				Company
			</div>
		);
	}
}

export default Company;