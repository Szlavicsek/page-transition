import React, { Component } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext'

import BigFooter from "../../Components/Footers/BigFooter/BigFooter";
import { Link, withRouter } from "react-router-dom"
import AOS from 'aos'

import styles from "./Works.module.scss"
import * as help from "../../JsModules/helper";

import leadImage from "../../assets/images/pexels-photo-39811.jpeg"
import logo1 from "../../assets/images/cisco.PNG"


class Works extends Component {
	
	componentDidMount() {
		help.pageTransition({height: 60, timeout: 500, scrollDuration: 0, backgroundColor: "#241E29", needsTransition: this.context.state.leadNeedsTransition});
		help.changeLeadText(["We're proud of our work"], "Take a look at some of our recent projects", "white", "left-top");
		setTimeout(() => { help.animateLeadTextUp() }, 800); //=> help.changeleadtext
		setTimeout(() => { AOS.refresh() }, 1500); //=> help.pagetransition
	}

	render() {
		return (
			<GlobalContext.Consumer>
				{(context) => (
					<div className={styles.wrapper}>
						<section className={styles.works_section}>
							<div className={styles.inner}>
								
								<div className={`${styles.media_wrapper} lead_image`}>
									<div className={styles.media_inner}>
										<img className={`${styles.media_image}`} src={leadImage} alt="hello" />
									</div>
									<Link to="/" className={styles.lead_info}>
										<h2 className={styles.lead_image_title}>Artportal</h2>
										<p className={styles.lead_image_subtitle}>Research, UX & UI redesign</p>
									</Link>
								</div>
								<div className={styles.works_grid_wrapper}>
										{context.state.rendered.projects}
										
									{/*{ this.state.loadMoreButtonPressed ? this.state.moreWork : "" }*/}
								</div>
								<div className={styles.works_bottom}>
									{/*<Button style={this.state.loadMoreButtonPressed ? {display: "none"} : {}} onClickHandler={()=>this.loadMoreWork()} customClass={styles.load_more} text="Show more" />*/}
									
									<p className={styles.disclaimer}>
										All of this contents are published for self-promotional, business-to-business purposes for the exclusive use of our clients. Melkweg explicitly forbids the downloading or re-purposing of any text, audio, visual, programming or design data without prior written consent.
									</p>
								</div>
							</div>
						</section>
						<section className={styles.brands_wrapper}>
							<div className={styles.inner}>
								<h2 className={styles.brands_text}>Brands & clients</h2>
								<div className={styles.logo_grid_wrapper}>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
									<a className={styles.brand_logo} href="#"><img src={logo1} alt=""/></a>
								</div>
							</div>
						</section>
						<BigFooter/>
					</div>
				)}
			</GlobalContext.Consumer>
		);
	}
}

Works.contextType = GlobalContext;
export default Works;