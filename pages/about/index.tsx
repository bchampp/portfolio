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
				<div className="text-center px-20">
                    {/* TODO: Make next/image component */}
					<img className="rounded-full m-auto py-2" src="/me.jpg" width={300} height={300} />
                    <p className="py-2">Hi. I'm Brent. I'm from Mississauga, Ontario.</p>
					<p className="py-2">
						I'm in between my third and fourth years as a Computer Engineering student at Queen's
						University. I'm currently on internship at CaseWare international, where I'm working as a Full Stack
						Developer on an exciting project!
					</p>
					<p className="py-2">
						When I'm not working, I enjoy listening to and making music, reading,
						skateboarding and snowboarding.
					</p>
					<div className="flex py-4">
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
					</div>
				</div>
			</div>
		</Layout>
	);
}
