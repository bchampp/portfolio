// TODO: fix to be an import
const Typewriter = require('typewriter-effect');

export default function Hero() {
	return (
		<div className="rounded-lg shadow-lg relative">
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

			<img className="w-full object-cover" src="/background.jpg" alt="Mountain Image" />
			<div className="px-6 py-4 m-auto flex items-center absolute top-0 left-0 right-0 bottom-0">
				<h3 className="font-semibold text-white tracking-tight text-6xl w-full mb-3 items-center text-center align-middle">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Hi, I'm Brent.\n")
								.pauseFor(1000)
								.typeString('I like to build things.')
								.pauseFor(1000)
								.start();
						}}
					/>
				</h3>
			</div>
		</div>
	);
}
