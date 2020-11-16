import { GetStaticProps } from 'next';

import Layout from '../../components/global/Layout';
import Data from '../../components/lists/Data';
import Content from '../../lib/content';

const title = "Posts";

export default function Posts({ posts }) {
	return (
		<Layout page="posts">
			<h3>{title}</h3>
			<Data type={'posts'} filters={[]} data={posts} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = new Content('posts').getAllData();

	return {
		props: {
			posts,
		}
	};
};
