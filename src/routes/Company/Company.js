import React, {Component} from 'react';
import { GlobalContext } from "../../Contexts/GlobalContext";
import styles from "./Company.module.scss"
import * as help from "../../JsModules/helper"
import Button from '../../Components/Buttons/Button/Button'
import BigFooter from '../../Components/Footers/BigFooter/BigFooter'
import Card from '../../Components/Card/Card'

import og from '../../assets/images/og-services.jpg';
import { Link, withRouter } from "react-router-dom"
import AOS from "aos";


class Company extends Component {

	componentDidMount() {
		help.pageTransition({height: 60, timeout: 500, scrollDuration: 0, backgroundColor: "#6e00ff", needsTransition: this.context.state.leadNeedsTransition});
		help.changeLeadText(["Digital?", "That's what we do."], "Melkweg is a design consultancy and interactive production company", "white","left-top");
		setTimeout(() => { help.animateLeadTextUp() }, 800); //=> help.changeleadtext
		setTimeout(() => { AOS.refresh() }, 1500); //=> help.pagetransition
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.page_top}></div>
				<section className={styles.services_section}>
					<div className={styles.inner}>
						<div className={`${styles.media_wrapper} lead_image`}>
							<img className={styles.media_image} src={og} alt="imgleft"/>
						</div>
						<h1 className={styles.services_header}>Services</h1>
						<div className={styles.services_list_wrapper}>

							<div className={styles.services_box}>
								<div className={styles.services_box_inner}>
									<h5 className={styles.service_title}>Strategy</h5>
									<ul className={styles.service_list}>
										<li className={styles.service_list_element}><span>– </span>Brand identity</li>
										<li className={styles.service_list_element}><span>– </span>Digital strategy</li>
										<li className={styles.service_list_element}><span>– </span>Creative concept</li>
									</ul>
								</div>
							</div>

							<div className={styles.services_box}>
								<div className={styles.services_box_inner}>
									<h5 className={styles.service_title}>Strategy</h5>
									<ul className={styles.service_list}>
										<li className={styles.service_list_element}><span>– </span>Research, IA design</li>
										<li className={styles.service_list_element}><span>– </span>UX/UI design</li>
										<li className={styles.service_list_element}><span>– </span>Prototyping</li>
										<li className={styles.service_list_element}><span>– </span>Visual design</li>
										<li className={styles.service_list_element}><span>– </span>Interaction design</li>
									</ul>
								</div>
							</div>

							<div className={styles.services_box}>
								<div className={styles.services_box_inner}>
									<h5 className={styles.service_title}>Strategy</h5>
									<ul className={styles.service_list}>
										<li className={styles.service_list_element}><span>– </span>Websites</li>
										<li className={styles.service_list_element}><span>– </span>Custom web applications</li>
										<li className={styles.service_list_element}><span>– </span>Mobile applications</li>
										<li className={styles.service_list_element}><span>– </span>Games & digital solutions</li>
									</ul>
								</div>
							</div>

							<div className={styles.services_box}>
								<div className={styles.services_box_inner}>
									<h5 className={styles.service_title}>Strategy</h5>
									<ul className={styles.service_list}>
										<li className={styles.service_list_element}><span>– </span>Animation</li>
										<li className={styles.service_list_element}><span>– </span>Film making</li>
										<li className={styles.service_list_element}><span>– </span>TVC</li>
										<li className={styles.service_list_element}><span>– </span>Branded & social content</li>
										<li className={styles.service_list_element}><span>– </span>Sound & photo studio</li>
									</ul>
								</div>
							</div>

						</div>
						<Button customClass={styles.button} text="Get in touch" linkto="/contact" />
					</div>
				</section>

				<section className={styles.team}>
					<div className={styles.whymelkweg}>
						<h6 className={styles.why_header}>Why Melkweg?</h6>
					</div>
					<div className={styles.inner}>
						<h1 className={styles.team_header}>Our team</h1>
						<div className={styles.team_leaders_wrapper}>
							{ this.context.state.rendered.lead }
						</div>
						<div className={styles.team_members_wrapper}>
							{ this.context.state.rendered.crew }
						</div>
					</div>
				</section>

				<section className={styles.story_wrapper}>
					<div className={styles.inner}>
						<h2 className={styles.story_header}>Story</h2>
						<p className={styles.story_paragraph}>The work always has to be done. However, in the traditional setup nobody really cared. It was just work. It was us versus the client. Times change though… We care more. End-users care more. Clients care more. We see that all players are more and more interested and emotionally invested in the end product.</p>
						<p className={styles.story_paragraph}>We are not looking for clients or employees. We are looking for partners who have their own plans, but also want to work together with others. With others who care. With others who are willing to get their hands dirty for the common good.</p>
					</div>
					<div className={styles.social_icons}>
						<a className={styles.social_icon} href="https://facebook.com" title="facebook">
							<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
								<g id="home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="Work-Page" transform="translate(-1276.000000, -7340.000000)">
										<g id="Group-8" transform="translate(150.000000, 7342.000000)">
											<g id="Group-6" transform="translate(1128.000000, 0.000000)">
												<g id="btn-copy">
													<circle id="Oval" stroke="#000000" strokeWidth="2.5" fillRule="nonzero" cx="28" cy="28" r="28"></circle>
													<path d="M18.4305,21.464 L26.5055,21.464 L26.5055,23.912 L21.0825,23.912 L21.0825,26.36 L26.0975,26.36 L26.0975,28.808 L21.0825,28.808 L21.0825,33.5 L18.4305,33.5 L18.4305,21.464 Z M28.3245,20.648 L30.8745,20.648 L30.8745,26.122 L30.9085,26.122 C31.2031681,25.7253314 31.5799977,25.4448342 32.039,25.2805 C32.4980023,25.1161658 32.9938307,25.034 33.5265,25.034 C34.1158363,25.034 34.642831,25.1558321 35.1075,25.3995 C35.572169,25.6431679 35.9659984,25.968998 36.289,26.377 C36.6120016,26.785002 36.8613325,27.2524974 37.037,27.7795 C37.2126675,28.3065026 37.3005,28.8589971 37.3005,29.437 C37.3005,30.0603365 37.2041676,30.6326641 37.0115,31.154 C36.8188324,31.6753359 36.5440018,32.1258314 36.187,32.5055 C35.8299982,32.8851686 35.4021692,33.1798323 34.9035,33.3895 C34.4048308,33.5991677 33.8495031,33.704 33.2375,33.704 C32.9428319,33.704 32.665168,33.6643337 32.4045,33.585 C32.143832,33.5056663 31.9030011,33.4036673 31.682,33.279 C31.4609989,33.1543327 31.2683342,33.0155008 31.104,32.8625 C30.9396658,32.7094992 30.8065005,32.5593341 30.7045,32.412 L30.6705,32.412 L30.6705,33.5 L28.3245,33.5 L28.3245,20.648 Z M30.6705,29.369 C30.6705,29.9923364 30.8489982,30.4966647 31.206,30.882 C31.5630018,31.2673353 32.0644968,31.46 32.7105,31.46 C33.3565032,31.46 33.8579982,31.2673353 34.215,30.882 C34.5720018,30.4966647 34.7505,29.9923364 34.7505,29.369 C34.7505,28.7456635 34.5720018,28.2413353 34.215,27.856 C33.8579982,27.4706647 33.3565032,27.278 32.7105,27.278 C32.0644968,27.278 31.5630018,27.4706647 31.206,27.856 C30.8489982,28.2413353 30.6705,28.7456635 30.6705,29.369 Z" id="Fb" fill="#29222F"></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</a>
						<a className={styles.social_icon} href="https://linkedin.com" title="linkedin">
							<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
								<g id="home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="Work-Page" transform="translate(-1374.000000, -7340.000000)">
										<g id="Group-8" transform="translate(150.000000, 7342.000000)">
											<g id="Group-6" transform="translate(1128.000000, 0.000000)">
												<g id="btn-copy-2" transform="translate(98.000000, 0.000000)">
													<circle id="Oval" stroke="#000000" strokeWidth="2.5" fillRule="nonzero" cx="28" cy="28" r="28"></circle>
													<path d="M21.295,21.464 L23.947,21.464 L23.947,33.5 L21.295,33.5 L21.295,21.464 Z M26.038,25.238 L28.486,25.238 L28.486,26.36 L28.52,26.36 C28.5993337,26.2013325 28.7126659,26.0426675 28.86,25.884 C29.0073341,25.7253325 29.182999,25.5836673 29.387,25.459 C29.591001,25.3343327 29.823332,25.2323337 30.084,25.153 C30.344668,25.0736663 30.6279985,25.034 30.934,25.034 C31.5800032,25.034 32.1013314,25.1331657 32.498,25.3315 C32.8946686,25.5298343 33.2034989,25.8046649 33.4245,26.156 C33.6455011,26.5073351 33.7956663,26.9209976 33.875,27.397 C33.9543337,27.8730024 33.994,28.3886639 33.994,28.944 L33.994,33.5 L31.444,33.5 L31.444,29.454 C31.444,29.2159988 31.4355001,28.9695013 31.4185,28.7145 C31.4014999,28.4594987 31.3505004,28.2243344 31.2655,28.009 C31.1804996,27.7936656 31.0501675,27.6180007 30.8745,27.482 C30.6988325,27.3459993 30.4466683,27.278 30.118,27.278 C29.7893317,27.278 29.523001,27.3374994 29.319,27.4565 C29.114999,27.5755006 28.9591672,27.7341657 28.8515,27.9325 C28.7438328,28.1308343 28.6730002,28.3546654 28.639,28.604 C28.6049998,28.8533346 28.588,29.1139986 28.588,29.386 L28.588,33.5 L26.038,33.5 L26.038,25.238 Z" id="In" fill="#29222F"></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</a>
						<a className={styles.social_icon} href="https://twitter.com" title="twitter">
							<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
								<g id="home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="Work-Page" transform="translate(-1472.000000, -7340.000000)">
										<g id="Group-8" transform="translate(150.000000, 7342.000000)">
											<g id="Group-6" transform="translate(1128.000000, 0.000000)">
												<g id="btn-copy-3" transform="translate(196.000000, 0.000000)">
													<circle id="Oval" stroke="#000000" strokeWidth="2.5" fillRule="nonzero" cx="28" cy="28" r="28"></circle>
													<path d="M20.037,23.81 L16.603,23.81 L16.603,21.464 L26.123,21.464 L26.123,23.81 L22.689,23.81 L22.689,33.5 L20.037,33.5 L20.037,23.81 Z M24.27,25.238 L26.99,25.238 L28.673,30.423 L28.707,30.423 L30.118,25.238 L32.906,25.238 L34.436,30.423 L34.47,30.423 L36.017,25.238 L38.601,25.238 L35.66,33.5 L33.144,33.5 L31.427,28.009 L31.393,28.009 L29.863,33.5 L27.296,33.5 L24.27,25.238 Z" id="Tw" fill="#29222F"></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</a>
					</div>
				</section>
				<BigFooter />
			</div>
		);
	}
}

Company.contextType = GlobalContext;
export default withRouter(Company);