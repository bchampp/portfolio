/* Hero Component */

import { isWidthDown } from '@material-ui/core';
import { useEffect } from 'react';
import styles from '../../styles/hero.module.css';

const Typewriter = require('typewriter-effect');

export default function Hero() {
	useEffect(() => {
		// Hide the broken white square that appears beside the coffee widget
		function hideBrokenCoffeeChild(){
			let widget = document.getElementById('bmc-wbtn').nextSibling;
			widget.parentNode.removeChild(widget); 
		}
		hideBrokenCoffeeChild();
	}, []);

	return (
		<div className={styles.hero}>
			{/* Buy Me A Coffee!! */}
			<script
				data-name="BMC-Widget"
				src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
				data-id="brentchampion"
				data-description=""
				data-message=""
				data-color="#557FFF"
				data-position="right"
				data-x_margin="20"
				data-y_margin="20"
			/>

			<img src="/background.jpg" alt="Mountain Image" />
			<div className={styles.text}>
				<h1>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Hi, I'm Brent. \n")
								.pauseFor(500)
								.typeString(window.innerWidth < 700 && '<br/>')
								.pauseFor(500)
								.typeString('I like to build things.')
								.pauseFor(1000)
								.start();
						}}
					/>
				</h1>
			</div>
		</div>
	);
}
