import styles from "./SmallFooter.module.scss";
import React from 'react';


const SmallFooter = (props) => {

	return (
		<footer className={styles.footer} style={{backgroundColor: props.bgc}}>
			<div className={styles.inner}>
				<p className={styles.bottom_left} style={{color: props.color}}>&copy; 2019 MelkwegDigital</p>
				<p className={styles.bottom_right}>We rise by lifting others.</p>
			</div>
		</footer>
	);
};

export default SmallFooter;


