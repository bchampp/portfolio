import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import { getPostsData } from '../../lib/posts';

export default function Posts({ posts }) {
    return (
        <Layout page='posts'>
            <div>
                Posts
                <ul className={utilStyles.list}>
                    {posts.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
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
    const posts = getPostsData();
    return {
        props: {
            posts,
        }
    }
}