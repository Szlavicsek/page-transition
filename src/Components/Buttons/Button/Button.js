import React from 'react';
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
	//props: text, customClass, type, linkto, onClickHandler
	if (props.linkto) {
		return (
			<Link id={props.id ? props.id : ""} className={`${props.buttonType === "animating" ? styles.animatingButton : styles.button} ${props.customClass ? props.customClass : ""}`} to={props.linkto}>{props.text}</Link>
		)
	} else {
		return (
			<button onClick={() => props.onClickHandler()} type={props.type === "submit" ? "submit" : "button"} className={`${styles.button} ${props.customClass ? props.customClass : ""}`}>{props.text}</button>
		);
	}
};

export default Button;
