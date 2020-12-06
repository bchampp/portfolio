/* All Tags Page */

import { GetStaticProps } from 'next';

import Layout from '../../components/global/Layout';
import Content, { getAllTags } from '../../lib/content';
import Tags from '../../components/global/Tags';

export default function Index({ tag, tags, work, projects, posts }) {
	return (
		<Layout page="tags">
			<Tags 
				tag={tag}
				tags={tags} 
				work={work}
				projects={projects}
				posts={posts}
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const tags = getAllTags();
	const work = new Content('work').getAllData();
	const projects = new Content('projects').getAllData();
	const posts = new Content('posts').getAllData();

	return {
		props: {
			tags,
			work,
			projects,
			posts,
		}
	};
};