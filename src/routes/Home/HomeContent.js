import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import LeadText from "../../Components/LeadText/LeadText"
import SliderProgressButton from "../../Components/Buttons/SliderProgressButton/SliderProgressButton"
import styles from './HomeContent.module.scss'
import sample from "../../assets/media/sample.mp4"
import image from "../../assets/media/96ADC2750551C6E70B719990D9D2C09236856C21.jpg"
import * as help from "../../JsModules/helper";

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
						subtitle={"We are a digital agency"}/>
					<div id="slideMedia0" className={this.props.className} style={{backgroundColor: "#6e00ff", height: "100%"}}></div>
				</div>

				<div id="slideContainer1" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -1}}>
					<LeadText
						id="1"
						title={["Digital?", "That's what we do"]}
						subtitle={"We are a digital agency"}/>
					<div id="slideMedia1" className={this.props.className} style={{overflow: "hidden", height: "0%"}}>
						{/*a videókat be kell rakni egy wrapperbe, mert a 0% height valamiért nem hatja meg*/}
						<video src={sample} className={this.props.className} loop autoPlay></video>
					</div>
				</div>

				<div id="slideContainer2" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -2}}>
					<LeadText
						id="2"
						title={["Digital?", "That's what we do"]}
						subtitle={"We are a digital agency"}/>
					<div id="slideMedia2" className={this.props.className} style={{overflow: "hidden", height: "0%"}}>
						<img className={this.props.className} src={image} alt=""/>
					</div>

				</div>

				<div id="slideContainer3" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -3}}>
					<LeadText
						id="3"
						title={["Digital?", "That's what we do"]}
						subtitle={"We are a digital agency"}/>
					<div id="slideMedia3" className={this.props.className} style={{overflow: "hidden", height: "0%"}}>
						<img className={this.props.className} src={image} alt=""/>
					</div>
				</div>

				<div id="slideContainer4" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -4}}>
					<LeadText
						id="4"
						title={["Digital?", "That's what we do"]}
						subtitle={"We are a digital agency"} />
					<img id="slideMedia4" className={this.props.className} src={image} style={{height: "0%"}} alt=""/>
				</div>

				<div id="slideContainer5" className={`slideContainer ${styles.slide_container}`} style={{zIndex: -5}}>
					<LeadText id="5"
							  title={["Digital?", "That's what we do"]}
							  subtitle={"We are a digital agency"} />
					<img
						id="slideMedia5" className={this.props.className} src={image} style={{height: "0%"}} alt=""/>
				</div>

				{this.props.canRenderSidebar ?
					<div className="slider_button_container">
						{Array.from(document.querySelectorAll(".slideContainer")).map((x, i) => {
							return <SliderProgressButton key={i} id={i} activeSlideId={this.props.currentSlideId} click={(e) => this.loadNext(e)}/>
						})}
					</div>
					: ""}
			</div>
		);
	}
}

export default withRouter(HomeContent);