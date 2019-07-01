import React, {Component} from 'react';
import { GlobalContext } from "../../Contexts/GlobalContext";
import AOS from 'aos'
import styles from "./Jobs.module.scss"
import * as help from "../../JsModules/helper";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import FooterWithShowcase from '../../Components/Footers/FooterWithShowcase/FooterWithShowcase'
import CompanyDescription from "../../Components/CompanyDescription/CompanyDescription"

import c1 from '../../assets/images/c1.jpg'
import c2 from '../../assets/images/c2.jpg'
import c3 from '../../assets/images/c3.jpg'
import c4 from '../../assets/images/c4.jpg'
import c5 from '../../assets/images/c5.jpg'
import c6 from '../../assets/images/c6.jpg'
import c7 from '../../assets/images/c7.jpg'
import c8 from '../../assets/images/c8.jpg'
import LeadText from "../../Components/LeadText/LeadText";

class Jobs extends Component {

	carouselImages = [c1, c2, c3, c4, c5, c6, c7, c8];
	activeSlide = 1;

	caption = ["We're always looking for", "junior and senior talents"]

	options = {
		nav: true,
		smartSpeed: 750,
		autoplay: false,
		lazyLoad: true,
		// autoplayTimeout: 5000,
		// autoplayHoverPause: true,
		margin: 50,
		loop: true,
		items: 1,
		dots: false,
		autoWidth: true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				margin: 20,
			},
			// breakpoint from 480 up
			480 : {
				margin: 50,
			}
		}
	};

	state = {
		renderedJobLinks: undefined,
		slides: "",
		canRefreshCarousel: true
	};

	animateCounter() { // animateSliderCounter
		const number = document.querySelector('.owl-item.active').firstElementChild.getAttribute("data-nth")
		if (this.activeSlide !== number) { // can't update state neither here nor in this.handleChange (breaks carousel animation)
			this.activeSlide = number;
			
			document.querySelector('#counter').innerText = this.activeSlide
		}
	}

	handleChange() { // when carousel is moved       handleCarouselChange
		if (document.querySelector('.owl-item.active')) {
			setTimeout(function () {
				const activeItem = document.querySelector('.owl-item.active');
				const carousel_items = Array.from(document.querySelectorAll('.owl-item'));
				carousel_items.forEach((x, i, arr) => {
					if (x === arr[arr.indexOf(activeItem)-1]) {
						x.classList.add(styles.prevActive);
						x.style.width = x.offsetWidth
					} else if (x.classList.contains(styles.prevActive)) {
						x.classList.remove(styles.prevActive)
					}
				});
				this.animateCounter();
			}.bind(this), 50)
		}
	}

	handleRefresh() { // on resize and render       handleCarouselRefresh
		const activeSlide = document.querySelector('.owl-item.active');
		if (activeSlide && activeSlide.closest(".fade-exit") && this.state.canRefreshCarousel) {
			setTimeout(() => {
				this.setState({canRefreshCarousel: false})
			}, 250)
		}
		if (activeSlide && this.state.canRefreshCarousel) {
			const activeItem = document.querySelector('.owl-item.active');
			const carousel_items = Array.from(document.querySelectorAll('.owl-item'));
			carousel_items.forEach((x, i, arr) => {
				if (x === arr[arr.indexOf(activeItem)-1]) {
					x.classList.add(styles.prevActive);
					x.style.height = x.firstElementChild.offsetHeight;
					x.style.width = x.firstElementChild.offsetWidth;
				} else if (x.classList.contains(styles.prevActive)) {
					x.classList.remove(styles.prevActive)
				}
			});
		}
	};

	componentDidMount() {
		if (window.innerWidth < 540) {
			this.caption = ["We're always looking", "for junior and", "senior talents"]
		}
		// help.pageTransition({height: 60, timeout: 500 + this.props.scrollDuration, backgroundColor: "transparent"});
		help.pageTransition({height: 60, timeout: 500, scrollDuration: 0, backgroundColor: "#FFF", needsTransition: this.context.state.leadNeedsTransition});
		help.changeLeadText(this.caption, "Let's do great work together", "black", "left-top");
		setTimeout(() => { help.animateLeadTextUp(6) }, 800); //=> help.changeleadtext
		setTimeout(() => { AOS.refresh() }, 1500); //=> help.pagetransition

		const slides = this.carouselImages.map((x, i)=> {
			// const img = imagePath(`./${x}.jpg`);
			return (
				<div data-nth={i+1} key={i} style={{backgroundColor: "grey"}} className={styles.img_wrapper}>
					{/*<div data-nth={i+1} key={i} style={{backgroundImage: `url(${x})`}} className={styles.img_wrapper}>*/}
					<div className={`item ${styles.owl_item}`} style={{width: "400px"}}></div>
					{/*<img className={`item ${styles.owl_item}`} style={{width: "auto"}} data-srcset={x} src={x} alt=""/>*/}
				</div>
			)
		});

		this.setState({slides: slides})
	}

	render() {
		return (
			<GlobalContext.Consumer>
				{(context) => (
				<div className={styles.wrapper}>
	
					<div className={`${styles.carousel} lead_image`}>
						<div className={styles.page_top}></div>
						<div className={styles.media_wrapper_inner}>
							<OwlCarousel {...this.options} onRefreshed={() => this.handleRefresh()} onTranslate={() => this.handleChange()} className={`owl-theme ${styles.owl_carousel}`} >
								{ this.state.slides }
							</OwlCarousel>
						</div>
						<div className={styles.counter_wrapper}>
							<div className={styles.counter}>
								<span id="counter" className={styles.current_image_index}>1</span>
								<span className={styles.line}></span>
								<span className={styles.total_image_number}>{this.state.slides.length}</span>
							</div>
						</div>
					</div>
	
					<section className={styles.company_description}>
						<CompanyDescription />
					</section>
					<section className={styles.open_positions}>
						<div className={styles.inner}>
							<h1 className={styles.positions_header}>Open Positions</h1>
							<div className={styles.positions_container}>
								{/*{this.context.state.}*/}
								{ context.state.rendered.openPositions }
								<p className={styles.job_p}>Not on the list? Though we’re always interested to meet new talents.
									<br/>
									Send us your CV at <a className={styles.mailto} href="mailto:jobs@melkweg.hu">jobs@melkweg.hu</a> and we'll take a look.</p>
							</div>
						</div>
					</section>
					<FooterWithShowcase />
				</div>
				)}
			</GlobalContext.Consumer>
		);
	}
}

export default Jobs;