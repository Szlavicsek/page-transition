export const up = (captionId = 6) => {
	Array.from(document.querySelectorAll(`#caption_box_${captionId} .lead_title_row`)).forEach((row, index, array) => {
		const timeoutForSubtitle = index * 500 + 1000;
		const timeoutForNextRow = index * 300; // a két sor felbukkanása közti különbség
		setTimeout(function () {
			for (let i = 0; i < row.children.length; i++) {
				if (i === 0 || i % 2 === 0) {
					const groupedLetters = Array.from(document.querySelectorAll(`#caption_box_${captionId} .header-row-${index}-letter-group-${i}`));
					const timeoutAmount = i * 25; // a kettes blokkok felbukkanása közti különbség
					setTimeout(function() {
						groupedLetters.forEach(x=>x.classList.remove('letter_pushed_down'))
					}, timeoutAmount)
				}
			}
		}, timeoutForNextRow);

		if (index === array.length-1) {
			const button = document.querySelector(`#caption_box_${captionId} .mainPageButton`);
			const description = document.querySelector(`#caption_box_${captionId} .lead_description`);
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

export const down = (captionId = 6) => {
	Array.from(document.querySelectorAll(`#caption_box_${captionId} .lead_title_row`)).forEach((row, index, array) => {
		const timeoutForNextRow = index * 50; // a két sor felbukkanása közti különbség
		setTimeout(function () {
			for (let i = 0; i < row.children.length; i++) {
				if (i === 0 || i % 2 === 0) {
					const groupedLetters = Array.from(document.querySelectorAll(`#caption_box_${captionId} .header-row-${index}-letter-group-${i}`));
					const timeoutAmount = i * 20; // a kettes blokkok felbukkanása közti különbség
					setTimeout(function () {
						groupedLetters.forEach(x=>x.classList.add("letter_pushed_down"))
					}, timeoutAmount)
				}
			}
		}, timeoutForNextRow);

		if (index === array.length-1) {
			const button = document.querySelector(`#caption_box_${captionId} .mainPageButton`);
			const description = document.querySelector(`#caption_box_${captionId} .lead_description`);
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