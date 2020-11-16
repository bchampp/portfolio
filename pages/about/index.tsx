import Layout from '../../components/global/Layout';
import aboutStyles from './about.module.css';

const title = 'About Me';

export default function About() {
	return (
		<Layout page="about">
			<div className={aboutStyles.about}>
				{/* Title */}
				<h3>{title}</h3>
				<div>
                    {/* TODO: Make next/image component */}
					<img src="/me.jpg" width={300} height={300} />
                    <p>Hi. I'm Brent. I'm from Mississauga, Ontario.</p>
					<p>
						I'm in between my third and fourth years of my undergrad at Queen's University, where I'm studying Computer Engineering. 
						Despite being primarily focused on Software Engineering, I love getting my hands dirty and working on diverse projects.
						Throughout my undergrad, I've had the opportunity to work on several awesome <a href='/projects'>Projects</a> through 
						Design Teams, work and hobby. While I lean towards involving myself in the technical side of projects,  I enjoy taking the lead
						and helping a team work towards a common goal. 
					</p>
					<p>
						Currently, I'm interning as a Full Stack developer with CaseWare International,
						working remotely on an exciting cloud based project.
					</p>
					<p>
						I'm also in an <a href='https://www.ece.queensu.ca/undergraduate/computer-engineering/four-plus-one.html'>accelerated masters program</a>, 
						which I'll start actively working on in about a year. As of now, my MASc degree will be 
						focused on applying Machine Learning techniques to a variety of industry Robotics and Machine Vision problems.
					</p>
					<p>
						In my free time, I enjoy listening to and making music, reading,
						skateboarding and snowboarding.
					</p>
				</div>
			</div>
		</Layout>
	);
}
