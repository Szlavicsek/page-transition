import React, {Component} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Lead from "../Components/Lead/Lead"
import Home from "../routes/Home/Home"
import Route1 from "../routes/Route1/Route1"
import Route2 from "../routes/Route2/Route2"
import Route3 from "../routes/Route3/Route3"
import Route4 from "../routes/Route4/Route4"

import Navbar from '../Components/Navbar/Navbar'

class Router extends Component {
	render() {
		return (
			<>
				<Navbar />

				<Lead>
					<Home></Home>
				</Lead>

				<TransitionGroup>
					<CSSTransition
					key={this.props.location.pathname}
					appear={true}
					timeout={800}
					classNames="fade">


						<Switch location={this.props.location}> {/* switch is needed for CSSTransition key prop */}

							<Route path="/"
							exact
							render={()=><div style={{width: "100vw", height: "100vh"}}></div>} />

							<Route path="/route1"
							exact
							render={(props)=> <Route1 {...props} />} />

							<Route path="/route2"
							exact
							render={(props)=> <Route2 {...props} />} />

							<Route path="/route3"
							exact
							render={(props)=> <Route3 {...props} />} />

							<Route path="/route4"
							exact
							render={(props)=> <Route4 {...props} />} />

						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</>

		);
	}
}

export default withRouter(Router);