import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import LeadText from "../../Components/LeadText/LeadText"
import styles from './HomeContent.module.scss'
import sample from "../../assets/media/sample.mp4"
import image from "../../assets/images/c2.jpg"

class HomeContent extends Component {

	render() {
		return (
			<div id="lead__layer--home">

				<div id="slideContainer0" className={`slideContainer ${styles.slide_container}`} style={{zIndex: 0}}>
					<LeadText
						id="0"
						position="left-center"
						textColor="#FFF"
						title={["Digital?", "That's what we do"]}
						buttonText="Explore our work"
						linkto="/works"
						subtitle={"We are a digital agency"}/>
					<div id="slideMedia0" className={this.props.className} style={{backgroundColor: "#6e00ff", height: "100%"}}></div>
				</div>

				<div id="slideContainer1" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -1}}>
					<LeadText
						id="1"
						position="left-center"
						textColor="#FFF"
						title={["Digital?", "That's what we do"]}
						buttonText="Explore our work"
						linkto="/works/video"
						subtitle={"We are a digital agency"}/>
					{/*<div id="slideMedia1" className={this.props.className} style={{overflow: "hidden", height: "0%"}}>*/}
						{/*a videókat be kell rakni egy wrapperbe, mert a 0% height valamiért nem hatja meg*/}
						<video id="slideMedia1" src={sample} className={this.props.className} loop muted style={{overflow: "hidden", height: "0%"}}></video>
					{/*</div>*/}
				</div>

				<div id="slideContainer2" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -2}}>
					<LeadText
						id="2"
						position="left-center"
						textColor="#FFF"
						title={["Digital?", "That's what we do"]}
						buttonText="Explore our work"
						linkto="/works"
						subtitle={"We are a digital agency"}/>
					<div id="slideMedia2" className={this.props.className} style={{overflow: "hidden", height: "0%"}}>
						<img className={this.props.className} src={image} alt=""/>
					</div>

				</div>

				<div id="slideContainer3" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -3}}>
					<LeadText
						id="3"
						position="left-center"
						textColor="#FFF"
						title={["Digital?", "That's what we do"]}
						buttonText="Explore our work"
						linkto="/works"
						subtitle={"We are a digital agency"}/>

					<div id="slideMedia3" className={this.props.className} style={{overflow: "hidden", height: "0%"}}>
						<img className={this.props.className} src={image} alt=""/>
					</div>
				</div>

				<div id="slideContainer4" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -4}}>
					<LeadText
						id="4"
						position="left-center"
						textColor="#FFF"
						title={["Digital?", "That's what we do"]}
						buttonText="Explore our work"
						linkto="/works"
						subtitle={"We are a digital agency"} />
					<img id="slideMedia4" className={this.props.className} src={image} style={{height: "0%"}} alt=""/>
				</div>

				<div id="slideContainer5" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -5}}>
					<LeadText id="5"
							  position="left-center"
							  textColor="#FFF"
							  title={["Digital?", "That's what we do"]}
							  buttonText="Explore our work"
							  linkto="/works"
							  subtitle={"We are a digital agency"} />
					<img
						id="slideMedia5" className={this.props.className} src={image} style={{height: "0%"}} alt=""/>
				</div>


			</div>
		);
	}
}

export default withRouter(HomeContent);