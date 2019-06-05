export const init = () => {
	const $cursor = document.querySelector('#custom-cursor');
	window.addEventListener("mousemove", (e) => {
		const x = e.clientX;
		const y = e.clientY;
		$cursor.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
	});
}

export const refresh = () => {
	const $cursor = document.querySelector('#custom-cursor');
	const $scaleType1elements = Array.from(document.querySelectorAll('a, button'));

	console.log($scaleType1elements)

	$scaleType1elements.forEach(x => {
		x.addEventListener("mouseenter", function(e){
			console.log("entered")
			$cursor.classList.add("custom-cursor_active");
		});
	})

	$scaleType1elements.forEach(x => {
		x.addEventListener("mouseleave", function(e){
			console.log("left")
			$cursor.classList.remove("custom-cursor_active");
		});
	})
}