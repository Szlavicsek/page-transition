import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import styles from "./Contact.module.scss"
import * as help from "../../JsModules/helper";
import image from "../../assets/media/96ADC2750551C6E70B719990D9D2C09236856C21.jpg";
import office from "../../assets/images/og-services.jpg";
import FooterWithShowcase from '../../Components/Footers/FooterWithShowcase/FooterWithShowcase'
import Button from '../../Components/Buttons/Button/Button'
import AOS from "aos";
import {GlobalContext} from "../../Contexts/GlobalContext";

class Contact extends Component {

	onFocusHandler(e) {
		if (!e.target.previousSibling.classList.contains(styles.focused)) {
			e.target.previousSibling.classList.add(styles.focused);
			e.target.parentElement.classList.add(styles.input_active)
		}
	}

	onBlurHandler(e) {
		if (e.target.value.trim() === "") {
			e.target.previousSibling.classList.remove(styles.focused)
		}
		e.target.parentElement.classList.remove(styles.input_active)
	}

	selectHandler(e) {
		if (!e.target.parentElement.parentElement.classList.contains(styles.focused)) {
			e.target.parentElement.parentElement.classList.add(styles.focused)
		}
	}

	selectboxFocusHandler(e) {
		if (!e.target.classList.contains(styles.selectbox) && document.querySelector(`.${styles.selectbox}`) && document.querySelector(`.${styles.selectbox}`).value.trim() === "Please select one") {
			document.querySelector(`.${styles.selectbox}`).previousElementSibling.classList.remove(styles.focused)
			if (e.target.classList.contains(styles.label) && !e.target.classList.contains(styles.focused)) {
				e.target.classList.add(styles.focused);
			}
		}
	}

	componentDidMount() {
		// help.pageTransition({height: 60, timeout: 500, scrollDuration: this.props.scrollDuration, backgroundImage: image, needsTransition: this.props.leadNeedsTransition});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: 0, backgroundColor: "#FFF", needsTransition: this.context.state.leadNeedsTransition});
		help.changeLeadText(["Every relationship starts", "with a simple hello"], "It might just be the start of something memorable", "black", "left-top");
		setTimeout(() => { help.animateLeadTextUp() }, 800); //=> help.changeleadtext
		setTimeout(() => { AOS.refresh() }, 1500); //=> help.pagetransition
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.page_top}></div>
				<section className={styles.contact_data}>
					<div className={styles.inner}>
						<div className={styles.media_wrapper}>
							<img className={styles.media_image} src={office} alt="vsdvd"/>
						</div>
						<div className={styles.contact_list_wrapper}>

							<div className={styles.contact_box}>
								<div className={styles.contact_box_inner}>
									<h5 className={styles.contact_title}>Visit us</h5>
									<ul className={styles.contact_list}>
										<li className={styles.contact_list_element}>Free parking on site</li>
										<li className={styles.contact_list_element}><a href="#">1036 Pacsirtamező utca 41-43.<br/>Building 50th<br/>Budapest, Hungary</a></li>
										{/*<li className={styles.contact_list_element}>+36 30 242 3588</li>*/}
									</ul>
								</div>
							</div>

							<div className={styles.contact_box}>
								<div className={styles.contact_box_inner}>
									<h5 className={styles.contact_title}>Write us</h5>
									<ul className={styles.contact_list}>
										<li className={styles.contact_list_element}>We reply usually within 24 hours</li>
										<li className={styles.contact_list_element}><a href="mailto:hello@melkweg.hu">hello@melkweg.hu</a></li>
										<li className={styles.contact_list_element}><a href="mailto:jobs@melkweg.hu">jobs@melkweg.hu</a></li>
									</ul>
								</div>
							</div>

							<div className={styles.contact_box}>
								<div className={styles.contact_box_inner}>
									<h5 className={styles.contact_title}>Follow us</h5>
									<ul className={styles.contact_list}>
										<li className={styles.contact_list_element}>Follow our life & work</li>
										<li className={styles.contact_list_element}><a href="https://www.behance.net/">Behance</a></li>
										<li className={styles.contact_list_element}><a href="https://www.dribbble.com">Dribbble</a></li>
										<li className={styles.contact_list_element}><a href="https://www.facebook.com">Facebook</a></li>
										<li className={styles.contact_list_element}><a href="https://www.instagram.com">Instagram</a></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</section>

				<section className={styles.form_section}>
					<div className={styles.form_inner}>
						<h1 className={styles.form_header}>Say hi</h1>
						<div className={styles.form_container}>
							<form action="/" method="post" id={styles.form}>

								<div className={styles.input_wrapper}>
									<label className={styles.label} htmlFor={styles.name}>Your name *</label>
									<input onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} className={styles.input_field} id={styles.name} type="text" required autoComplete="off"/>
								</div>

								<div className={styles.input_wrapper}>
									<label className={styles.label} htmlFor={styles.email}>Your email *</label>
									<input onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} className={styles.input_field} id={styles.email} type="text" required autoComplete="off"/>
								</div>

								<div className={styles.input_wrapper}>
									<span className={styles.label}>What are you looking for? *</span>
									<select className={`${styles.selectbox} selectbox`} onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} required>
										<option onClick={(e)=>this.selectHandler(e)} style={{display: "none"}}>Please select one</option>
										<option onClick={(e)=>this.selectHandler(e)} value="value">option 2</option>
										<option onClick={(e)=>this.selectHandler(e)} value="value">option 3</option>
										<option onClick={(e)=>this.selectHandler(e)} value="value">option 4</option>
									</select>
								</div>

								<div className={styles.input_wrapper}>
									<label className={styles.label} htmlFor={styles.message}>Your message *</label>
									<textarea onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} className={styles.input_field} id={styles.message} type="textarea" rows="10" cols="200" required/>
								</div>

								<div className={styles.accept_policy}>
									<input className={styles.inp_cbx} id="cbx" type="checkbox" style={{display:"none"}} required />
									<label className={styles.cbx} htmlFor="cbx">
										<span></span><span>I accept Melkweg's</span>
									</label>
									<Link className={styles.policy_link} to="/policy">Privacy Policy</Link>
								</div>

								<div className={styles.buttons_wrapper}>
									<Button customClass={styles.submitButton} text="Send Message" type="submit"/>
								</div>

							</form>
						</div>
					</div>
				</section>

				<section className={styles.hello_image_container}>
					{/*<img className={styles.hello_image} src={helloimage} alt="helloimage"/>*/}
				</section>

				<FooterWithShowcase/>
			</div>
		);
	}
}

Contact.contextType = GlobalContext;
export default Contact;