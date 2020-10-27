// TODO: fix to be an import
const Typewriter = require('typewriter-effect');

export default function Hero() {
	return (
		<div className="rounded-lg shadow-lg relative">
			<img className="w-full object-cover" src="/images/background.jpg" alt="Mountain Image" />
			<div className="px-6 py-4 m-auto md:flex items-center absolute top-0 left-0 right-0 bottom-0">
				<h2 className="font-semibold text-white tracking-tight text-5xl w-full mb-3 items-center text-center align-middle">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Hi! I'm Brent.\n")
                .pauseFor(1500)
                .typeString("I like building things")
                .pauseFor(3000)
								.deleteAll()
								.start();
						}}
					/>
				</h2>
			</div>
		</div>
	);
}
