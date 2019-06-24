import React, {Component} from 'react';
import * as Scroll from 'react-scroll';

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
		currentSlideId: 0,
		scrollDuration: 0,
		leadNeedsTransition: false
	};

	componentDidMount() {
		this.setState({leadNeedsTransition: true})
	}

	changeCurrentSlideId(id) {
		this.setState({currentSlideId: id})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			setTimeout(() =>{
				document.querySelector(".lead").style.height = "100vh";
				document.querySelector(".lead").style.transition = "height .25s"
			}, 250);
			if (prevProps.location.pathname === "/") {
				Array.from(document.querySelectorAll('.circle-button')).forEach((x, i)=>{
					const delay = i * 125;
					setTimeout(() => { x.classList.remove('animatedCircleButton') }, delay)
				})
			}
		}

	}

	render() {
		return (
			<>
				<Navbar
					mobileMenuIsOpen={false}
				/>

				<Lead />

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