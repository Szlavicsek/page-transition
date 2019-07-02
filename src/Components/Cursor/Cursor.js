import React, {Component} from 'react';
import styles from './Cursor.module.scss'
import { TweenMax } from 'gsap/TweenMax'

class Cursor extends Component {
	
	componentDidMount() {
		const follower = this.refs.follower;
		const cursor = this.refs.cursor;
		let posX = 0,
			posY = 0;

		let mouseX = 0,
			mouseY = 0;

		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function() {
				posX += (mouseX - posX) / 9;
				posY += (mouseY - posY) / 9;

				TweenMax.set(follower, {
					css: {
						left: posX - 12,
						top: posY - 12
					}
				});

				TweenMax.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY
					}
				});
			}
		});
		
		window.addEventListener("mousemove", function(e) {
			if (e.target.tagName === "A") {
				const viewportOffset = e.target.getBoundingClientRect();
				mouseX = +viewportOffset.left.toFixed(0) - 30;
				mouseY = +viewportOffset.top.toFixed(0) + 10;
			} else {
				mouseX = e.clientX;
				mouseY = e.clientY;
			}
		});
	}
	
	render() {
		return (
			<>
				<div ref='cursor' id="cursor" className={styles.cursor}></div>
				<div ref='follower' id="cursor-follower" className={styles.cursor_follower}></div>
			</>
		);
	}
}

export default Cursor;