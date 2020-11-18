import styles from '../../styles/hero.module.css';

// TODO: fix to be an import
const Typewriter = require('typewriter-effect');

export default function Hero() {
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
				data-x_margin="18"
				data-y_margin="18"
			/>

			<img src="/background.jpg" alt="Mountain Image" />
			<div className={styles.text}>
				<h1>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Hi, I'm Brent. \n")
								.pauseFor(500)
								.typeString(window.innerWidth < 700 && '\b<br/>')
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
