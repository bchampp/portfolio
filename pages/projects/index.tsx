import Layout from '../../components/layout';
import { getProjectsData } from '../../lib/projects';

export default function Projects({projects}){
    return (
        <Layout page='projects' style={{backgroundColor: 'white'}}>
            <div>
                Project Page
                {projects &&
                projects.map(project => 
                    <div>
                        {project.id}
                    </div>
                )}
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const projects = getProjectsData();

    return {
        props: {
            projects,
        }
    }
}