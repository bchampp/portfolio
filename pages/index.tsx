/* Home Page Component */

import { GetStaticProps } from 'next';
import Layout from '../components/global/Layout';
import Hero from '../components/global/Hero';
import Content from '../lib/content';

export default function Home({ projects, posts }) {
	return (
		<div className="flex bg-white rounded-lg justify-center">
			{/* Wrap with Layout Component */}
			<Layout page="home">
				{/* Hero Section */}
				<Hero />
			</Layout>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const projects = new Content('projects').getAllData();
	const posts = new Content('posts').getAllData();

	return {
		props: {
			projects,
			posts
		}
	};
};
