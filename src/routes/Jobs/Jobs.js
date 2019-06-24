import React, {Component} from 'react';
import styles from "./Jobs.module.scss"
import * as help from "../../JsModules/helper";

class Jobs extends Component {
	componentDidMount() {
		console.log(this.props.leadNeedsTransition)

		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundColor: "red", needsTransition: this.props.leadNeedsTransition});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				Jobs
			</div>
		);
	}
}

export default Jobs;