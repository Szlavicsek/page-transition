import React, { Component } from 'react';
import { GlobalContext } from "../Contexts/GlobalContext";

import * as Scroll from 'react-scroll';
import AOS from 'aos';
import * as help from "../JsModules/helper"
import cookie from "../JsModules/cookie"

import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Lead from "../Components/Lead/Lead"
import Company from "../routes/Company/Company"
import Contact from "../routes/Contact/Contact"
import Works from "../routes/Works/Works"
import Jobs from "../routes/Jobs/Jobs"
import JobTemplate from "../routes/JobTemplate/JobTemplate"
import Navbar from '../Components/Navigation/Navigation'
import HomeLogic from "../routes/Home/HomeLogic";
import Video from "../routes/_Video/Video";
import Policy from "../routes/Policy/Policy";
import NotFound from '../routes/NotFound/NotFound'
import Cookie from '../Components/Cookie/Cookie'
import LoadingScreen from "../routes/LoadingScreen/LoadingScreen";
import Cursor from '../Components/Cursor/Cursor'

let scroll = Scroll.animateScroll;

class Router extends Component {

	state = {
		loadingScreenIsVisible: true
	};
	
	mountLandingPage() {
		this.setState({mainCanMount: true})
	};

	hideLoadingScreen() { // itt kell kezdődjön a főoldali szöveganimáció. A loadingScreen befejezése hívja meg
		this.setState({loadingScreenIsVisible: false});
	}

	componentDidMount() {
		AOS.init();
		help.handleNavbarBehavior();
		this.context.changeRoute(undefined, this.props.location.pathname);
		scroll.scrollToTop({
			smooth: true,
			duration: help.getScrollDuration(),
			isDynamic: true,
		});
		
		if (this.props.location.pathname !== "/") {
			this.hideLoadingScreen();
			this.mountLandingPage();
		}

		this.setState({timeoutForBgcChange: 500});

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

	onRouteChanged(previousLocation) {
		const prevlocation = previousLocation ? previousLocation : "";

		//set stuff for lead

		this.setState({currentLocation: this.props.location.pathname});

		scroll.scrollToTop({
			smooth: true,
			duration: help.getScrollDuration(),
			isDynamic: true,
		});

		setTimeout(function () {
			const $lead = document.querySelector('.lead');
			$lead.style.height = "100vh";
			$lead.style.transition = "height .25s ease-in, background-color .4s ease";
		}, 250);
		

		if (prevlocation === '/') {
			const path = this.props.location.pathname;
			// conditions to leave animated text up;
			const condition1 = path !== "/works/video";
			const condition2 = path !== "/works/video";
			if (condition1 && condition2) {
				help.animateLeadTextDown(this.context.state.currentHomePageSlideId);
				setTimeout(() => {
					help.resetLead();
					this.context.changeCurrentHomePageSlideId(0);
				}, 1500)
			}
			
			//v lead-textbox--${}
			const $button = document.querySelector(`#caption_box_${this.context.state.currentHomePageSlideId} .mainPageButton`); //button
			Array.from(document.querySelectorAll('.circle-button')).forEach((x, i)=>{
				const delay = i * 125;
				setTimeout(() => { x.classList.remove('animatedCircleButton') }, delay)
			});
			if ($button) { // ezt nem lehet átvonni a helper.js-be, mert akkor minden alkalommal leanimálódna a gomb ami a slideok kört nem jó
				$button.classList.add("mainButtonDisappearing"); // button__animating--in
				setTimeout(() => { $button.style.opacity = 0 }, 800);
				setTimeout(() => { $button.classList.remove('button_animating--in')}, 2000);
				setTimeout(() => { $button.classList.remove('mainButtonDisappearing')}, 2000);
			}
		} else if (prevlocation === "/works/video" && this.props.location.pathname !== "/") {
			help.resetLead();
			this.context.changeCurrentHomePageSlideId(0)
		} else {
			setTimeout(help.animateLeadTextDown);
			const $button = document.querySelector('#button6');
			if ($button) { // ezt nem lehet átvonni a helper.js-be, mert akkor minden alkalommal leanimálódna a gomb ami a slideok kört nem jó
				$button.classList.add("mainButtonDisappearing"); // button__animating--in
				setTimeout(() => { $button.style.opacity = 0 }, 800);
				setTimeout(() => { $button.classList.remove('button_animating--in')}, 2000);
				setTimeout(() => { $button.classList.remove('mainButtonDisappearing')}, 2000);
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {

		if (prevState.loadingScreenIsVisible && !this.state.loadingScreenIsVisible) {
			cookie.init();
		}
		if (prevProps.location !== this.props.location) {
			if (this.props.location === "/" && this.props.location.pathname === "/works/video") {
				this.context.setHomeIsMountedTo(true)
			} else {
				this.context.setHomeIsMountedTo(false)
			}
			this.onRouteChanged(prevProps.location.pathname);
			this.context.changeRoute(prevProps.location.pathname, this.props.location.pathname)
		}

	}

	render() {
		return (
			<>
				{this.context.state.fetchingStatus === "error" ?  <div>server is down</div> :
					this.state.loadingScreenIsVisible && this.props.location.pathname === "/" ? <LoadingScreen
						mountLandingPage={()=> this.mountLandingPage()}
						hideLoadingScreen={()=> this.hideLoadingScreen()}
					/> : "" }
				
				{this.state.mainCanMount || this.props.location.pathname !== "/" ?
				<>
					
					<Navbar
						mobileMenuIsOpen={false}
					/>
	
					<Lead canRenderSidebar={this.state.canRenderSidebar} />
	
					<TransitionGroup>
						<CSSTransition
						key={this.props.location.pathname}
						appear={true}
						timeout={800}
						classNames="fade">
							
							<Switch location={this.props.location}> {/* switch is needed for CSSTransition key prop */}
								<Route path="/" exact render={(props)=><HomeLogic {...props} context={this.context}/>} />
								<Route path="/works" exact render={(props)=> <Works {...props}/>} />
								<Route path="/works/video" exact render={(props)=> <Video {...props}/>} />
								<Route path="/company" exact render={(props)=> <Company {...props}/>} />
								<Route path="/contact" exact render={(props)=> <Contact {...props}/>} />
								<Route path="/jobs" exact render={(props)=> <Jobs {...props}/>} />
								<Route path={`/jobs/:job`} exact render={(props)=> <JobTemplate {...props}/>} />
								<Route path="/policy" exact render={(props)=> <Policy {...props}/>} />
								<Route render={(props)=> <NotFound {...props}/>} />
							</Switch>
							
						</CSSTransition>
					</TransitionGroup>
					<Cookie />
					<Cursor />
				</>: "" }
			</>

		);
	}
}
Router.contextType = GlobalContext;

export default withRouter(Router);