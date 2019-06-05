import React from 'react';
import styles from './Navbar.module.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<div id={styles.navbar}>
			<Link to="/">home</Link>
			<Link to="/route1">route1</Link>
			<Link to="/route2">route2</Link>
			<Link to="/route3">route3</Link>
			<Link to="/route4">route4</Link>
		</div>
	);
};

export default Navbar;
