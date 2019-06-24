import React from "react"
import ReactDOMServer from 'react-dom/server';

export const pageTransition = (params) => {
	const $lead = document.querySelector('.lead');
	const $colorLayer = document.querySelector('#lead__layer--color');
	const $imageLayer = document.querySelector('#lead__layer--image');
	const $videoLayer = document.querySelector('#lead__layer--video');
	const $canvasLayer = document.querySelector('#lead__layer--canvas');

	const changeLead = () => {
		if (params.backgroundColor) {
			$colorLayer.style.transition = "all 0s;";
			$colorLayer.style.backgroundColor = params.backgroundColor;
			$colorLayer.style.opacity = 1;
			$colorLayer.style.zIndex = 1;
			$imageLayer.style.zIndex = "unset";
			$videoLayer.style.zIndex = "unset";
			$canvasLayer.style.zIndex = "unset";
			setTimeout(function () {
				$imageLayer.style.opacity = 0;
				$videoLayer.style.opacity = 0;
				$canvasLayer.style.opacity = 0;
			}, 400)
		} else if (params.backgroundImage) {
			$imageLayer.style.opacity = 1;
			$imageLayer.src = params.backgroundImage;
			$colorLayer.style.zIndex = "unset";
			$imageLayer.style.zIndex = 1;
			$videoLayer.style.zIndex = "unset";
			$canvasLayer.style.zIndex = "unset";
			setTimeout(function () {
				$colorLayer.style.opacity = 0;
				$videoLayer.style.opacity = 0;
				$canvasLayer.style.opacity = 0;
			}, 400)
		} else if (params.backgroundVideo) {
			$colorLayer.style.opacity = 0;
			$imageLayer.style.opacity = 0;
			$videoLayer.style.opacity = 1;
			$videoLayer.src = params.backgroundVideo;
			$canvasLayer.style.opacity = 0;
		} else if (params.backgroundCanvas) {
			$colorLayer.style.backgroundColor = "transparent";
			$colorLayer.style.opacity = 0;
			$imageLayer.style.opacity = 0;
			$videoLayer.style.opacity = 1;
			$canvasLayer.style.opacity = 0;
		}

		$lead.style.transition = "height .7s ease, background .4s ease, opacity .4s"; // visszatérő animáció paraméterei. itt csak azért kell h a .4s deklarálva legyen, hogy ne vesszen el a .7s delkarálása közben
	};

	if (params.needsTransition) {
		setTimeout(function () {
			changeLead()
		}, params.timeout); // <- attól függ h direkt linken lett-e megnyitva vagy sem
	} else {
		changeLead()
	}



	setTimeout(function () {
		$lead.style.height = `${params.height}vh`;
	}, params.timeout + params.scrollDuration + 300);
};

export const makeLeadTransparent = (timeout) => {
	setTimeout(() => {
		// document.querySelector('#lead__layer--color').style.backgroundColor = "transparent";
		document.querySelector('#lead__layer--color').style.opacity = 0;
		document.querySelector('#lead__layer--image').style.opacity = 0;
		document.querySelector('#lead__layer--video').style.opacity = 0;
		document.querySelector('#lead__layer--canvas').style.opacity = 0;
	}, timeout);
};

export const changeHeaderTextColor = (color) => {
	const $header = document.querySelector('#header');
	if ($header.classList.contains("transitioning")) {
		setTimeout(() => $header.className = `transitioning ${color}-text`, 500)
	} else {
		$header.className = `${color}-text`
	}
};

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

export const listenForTop100px = () => {
	let isInTop100px = false;
	const $navigation = document.querySelector('.navigation');

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
	};

	window.addEventListener("mousemove", (e) => {
		const y = e.clientY;
		if (y < 150 && !isInTop100px && window.scrollY > 100) {
			isInTop100px = true;
			onPin()
		} else if (y > 150 && isInTop100px && window.scrollY > 100) {
			isInTop100px = false;
		}
	})
};

export const animateLeadTextUp = (titleId = 6) => {
	Array.from(document.querySelectorAll(`#caption_box_${titleId} .lead_title_row`)).forEach((row, index, array) => {
		const timeoutForSubtitle = index * 500 + 1000;
		const timeoutForNextRow = index * 300; // a két sor felbukkanása közti különbség
		setTimeout(function () {
			for (let i = 0; i < row.children.length; i++) {
				if (i === 0 || i % 2 === 0) {
					const groupedLetters = Array.from(document.querySelectorAll(`#caption_box_${titleId} .header-row-${index}-letter-group-${i}`));
					const timeoutAmount = i * 25; // a kettes blokkok felbukkanása közti különbség
					setTimeout(function() {
						groupedLetters.forEach(x=>x.classList.remove('letter_pushed_down'))
					}, timeoutAmount)
				}
			}
		}, timeoutForNextRow);

		if (index === array.length-1) {
			const button = document.querySelector(`#caption_box_${titleId} .mainPageButton`);
			const description = document.querySelector(`#caption_box_${titleId} .lead_description`);
			setTimeout(function () {
				if (description) {
					description.style.opacity = 1;
					description.style.transform = "translateY(0%)";
				}
			}, timeoutForSubtitle);
			if (button) {
				setTimeout(() => {
					button.classList.add('animatable');
				}, 1500)
			}
		}
	});
};

export const animateLeadTextDown = (titleId = 6) => {
	Array.from(document.querySelectorAll(`#caption_box_${titleId} .lead_title_row`)).forEach((row, index, array) => {
		const timeoutForNextRow = index * 50; // a két sor felbukkanása közti különbség
		setTimeout(function () {
			for (let i = 0; i < row.children.length; i++) {
				if (i === 0 || i % 2 === 0) {
					const groupedLetters = Array.from(document.querySelectorAll(`#caption_box_${titleId} .header-row-${index}-letter-group-${i}`));
					const timeoutAmount = i * 20; // a kettes blokkok felbukkanása közti különbség
					setTimeout(function () {
						groupedLetters.forEach(x=>x.classList.add("letter_pushed_down"))
					}, timeoutAmount)
				}
			}
		}, timeoutForNextRow);

		if (index === array.length-1) {
			const button = document.querySelector(`#caption_box_${titleId} .mainPageButton`);
			const description = document.querySelector(`#caption_box_${titleId} .lead_description`);
			if (description) {
				description.style.opacity = 0;
				description.style.transform = "translateY(50%)";
			}
			if (button) {
				setTimeout(() => {
					button.classList.remove('animatable');
				}, 2000)
			}
		}
	});
};
