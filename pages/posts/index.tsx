import { GetStaticProps } from 'next';

import Layout from '../../components/layout';
import Data from '../../components/data';
import { getPostsData } from '../../lib/posts';

const title = "Posts";

export default function ({ posts }) {

	return (
		<Layout page="posts">
			<h3 className="text-center text-xl py-4">{title}</h3>

			<Data filters={[]} data={posts} />

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
