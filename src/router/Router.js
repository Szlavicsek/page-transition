import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import AOS from 'aos';
import * as help from "../JsModules/helper"
import * as cookie from "../JsModules/cookie"

import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import OpenPositionLink from '../Components/OpenPositionLink/OpenPositionLink'
import Lead from "../Components/Lead/Lead"
import Company from "../routes/Company/Company"
import Contact from "../routes/Contact/Contact"
import Works from "../routes/Works/Works"
import Jobs from "../routes/Jobs/Jobs"
import Navbar from '../Components/Navigation/Navigation'
import HomeLogic from "../routes/Home/HomeLogic";
import Video from "../routes/_Video/Video";
import Policy from "../routes/Policy/Policy";

let scroll = Scroll.animateScroll;

class Router extends Component {

	state = {
		currentSlideId: 0, // ez azért kell, hogy homepage-ről aloldalra váltáskor tudja az animáció h melyik slide szövegét kell leanimálni
		scrollDuration: 0,
		leadNeedsTransition: false,
		loadingScreenIsVisible: true
	};

	mountLandingPage() {
		this.setState({mainCanMount: true})
	};

	hideLoadingScreen() { // itt kell kezdődjön a főoldali szöveganimáció. A loadingScreen befejezése hívja meg
		this.setState({loadingScreenIsVisible: false});
	}

	componentDidMount() {
		scroll.scrollToTop({
			smooth: true,
			duration: 1000,
			// duration: help.getScrollDuration(),
			isDynamic: true,
		});
		this.setState({leadNeedsTransition: true});

		AOS.init();
		setTimeout(() => document.querySelector('#header').classList.add("transitioning"), 1000);
		if (this.props.location.pathname !== "/") {
			this.hideLoadingScreen();
			this.mountLandingPage();
		}

		this.setState({timeoutForBgcChange: 500});


		if (localStorage.getItem("response")) {
			const data = JSON.parse(localStorage.getItem("response"));
			this.setState({
				isFetching: false,
				projects: data.projects,
				team: data.team,
				jobs: data.jobs,
				job_carousel_images: data.job_carousel_images,
			// }, () => this.renderEverything())
			})
		} else {
			this.setState({isFetching: true});
			fetch("https://api.myjson.com/bins/93bvj")
				.then(response => response.json())
				.then(data => {
					setTimeout(() => {
						this.setState({
							isFetching: false,
							projects: data.projects,
							team: data.team,
							jobs: data.jobs,
							job_carousel_images: data.job_carousel_images,
						// }, () => this.renderEverything());
						});
						localStorage.setItem("response", JSON.stringify(data))
					}, 2000)

				})
				.catch(err => {
					console.log(err)
					this.setState({isFetching: "error"})
				});
		}
		// cursor.init();

		// window.addEventListener("wheel", function (e) {
		// 	if (this.state.mobileMenuIsOpen) {
		// 		e.preventDefault()
		// 	}
		// }.bind(this));

		window.addEventListener("resize", function (e) {
			this.setState({innerHeight: window.innerHeight})
		}.bind(this))
	}

	changeCurrentSlideId(id) {
		this.setState({currentSlideId: id})
	}

	onRouteChanged(previousLocation) {
		const prevlocation = previousLocation ? previousLocation : "";

		//set stuff for lead

		this.setState({currentLocation: this.props.location.pathname});

		// scroll.scrollToTop({
		// 	smooth: true,
		// 	duration: 1000,
		// 	// duration: help.getScrollDuration(),
		// 	isDynamic: true,
		// });

		setTimeout(function () {
			const $lead = document.querySelector('.lead');
			//egyszer nem találta a lead-et (home és jobs között)
			$lead.style.height = "100vh";
			$lead.style.transition = "height .25s ease-in, background-color .4s ease";
			console.log()
		}, 250);
		// }, 250 + help.getScrollDuration());




		if (prevlocation === '/') {
			const path = this.props.location.pathname;

			// conditions to leave animated text up;
			const condition1 = path !== "/works/video" && this.state.currentSlideId !== 1;
			const condition2 = path !== "/works/video" && this.state.currentSlideId !== 1;

			console.log(condition1)
			if (condition1 && condition2) {
				help.animateLeadTextDown(this.state.currentSlideId);
			}



			//v lead-textbox--${}
			const $button = document.querySelector(`#caption_box_${this.state.currentSlideId} .mainPageButton`); //button
			Array.from(document.querySelectorAll('.circle-button')).forEach((x, i)=>{
				const delay = i * 125;
				setTimeout(() => { x.classList.remove('animatedCircleButton') }, delay)
			})
			if ($button) { // ezt nem lehet átvonni a helper.js-be, mert akkor minden alkalommal leanimálódna a gomb ami a slideok kört nem jó
				$button.classList.add("mainButtonDisappearing"); // button__animating--in
				setTimeout(() => { $button.style.opacity = 0 }, 800);
				setTimeout(() => { $button.classList.remove('button_animating--in')}, 2000);
				setTimeout(() => { $button.classList.remove('mainButtonDisappearing')}, 2000);
			}
		} else {
			setTimeout(help.animateLeadTextDown);
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// help.listenForTop100px(); // -> trackMousePositionForHeader / Navbar

		// if (prevState.loadingScreenIsVisible && !this.state.loadingScreenIsVisible) {
		// 	cookie.init();
		// }
		if (prevProps.location !== this.props.location) {
			setTimeout(() =>{
				document.querySelector(".lead").style.height = "100vh";
				document.querySelector(".lead").style.transition = "height .25s"
			}, 250);
			this.onRouteChanged(prevProps.location.pathname);
		}

	}

	render() {
		return (
			<>
				<Navbar
					mobileMenuIsOpen={false}
				/>

				<Lead canRenderSidebar={this.state.canRenderSidebar} />

				<TransitionGroup>
					<CSSTransition
					key={this.props.location.pathname}
					appear={true}
					timeout={800 + this.state.scrollDuration}
					classNames="fade">


						<Switch location={this.props.location}> {/* switch is needed for CSSTransition key prop */}

							<Route path="/"
							exact
							render={(props)=><HomeLogic {...props}
														currentSlideId={this.state.currentSlideId}
														changeCurrentSlideId={(id) => this.changeCurrentSlideId(id)}
														scrollDuration={this.state.scrollDuration} />} />

							<Route path="/works"
								   exact
								   render={(props)=> <Works {...props}
															leadNeedsTransition={this.state.leadNeedsTransition}
															scrollDuration={this.state.scrollDuration} />} />

							<Route path="/works/video"
								   exact
								   render={(props)=> <Video {...props}
															currentSlideId={this.state.currentSlideId}
															leadNeedsTransition={this.state.leadNeedsTransition}
															scrollDuration={this.state.scrollDuration} />} />

							<Route path="/company"
							exact
							render={(props)=> <Company {...props}
													   leadNeedsTransition={this.state.leadNeedsTransition}
													   scrollDuration={this.state.scrollDuration} />} />

							<Route path="/contact"
							exact
							render={(props)=> <Contact {...props}
													   leadNeedsTransition={this.state.leadNeedsTransition}
													   scrollDuration={this.state.scrollDuration} />} />


							<Route path="/jobs"
							exact
							render={(props)=> <Jobs {...props}
													leadNeedsTransition={this.state.leadNeedsTransition}
													scrollDuration={this.state.scrollDuration} />} />

							<Route path="/policy"
								   exact
								   render={(props)=> <Policy {...props}
															leadNeedsTransition={this.state.leadNeedsTransition}
															scrollDuration={this.state.scrollDuration} />} />

						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</>

		);
	}
}

export default withRouter(Router);