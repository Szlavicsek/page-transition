import React, { Component } from 'react';
import styles from "./FooterWithShowcase.module.scss";
import Card from "../../Card/Card";
import SmallFooter from '../SmallFooter/SmallFooter';
import Button from "../../Buttons/Button/Button";
import LazyLoad from "react-lazyload"

const images = require.context('../../../assets/images', true);
const imagePath = (name) => images(name, true);

class FooterWithShowcase extends Component {
	
	state = {
		loadMoreButtonPressed: false,
		moreWork: undefined
	}

	loadMoreWork() {
		// for the footer
		const moreProjects = this.props.projects.map((project, i) => {
			if (i > 3 && i <= 10) {
				const img = imagePath(`./${project.route}.jpg`);
				return (
					<LazyLoad key={i}>
						<Card forfooter linkto={project.route} size="big" title={project.title} description={project.subtitle} pic={img}/>
					</LazyLoad>
				)
			}
		});

		const more = moreProjects.reduce((acc, curr) => {
			if (curr) {
				acc.push(curr)
			}
			return acc
		}, []);

		this.setState({
			moreWork: more,
			loadMoreButtonPressed: true
		})
	}

	// componentDidMount() {
	// 	const renderedFooterProjects = this.props.projects.map((project, i) => {
	// 		if (i < 3) {
	// 			const img = imagePath(`./${project.route}.jpg`);
	// 			return <Card forfooter key={i} linkto={project.route} size="big" title={project.title} description={project.subtitle} pic={img}/>
	// 		}
	// 	});
	//
	// 	this.setState({renderedFooterProjects: renderedFooterProjects})
	// }

	render() {
		return (
			<div className={styles.showcase_wrapper}>
				<h2 className={styles.latest_works_header}>Latest works</h2>
				<div className={styles.inner}>
					<div className={styles.works_grid_wrapper}>
						{this.props.renderedProjects}
						{this.state.loadMoreButtonPressed ? this.state.moreWork : ""}
					</div>
				</div>
				<div className={styles.button_wrapper} style={this.state.loadMoreButtonPressed ? {display: "none"} : {}}>
					<Button onClickHandler={()=>this.loadMoreWork()} customClass={styles.explore_button} text="Show more" />
				</div>
				<SmallFooter bgc="transparent" color="#FFF" />
			</div>
		);
	}
};

export default FooterWithShowcase;


