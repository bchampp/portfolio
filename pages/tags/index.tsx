import { GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '../../components/layout';
import Search from '../../components/search';
import React, { useState } from 'react';

import { getAllProjectTags, getProjectsData } from '../../lib/projects';
import Data from '../../components/data';
import { getWorksData } from '../../lib/work';
import { getPostsData } from '../../lib/posts';

const title = 'All Content';

export default function All({ work, projects, posts, tags }) {
	const [ filters, setFilters ] = useState([]);
	
	return (
		<Layout page="tags">
			<h3 className="text-center text-xl py-2">{title}</h3>

			<div className="w-64 py-6 m-auto">
				<Search setFilter={setFilters} options={tags} />
			</div>
			<div className="flex justify-evenly">
				<div className="text-center">
					<div className="py-6">
					<Link href='/work'><a className="text-l font-bold">Work</a></Link>
					</div>
					<Data filters={filters} data={work} />
				</div>
				<div className="text-center">
					<div className="py-6">
					<Link href='/projects'><a className="text-l font-bold">Projects</a></Link>
					</div>
				<Data filters={filters} data={projects} />
				</div>
				<div className="text-center">
					<div className="py-6">
					<Link href='/posts'><a className="text-l font-bold">Posts</a></Link>
					</div>
				<Data filters={filters} data={posts} />
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const tags = getAllProjectTags();
	const work = getWorksData();
	const projects = getProjectsData();
	const posts = getPostsData();

	return {
		props: {
			tags, 
			work, 
			projects, 
			posts,
		}
	};
};
