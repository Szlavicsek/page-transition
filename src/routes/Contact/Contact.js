import React, {Component} from 'react';
import styles from "./Contact.module.scss"
import * as help from "../../JsModules/helper";
import image from "../../assets/media/96ADC2750551C6E70B719990D9D2C09236856C21.jpg"

class Contact extends Component {
	componentDidMount() {
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundImage: image, needsTransition: this.props.leadNeedsTransition});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				Contact
			</div>
		);
	}
}

export default Contact;