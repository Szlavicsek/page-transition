import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import AOS from 'aos';
import * as help from "../JsModules/helper"

import {Switch, Route, withRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Lead from "../Components/Lead/Lead"
import Company from "../routes/Company/Company"
import Contact from "../routes/Contact/Contact"
import Works from "../routes/Works/Works"
import Jobs from "../routes/Jobs/Jobs"
import Navbar from '../Components/Navigation/Navigation'
import HomeLogic from "../routes/Home/HomeLogic";

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

		this.setState({leadNeedsTransition: true});

		AOS.init();
		setTimeout(() => document.querySelector('#header').classList.add("transitioning"), 1000);
		if (this.props.location.pathname !== "/") {
			this.hideLoadingScreen();
			this.mountLandingPage();
		}

		this.setState({timeoutForBgcChange: 500});


		if (localStorage.getItem("melkwegData")) {
			const melkwegData = JSON.parse(localStorage.getItem("melkwegData"));
			this.setState({
				isFetching: false,
				team: melkwegData.team
			})
			// }, () => this.renderEverything())
		} else {
			this.setState({isFetching: true});
			fetch("https://api.myjson.com/bins/1g8egn")
				.then(response => response.json())
				.then(data => {
					// setTimeout(() => {
						this.setState({
							isFetching: false,
							team: data.data
						});
						// }, () => this.renderEverything());
						localStorage.setItem("melkwegData", JSON.stringify(data.data))
					// }, 2000)

				})
				.catch(err => {
					console.log(err);
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
		if (prevlocation === '/') {							//v lead-textbox--${}
			const $button = document.querySelector(`#caption_box_${this.state.currentSlideId} .mainPageButton`); //button
			Array.from(document.querySelectorAll('.circle-button')).forEach((x, i)=>{
				const delay = i * 125;
				setTimeout(() => { x.classList.remove('animatedCircleButton') }, delay)
			})
			console.log("animating down id " + this.state.currentSlideId)
			help.animateLeadTextDown(this.state.currentSlideId);
			if ($button) {
				$button.classList.add("mainButtonDisappearing"); // button__animating--in
				setTimeout(() => { $button.style.opacity = 0 }, 800);
				setTimeout(() => { $button.classList.remove('animatable')}, 2000);
			}
		} else {
			setTimeout(help.animateLeadTextDown);
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
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
														changeCurrentSlideId={(id) => this.changeCurrentSlideId(id)}
														scrollDuration={this.state.scrollDuration} />} />

							<Route path="/works"
								   exact
								   render={(props)=> <Works {...props}
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

						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</>

		);
	}
}

export default withRouter(Router);