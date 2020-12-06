<<<<<<< HEAD
import Layout from '../../components/global/Layout';

const title = 'About Me';
const technicalSkills = ['TypeScript/JavaScript', 'C++', 'AWS', 'ReactJS', 'Node.js'];
const personalSkills = ['Leadership', 'Time Management', 'Communication', 'Agile'];

export default function About() {
	return (
		<Layout page="about">
			<div>
				{/* Title */}
				<h1 className="text-center text-xl font-bold py-4">{title}</h1>
				<div className="px-40">
                    {/* TODO: Make next/image component */}
					<img className="rounded-full m-auto py-2" src="/me.jpg" width={300} height={300} />
                    <p className="py-4">Hi. I'm Brent. I'm from Mississauga, Ontario.</p>
					<p>
						I'm in between my third and fourth years of my undergrad at Queen's University, where I'm studying Computer Engineering. 
						Despite being primarily focused on Software Engineering, I love getting my hands dirty and working on diverse projects.
						Throughout my undergrad, I've had the opportunity to work on several awesome <a href='/projects'>Projects</a> through 
						Design Teams, work and hobby. While I lean towards involving myself in the technical side of projects,  I enjoy taking the lead
						and helping a team work towards a common goal. 
					</p>
					<br></br>
					<p>
						Currently, I'm interning as a Full Stack developer with CaseWare International,
						working remotely on an exciting cloud based project.
					</p>
					<br></br>
					<p>
						I'm also in an <a href='https://www.ece.queensu.ca/undergraduate/computer-engineering/four-plus-one.html'>accelerated masters program</a>, 
						which I'll start actively working on in about a year. As of now, my MASc degree will be 
						focused on applying Machine Learning techniques to a variety of industry Robotics and Machine Vision problems.
					</p>
					<br></br>
					<p>
						In my free time, I enjoy listening to and making music, reading,
						skateboarding and snowboarding.
					</p>
					{/* <div className="flex py-4">
						<div style={{ flex: '50%', textAlign: 'center' }}>
							<b>Technical Skills</b>
							<ul>
                                {technicalSkills.map(x => (
                                    <li>- {x}</li>
                                ))}
							</ul>
						</div>
						<div style={{ flex: '50%', textAlign: 'center' }}>
							<b>Personal Skills</b>
                            <ul>
                                {personalSkills.map(x => (
                                    <li>- {x}</li>
                                ))}
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</Layout>
	);
}
=======
import Layout from '../../components/layout';

export default function About(){
    return (
        <Layout page='about'>
            <div>
                About Page
            </div>
        </Layout>
    )
}
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161
