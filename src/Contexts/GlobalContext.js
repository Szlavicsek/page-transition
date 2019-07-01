import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-dom'
import Card from "../Components/Card/Card"
import JobLink from "../Components/JobLink/JobLink"
import img from '../assets/images/c2.jpg'

export const GlobalContext = createContext();

export class GlobalProvider extends Component {

	state = {
		prevLocation: undefined,
		currentLocation: undefined,
		fetchingStatus: undefined,
		data: {
			openPositions: undefined,
			projects: undefined,
			lead: undefined,
			crew: undefined
		},
		rendered: {
			projects: undefined,
			openPositions: undefined,
			footerProjects: undefined,
			lead: undefined,
			crew: undefined
		},
		currentHomePageSlideId: 0,
		scrollDuration: 0,
		leadNeedsTransition: false,
		canInitButtonPopup: false,
		canClick: true,
		homeIsMounted: true
	};
	
	changeCurrentHomePageSlideId(id) {
		this.setState({currentHomePageSlideId: id})
	}

	canInitAnimation() {
		this.setState({canInitButtonPopup: true})
	}
	
	changeRoute(prevRoute, thisRoute) {
		this.setState({prevLocation: prevRoute, currentLocation: thisRoute})
	}
	
	disableClick1000ms() {
		this.setState({ canClick: false });
		setTimeout(() => {
			this.setState({
				canClick: true
			})
		}, 2000)
	}
	
	setHomeIsMountedTo(bool) {
		if (bool) {
			this.setState({homeIsMounted: bool})
		} else {
		setTimeout(() => {
				this.setState({homeIsMounted: bool})
			}, 1500)
		}
	}
	
	checkPreventDefault(e) {// -> HandleLinkClick ?
		if (this.state.currentLocation === e.target.getAttribute("href") || this.state.currentLocation === e.target.parentElement.getAttribute("href") || !this.state.canClick) {
			e.preventDefault()
		} else {
			this.disableClick1000ms()
		}
	}
	
	renderComponents(data) {
		const renderedProjects = data.projects.map((project, i) => {
			if (i < 6) {
				return <Card key={i} size="big" title={project.title} description={project.subtitle} pic={img} linkto={`/works/${project.image_title}`}/>
			}
			// return <Card key={i} size="big" title={project.title} description={project.subtitle} pic={img} linkto={`/works/${project.route}`}/>
		});
		
		const renderedLead = data.team.lead.map((person, i) => {
			return <Card key={i} size="big" title={person.name} description={person.position} pic={img}/>
		});

		const renderedCrew = data.team.crew.map((person, i) => {
			return <Card key={i} size="small" title={person.name} description={person.position} pic={img}/>
		});

		renderedCrew.push(<Card  key={data.team.crew.length} size="small" title="Wanna join?" description="Check out our open positions" pic={img} yourcard/>);

		// for the footer
		//should randomize?
		const renderedFooterProjects = data.projects.map((project, i) => i < 3 ? <Card key={i} linkto={project.route} size="big" title={project.title} description={project.subtitle} pic={img}/> : null
		);
		
		const renderedOpenPositions = data.openPositions.map((job, i) => {
			return <JobLink key={i} linkto={`${job.route}`} title={job.title} />
		});
		
		this.setState({
			rendered: {
				projects: renderedProjects,
				lead: renderedLead,
				crew: renderedCrew,
				footerProjects: renderedFooterProjects,
				openPositions: renderedOpenPositions
			}
		})
	}
	
	fetchData() {
		if (localStorage.getItem("mewegData")) {
			const data = JSON.parse(localStorage.getItem("melkwegData"));
			this.renderComponents(data);
			this.setState({fetchingStatus: "complete", data: data})
			setTimeout(() => document.querySelector('#header').classList.remove("preventTransition"), 1000);
			
		} else {
			this.setState({fetchingStatus: "fetching"});
			Promise.all([
				fetch("https://api.myjson.com/bins/1g8egn").then(resp => resp.json()), // team
				// fetch("http://melkwegv2.gszabo.mlkwg.com/api/team").then(resp => resp.json()), // team
				fetch("https://api.myjson.com/bins/14hirv").then(resp => resp.json()), // carreer
				fetch("https://api.myjson.com/bins/15do6j").then(resp => resp.json()) // projects
				// fetch("https://api.myjson.com/bins/14hirv").then(resp => resp.json()), // carreer
				// fetch("https://api.myjson.com/bins/14hirv").then(resp => resp.json()) // carreer
			]).then(([team, positions, projects]) => {
				const data = {
					team: team.data,
					openPositions: positions.data,
					projects: projects.data
				};
				this.renderComponents(data);
				// setTimeout(function () {
					this.setState({data: data, fetchingStatus: "complete"});
					
				// }, 1000000)
				
				
				localStorage.setItem("melkwegData", JSON.stringify(data))
				setTimeout(() => document.querySelector('#header').classList.remove("preventTransition"), 1000);
				
			}).catch((err) => {
				console.log(err);
			});
		}
	}
	
	componentDidMount() {
		this.setState({leadNeedsTransition: true});
		this.fetchData()
	}
	
	render() {
		return (
			<GlobalContext.Provider value={{
				state: this.state,
				changeCurrentHomePageSlideId: (id) => this.changeCurrentHomePageSlideId(id),
				canInitAnimation: () => this.canInitAnimation(),
				changeRoute: (prevRoute, thisRoute) => this.changeRoute(prevRoute, thisRoute),
				checkPreventDefault: (e) => this.checkPreventDefault(e),
				disableClick: () => this.disableClick1000ms(),
				setHomeIsMountedTo: (bool) => this.setHomeIsMountedTo(bool)
			}}>
				{this.props.children}
			</GlobalContext.Provider>
		);
	}
}