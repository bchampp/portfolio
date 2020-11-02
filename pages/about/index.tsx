import Layout from '../../components/layout';

export default function About() {
    return (
        <Layout page='about'>
            <div>
                <h1 className="text-center"><b>About Me</b></h1>
                <div>
                    <p>Hi. I'm Brent. I'm from Mississauga, Ontario.</p>
                    <p>I'm currently in between my third and fourth years as a
                    Computer Engineering student at Queen's University.
                    I'm away on internship at CaseWare international, where I'm
                    working as a Full Stack Developer on an exciting project!
                    </p>
                    <p>
                        My personal interests outside of my coursework include listening to
                        and making music, reading, skateboarding and snowboarding.
                    </p>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: '50%', textAlign: 'center' }}>
                            <b>Technical Skills</b>
                            <ul>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Javascript
                                </li>
                            </ul>
                        </div>
                        <div style={{ flex: '50%', textAlign: 'center' }}>
                            <b>Personal Skills</b>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
