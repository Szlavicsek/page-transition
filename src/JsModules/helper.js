import React from "react"
import ReactDOMServer from 'react-dom/server';

export const pageTransition = (params) => {
	const $lead = document.querySelector('.lead');
	const $leadForeground = document.querySelector('.lead_foreground');
	const $canvas = document.querySelector('.content_media_wrapper');

	if (params.backgroundColor) { // ha a háttér egy sima szín
		setTimeout(function () {
			$leadForeground.style.backgroundColor = params.backgroundColor;
			$leadForeground.style.opacity = 1;
			$lead.style.opacity = 1;
			$lead.style.transition = "height .7s ease, background .4s ease, opacity .4s"; // visszatérő animáció paraméterei. itt csak azért kell h a .4s deklarálva legyen, hogy ne vesszen el a .7s delkarálása közben
		}, params.timeout); // <- attól függ h direkt linken lett-e megnyitva vagy sem

		setTimeout(function () {
			$lead.style.backgroundImage = "";
			$lead.style.height = `${params.height}vh`;
		}, 800);

	} else if (params.backgroundImage) {// ha a háttér egy kép
		$lead.style.backgroundImage = `url(${params.backgroundImage})`;
		setTimeout(function () {
			$leadForeground.style.opacity = 1;
			$lead.style.opacity = 1;
			$lead.style.transition = "height .7s ease, background .4s ease, opacity .4s";
		}, params.timeout);

		setTimeout(function () {
			$leadForeground.style.backgroundColor = "transparent";
			$lead.style.height = `${params.height}vh`;
		}, 800)

	} else if (params.backgroundCanvas) {
		setTimeout(function () {
			$canvas.style.opacity = 1;
			$canvas.style.transition = "all .4s";
			$canvas.style.transitionDelay = 2000;
			$lead.style.opacity = 1;
			$lead.style.transition = "height .7s ease, background .4s ease, opacity .4s";
		}, params.timeout);

		setTimeout(function () {
			$lead.style.backgroundImage = "";
			$leadForeground.style.opacity = 1;
			$leadForeground.style.backgroundColor = "transparent";
			$lead.style.height = `${params.height}vh`;
		}, 800)
	}
};

export const changeHeaderTextColor = (color) => {
	const $header = document.querySelector('#header');
	if ($header.classList.contains("transitioning")) {
		setTimeout(() => $header.className = `transitioning ${color}-text`, 500)
	} else {
		$header.className = `${color}-text`
	}
}

export const changeLeadText = (title, subtitle, color, position, hasCountDown = false) => {
	changeHeaderTextColor(color);

	setTimeout(() => {
		const newLeadTitleRows = ReactDOMServer.renderToStaticMarkup(
			<div className={`lead_caption_container ${position ? position : ""}`} style={{visibility: "visible"}}>
				<div id="caption_box_6" className="lead_caption_inner">

					<h1 className="lead-title">
						{title.map((piece, index) => {
							// letter_pushed_down
							return (
								<span className="lead_title_row" key={index}>{piece.split('').map((x, i) => <span key={i} className={`letter_pushed_down lead_title_letter header-row-${index}-letter-group-${i === 0 ? 0 : i % 2 !== 0 ? i-1 : i}`} style={{color: color}}>{x}</span>)}</span>
							)
						})}
					</h1>

					<p className="lead_description" style={{opacity: 0, color: color}}>
						{subtitle.split('\n').map((item, i, array) => {
							return <React.Fragment key={i}>
										{i !== 0 ? <br/> : ""}
										{item}
										{i === array.length -1 && hasCountDown ? <span id="countdown"></span> : ""}
									</React.Fragment>})}
					</p>
				</div>
			</div>
		);

		document.querySelector('.lead_foreground').innerHTML = newLeadTitleRows

	}, 750)
};

export const makeLeadTransparent = (timeout) => {
	console.log(document.querySelector('.lead_foreground').style.backgroundColor)
	//setting stuff for lead
	setTimeout(() => {
		document.querySelector('.lead_foreground').style.backgroundColor = "transparent";
		document.querySelector('.lead_foreground').style.opacity = "1";
		document.querySelector('.lead').style.opacity = "0";
		document.querySelector('.lead').style.transition = "height .7s ease, background .4s ease, opacity .4s"; // visszatérő animáció paraméterei. itt csak azért kell h a .4s deklarálva legyen, hogy ne vesszen el a .7s deklarálása közben
	}, timeout);
};


export const listenForTop100px = () => {
	let isInTop100px = false;
	const $navigation = document.querySelector('.navigation')

	const onPin = () => {
		$navigation.classList.add('pinned');
		$navigation.classList.remove('unpinned');
		$navigation.classList.remove('unfixed');
	};

	const onUnpin = () => {
		$navigation.classList.remove('pinned');
		$navigation.classList.add('unpinned');
		$navigation.classList.remove('unfixed');
	};

	const onUnfix = () => {
		$navigation.classList.add('unfixed');
		$navigation.classList.remove('pinned');
		$navigation.classList.remove('unpinned');
	};

	// window.onscroll = function(e) {
	// 	// 	if (this.scrollY < 5) {
	// 	// 		onUnfix()
	// 	// 	} else if (!$navigation.classList.contains("unpinned")) {
	// 	// 		onUnpin()
	// 	// 	}
	// 	// 	this.oldScroll = this.scrollY;
	// 	// };

	window.onscroll = function(e) {
		if (this.scrollY < 5) {
			onUnfix()
		} else {
			if (this.oldScroll > this.scrollY) { //up
				if (!$navigation.classList.contains("pinned")) {
					onPin()
				}
			} else {
				if (!$navigation.classList.contains("unpinned")) {
					onUnpin()
				}
			}
		}
		this.oldScroll = this.scrollY;
	}

	window.addEventListener("mousemove", (e) => {
		const y = e.clientY;
		if (y < 150 && !isInTop100px && window.scrollY > 100) {
			isInTop100px = true;
			onPin()
		} else if (y > 150 && isInTop100px && window.scrollY > 100) {
			isInTop100px = false;
		}
	})
}
