import React from 'react';
import styles from './Navigation.module.scss'
import {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import {GlobalContext} from "../../Contexts/GlobalContext";

const Navigation = (props) => {
	const context = useContext(GlobalContext);
	return (
		<header id='header' className="preventTransition">
			<nav className="desktop-navigation-wrapper">
				<NavLink exact to="/" className={styles.melkweg_logo_wrapper} style={{transform: "scale(0.9)"}} onClick={(e) => context.checkPreventDefault(e)}>
					{/*onClick={(e) => props.checkPreventDefault(e)}*/}
					<svg version="1.1" className={styles.melkweg_logo} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						 viewBox="0 0 48.189 48.189" enableBackground="new 0 0 48.189 48.189">
						<polygon points="33.006,3.761 24.096,24.921 15.185,3.761 0.664,3.761 0.664,44.43 12.545,44.43 12.545,24.921
					13.204,24.921 17.825,37.486 24.096,37.486 30.367,37.486 34.985,24.921 35.646,24.921 35.646,44.43 47.526,44.43 47.526,3.761 "/>
					</svg>
				</NavLink>
				<div className={styles.link_container}>

					{/*onClick={(e) => props.checkPreventDefault(e)}*/}
					<NavLink
						exact
						to="/works"
						onClick={(e) => context.checkPreventDefault(e)}
						className={styles.link_wrapper}
						activeClassName={styles.link_active}>
						<span className={styles.link_text}>Works</span>
					</NavLink>

					<NavLink
						exact
						to="/company"
						onClick={(e) => context.checkPreventDefault(e)}
						className={styles.link_wrapper}
						activeClassName={styles.link_active}>
						<span className={styles.link_text}>Company</span>
					</NavLink>

					<NavLink
						exact
						to="/contact"
						onClick={(e) => context.checkPreventDefault(e)}
						className={styles.link_wrapper}
						activeClassName={styles.link_active}>
						<span className={styles.link_text}>Contact</span>
					</NavLink>

					<NavLink
						exact
						to="/jobs"
						onClick={(e) => context.checkPreventDefault(e)}
						className={styles.link_wrapper}
						activeClassName={styles.link_active}>
						<span className={styles.link_text}>Jobs</span>
					</NavLink>

					<button className={styles.wave_icon}>
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100"><path d="M40.5,81c-2.5,0-3.1-2.2-4.4-30.3c-0.4-8.5-0.9-19.4-1.7-25.2c-0.5,4-0.9,10.4-1.2,15.5C32.1,60.2,31.5,65,28.5,65  c-3.2,0-3.9-4.6-4.6-9.4c-0.3-2.2-0.8-5.8-1.5-6.6c-0.7,0.2-1.3,2.2-1.7,3.6C20,55.1,19.2,58,16.5,58c-2.2,0-3.2-1.2-3.8-1.9  c-0.6-0.7-0.9-1.1-2.2-1.1h-5C4.7,55,4,54.3,4,53.5S4.7,52,5.5,52h5c2.7,0,3.7,1.3,4.4,2.1c0.5,0.6,0.7,0.9,1.6,0.9  c0.5-0.2,1.1-2.2,1.3-3.2c0.8-2.6,1.7-5.8,4.7-5.8c3.1,0,3.7,4.2,4.4,9.1c0.3,1.8,0.7,5,1.3,6.3c1-3.2,1.6-13.6,2-20.7  c1-17.6,1.5-21.7,4.2-21.7c2.6,0,3.2,2.5,4.6,31.5c0.4,7.8,0.9,17.7,1.5,23.4c0.6-4.6,1-11.8,1.3-17.5C43.2,34.3,43.8,31,46.5,31  c2.8,0,3.3,4.5,4.2,17.5c0.4,5.4,1,13.2,1.9,15.9c0.6-1.7,1-5.7,1.3-8.3c0.7-6.8,1.2-12.1,4.6-12.1c3.3,0,3.8,4.1,4.3,8  c0.3,2.1,0.7,6,1.7,6c1,0,1.4-2,1.8-4.6c0.5-2.9,1.1-6.4,4.2-6.4c3.1,0,4,3,4.6,5.2c0.4,1.2,0.8,2.8,1.4,2.8c0.9,0,1.3-0.6,2.1-2  c0.7-1.3,1.7-3,3.9-3c1.8,0,2.7,0.7,3.4,1.2c0.7,0.5,1.2,0.8,2.6,0.8h6c0.8,0,1.5,0.7,1.5,1.5S95.3,55,94.5,55h-6  c-2.4,0-3.5-0.8-4.3-1.4c-0.6-0.4-0.9-0.6-1.7-0.6c-0.4,0-0.7,0.5-1.3,1.5c-0.8,1.4-2,3.5-4.7,3.5c-2.8,0-3.7-2.9-4.3-4.9  c-0.6-2.1-1-3.1-1.7-3.1c-0.6,0-1,2.6-1.2,3.9c-0.5,3-1.2,7.1-4.8,7.1c-3.6,0-4.2-4.6-4.7-8.6c-0.2-1.7-0.6-4.7-1.2-5.3  c-0.9,1.1-1.4,6.2-1.7,9.3C56.2,63.1,55.7,68,52.5,68c-3.1,0-3.7-5-4.8-19.3c-0.3-4-0.7-9.1-1.2-12.2c-0.7,4.5-1.2,13.3-1.7,20.1  C43.6,77.8,43,81,40.5,81z"/></svg>
					</button>
				</div>
				{/*onClick={(e)=>props.toggleMobileMenu(e)}*/}
				<div className={`${styles.hamburger_icon} ${props.mobileMenuIsOpen ? styles.fixed : ""}`}>
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg"
						 viewBox="0 0 448 512">
						<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
					</svg>
				</div>
			</nav>
			{/*<nav className="mobile_menu">*/}
				{/*<div className={"mobile_menu_circle"} style={props.mobileMenuIsOpen ? {transform: `scale(${Math.floor(window.innerHeight/50*2.5)})`} : {transform: `scale(0)`}}>*/}
				{/*</div>*/}
				{/*<ul className="links_container_mobile">*/}
					{/*<li className={`mobile_menu_link ${props.location.pathname === "/works" ? styles.link_active : ""}`} onClick={(e)=>props.toggleMobileMenu(e)}><Link className={styles.link} to="/works">Works</Link></li>*/}
					{/*<li className={`mobile_menu_link ${props.location.pathname === "/company" ? styles.link_active : ""}`} onClick={(e)=>props.toggleMobileMenu(e)}><Link className={styles.link} to="/company">Company</Link></li>*/}
					{/*<li className={`mobile_menu_link ${props.location.pathname === "/contact" ? styles.link_active : ""}`} onClick={(e)=>props.toggleMobileMenu(e)}><Link className={styles.link} to="/contact">Contact</Link></li>*/}
					{/*<li className={`mobile_menu_link ${props.location.pathname === "/jobs" ? styles.link_active : ""}`} onClick={(e)=>props.toggleMobileMenu(e)}><Link className={styles.link} to="/jobs">Jobs</Link></li>*/}
					{/*<li className="mobile_menu_link" onClick={(e)=>props.toggleMobileMenu(e)}>*/}
						{/*<button className={styles.wave}>*/}
							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100"><path fill="#FFF" d="M40.5,81c-2.5,0-3.1-2.2-4.4-30.3c-0.4-8.5-0.9-19.4-1.7-25.2c-0.5,4-0.9,10.4-1.2,15.5C32.1,60.2,31.5,65,28.5,65  c-3.2,0-3.9-4.6-4.6-9.4c-0.3-2.2-0.8-5.8-1.5-6.6c-0.7,0.2-1.3,2.2-1.7,3.6C20,55.1,19.2,58,16.5,58c-2.2,0-3.2-1.2-3.8-1.9  c-0.6-0.7-0.9-1.1-2.2-1.1h-5C4.7,55,4,54.3,4,53.5S4.7,52,5.5,52h5c2.7,0,3.7,1.3,4.4,2.1c0.5,0.6,0.7,0.9,1.6,0.9  c0.5-0.2,1.1-2.2,1.3-3.2c0.8-2.6,1.7-5.8,4.7-5.8c3.1,0,3.7,4.2,4.4,9.1c0.3,1.8,0.7,5,1.3,6.3c1-3.2,1.6-13.6,2-20.7  c1-17.6,1.5-21.7,4.2-21.7c2.6,0,3.2,2.5,4.6,31.5c0.4,7.8,0.9,17.7,1.5,23.4c0.6-4.6,1-11.8,1.3-17.5C43.2,34.3,43.8,31,46.5,31  c2.8,0,3.3,4.5,4.2,17.5c0.4,5.4,1,13.2,1.9,15.9c0.6-1.7,1-5.7,1.3-8.3c0.7-6.8,1.2-12.1,4.6-12.1c3.3,0,3.8,4.1,4.3,8  c0.3,2.1,0.7,6,1.7,6c1,0,1.4-2,1.8-4.6c0.5-2.9,1.1-6.4,4.2-6.4c3.1,0,4,3,4.6,5.2c0.4,1.2,0.8,2.8,1.4,2.8c0.9,0,1.3-0.6,2.1-2  c0.7-1.3,1.7-3,3.9-3c1.8,0,2.7,0.7,3.4,1.2c0.7,0.5,1.2,0.8,2.6,0.8h6c0.8,0,1.5,0.7,1.5,1.5S95.3,55,94.5,55h-6  c-2.4,0-3.5-0.8-4.3-1.4c-0.6-0.4-0.9-0.6-1.7-0.6c-0.4,0-0.7,0.5-1.3,1.5c-0.8,1.4-2,3.5-4.7,3.5c-2.8,0-3.7-2.9-4.3-4.9  c-0.6-2.1-1-3.1-1.7-3.1c-0.6,0-1,2.6-1.2,3.9c-0.5,3-1.2,7.1-4.8,7.1c-3.6,0-4.2-4.6-4.7-8.6c-0.2-1.7-0.6-4.7-1.2-5.3  c-0.9,1.1-1.4,6.2-1.7,9.3C56.2,63.1,55.7,68,52.5,68c-3.1,0-3.7-5-4.8-19.3c-0.3-4-0.7-9.1-1.2-12.2c-0.7,4.5-1.2,13.3-1.7,20.1  C43.6,77.8,43,81,40.5,81z"/></svg>*/}
						{/*</button>*/}
					{/*</li>*/}
				{/*</ul>*/}
			{/*</nav>*/}
		</header>
	);
};

export default Navigation;
