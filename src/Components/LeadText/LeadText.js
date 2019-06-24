import React, { Component } from 'react';
import styles from "./LeadText.module.scss";
import Button from "../Buttons/Button/Button"

class LeadText extends Component {

	componentDidMount() {
		if (this.refs.wrapper) {
			this.refs.wrapper.style.width = `${document.querySelector(`#button${this.props.id}`).offsetWidth + 100}px`
		}
	}

	render() {
		return (
			<div className={`lead_caption_container ${this.props.position ? this.props.position : ""}`}>

				<div id={`caption_box_${this.props.id}`} className="lead_caption_inner">

					{this.props.customerName ?
						<>
							<h2 className="lead-title">
								{this.props.caption.map((piece, index) => {
									return (
										<span className="lead_title_row lead_title_row_small" key={index}>
										{piece.split('').map((x, i) =><span
											key={i}
											className={`letter_pushed_down lead_title_letter customer_reference `}
											style={{color: this.props.textColor}}>{x}</span>)}
										</span>
									)
								})}
							</h2>
							<div className={`lead_description ${styles.customer_label}`} style={{opacity: 0, color: this.props.textColor}}>
								<img className={styles.customer_image} src={this.props.customerImage} alt=""/>
								<div className={styles.customer_details}>
									<span className={styles.customer_name}>{this.props.customerName}</span>
									<span className={styles.customer_detail}>{this.props.customerDetail}<a
										href={this.props.customerLink.href}>{this.props.customerLink.text}</a></span>
								</div>
							</div>
						</> :
						<>
							{/*title*/}
							<h1 className="lead-title">
								{this.props.title.map((piece, index) => {
									return (
										<span className="lead_title_row" key={index}>
									{piece.split('').map((x, i) =><span
										key={i}
										className={`letter_pushed_down lead_title_letter header-row-${index}-letter-group-${i === 0 ? 0 : i % 2 !== 0 ? i-1 : i}`}
										style={{color: this.props.textColor}}>{x}</span>)}
								</span>
									)
								})}
							</h1>
							{/*subtitle*/}
							<p className="lead_description" style={{opacity: 0, color: this.props.textColor}}>
								{this.props.subtitle.split('\n').map((item, i, array) => {
									return <React.Fragment key={i}>
										{i !== 0 ? <br/> : ""}
										{item}
										{i === array.length -1 && this.props.hasCountdown ? <span id="countdown"></span> : ""}
									</React.Fragment>})}
							</p>
							{/*button*/}
							{this.props.buttonText ?
								<div ref="wrapper" className={styles.absolutely}>
									<Button id={`button${this.props.id}`}
											buttonType="animating"
											customClass="mainPageButton"
											linkto={this.props.linkto}
											text={this.props.buttonText} />
								</div>
								: ""}
						</>
					}
				</div>
			</div>
		);
	}
}

export default LeadText;
