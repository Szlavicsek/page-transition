import React, { Component } from 'react';
import { GlobalContext } from "../../../Contexts/GlobalContext";
import styles from "./FooterWithShowcase.module.scss";
import Card from "../../Card/Card";
import SmallFooter from '../SmallFooter/SmallFooter';
import Button from "../../Buttons/Button/Button";

class FooterWithShowcase extends Component {
	
	state = {
		additionalProjects: undefined
	};

	loadMoreWork() {
		// for the footer
		const additionalProjects = this.context.state.rendered.projects.map((x, i) => i >= 3 && i < 9 ? x : null);
		this.setState({additionalProjects: additionalProjects});
		this.refs.buttonWrapper.style.display = "none";
	}

	render() {
		return (
			<div className={styles.showcase_wrapper}>
				<h2 className={styles.latest_works_header}>Latest works</h2>
				<div className={styles.inner}>
					<div className={styles.works_grid_wrapper}>
						{ this.context.state.rendered.projects ? this.context.state.rendered.projects.map((x, i) => i < 3 ? x : null) : [0,0,0].map((x, i) => <Card key={i} size="big" isFetching />)}
						{ this.state.additionalProjects }
					</div>
				</div>
				<div ref="buttonWrapper" className={styles.button_wrapper}>
					<Button onClickHandler={()=>this.loadMoreWork()} customClass={styles.explore_button} text="Show more" />
				</div>
				<SmallFooter bgc="transparent" color="#FFF" />
			</div>
		);
	}
}

FooterWithShowcase.contextType = GlobalContext;
export default FooterWithShowcase;


