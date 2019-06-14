import React, {Component} from 'react';
import * as Scroll from 'react-scroll';

import {Switch, Route, withRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Lead from "../Components/Lead/Lead"
import HomeContent from "../routes/Home/HomeContent"
import Route1 from "../routes/Route1/Route1"
import Route2 from "../routes/Route2/Route2"
import Route3 from "../routes/Route3/Route3"
import Route4 from "../routes/Route4/Route4"
import Navbar from '../Components/Navbar/Navbar'
import Home from "../routes/Home/Home";

class Router extends Component {

	state = {
		scrollDuration: 0
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			setTimeout(() =>{
				document.querySelector(".lead").style.height = "100vh";
				document.querySelector(".lead").style.transition = "height .25s"
			}, 250)
		}
	}

	render() {
		return (
			<>
				<Navbar />

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
							render={(props)=><Home {...props}
													scrollDuration={this.state.scrollDuration} />} />

							<Route path="/route1"
							exact
							render={(props)=> <Route1 {...props}
													  scrollDuration={this.state.scrollDuration} />} />

							<Route path="/route2"
							exact
							render={(props)=> <Route2 {...props}
													  scrollDuration={this.state.scrollDuration} />} />

							<Route path="/route3"
							exact
							render={(props)=> <Route3 {...props}
													  scrollDuration={this.state.scrollDuration} />} />

							<Route path="/route4"
							exact
							render={(props)=> <Route4 {...props}
													  scrollDuration={this.state.scrollDuration} />} />

						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</>

		);
	}
}

export default withRouter(Router);