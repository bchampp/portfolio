import Layout from '../../components/layout';
import { getProjectsData } from '../../lib/projects';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';

export default function Projects({ projects }) {
    return (
        <Layout page='projects'>
            <div>
                Project Page
                <ul className={utilStyles.list}>
                    {projects.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`/projects/${id}`}>
                          <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </li>
                    ))}
                </ul>
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