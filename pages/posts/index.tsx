import { GetStaticProps } from 'next';

import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import { getPostsData } from '../../lib/posts';

const title = "Posts";

export default function ({ posts }) {

	return (
		<Layout page="posts">
			<h3 className="text-center text-xl py-4">{title}</h3>

			<ul className="py-4 m-auto text-center">
				{posts
					.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))
                }
			</ul>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = getPostsData();

	return {
		props: {
			posts,
		}
	};
};
