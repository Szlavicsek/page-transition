export const init = () => {
	const $cookieBar = document.querySelector('#cookie');
	const $acceptButton = document.querySelector('#accept-cookie');
	const $declineButton = document.querySelector('#decline-cookie');

	function addCookie() {
		let expires = new Date();
		expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000 * 3650));
		document.cookie = "hasCookie=" + true + ';expires=' + expires.toUTCString();
	}

	function removeCookies() {
		const theCookies = document.cookie.split(';');
		for (let i = 0 ; i < theCookies.length; i++) {
			document.cookie = theCookies[i].split('=')[0] + '=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	}

	function closeCookieLayer(){
		$cookieBar.style.opacity = 0;
		setTimeout(() => {
			$cookieBar.style.display = "none";
		}, 990)
	}
	function openCookieLayer(){
		$cookieBar.style.display = "flex";
		setTimeout(() => {
			$cookieBar.style.opacity = 1;
		}, 50)
	}

	function getCookie(key) {
		const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		return keyValue ? keyValue[2] : null;
	}

	function setCookie(key, value) {
		const expires = new Date();
		expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000 * 3650));
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
	}

	$acceptButton.addEventListener("click",() => {
		addCookie();
		closeCookieLayer();
		// initGA();
	});

	$declineButton.addEventListener("click", () =>{
		removeCookies();
		closeCookieLayer();
	});

	// $('#cookieSettings').click(() =>{
	// 	e.preventDefault();
	// 	openCookieLayer();
	// });

	const hasCookie = JSON.parse(getCookie('hasCookie'));

	setTimeout(function(){

		if (!hasCookie) {
			openCookieLayer();
		} else {
			/*Todo: uncomment for deployment*/
			// initGA();
		}
	},500);
};