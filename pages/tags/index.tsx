import { GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '../../components/global/Layout';
import React, { useState } from 'react';

import Data from '../../components/lists/Data';
import Content, { getAllTags } from '../../lib/content';
import Tags from '../../components/global/Tags';

const title = 'All Tags';

export default function Index({ tag, work, projects, posts, tags }) {
	const [filters, setFilters] = useState(tag ? tag : []);

	const handleTagClick = (filter) => {
		console.log(filter);
		let currFilters = filters;
		const exists = filters.indexOf(filter);
		if (exists == -1) {
			currFilters = [...filters, filter];
		} else {
			currFilters.splice(exists, 1)
			console.log(currFilters);
		}

		let route = `/tags/${currFilters[0]}`;
		for (var i = 1; i < currFilters.length; i++) {
			const routePostfix = `&${currFilters[i]}`;
			route = route.concat(routePostfix);
		}
		setFilters(currFilters);
		window.history.pushState({}, null, route);
	}

	return (
		<Layout page="tags">
			<h3 className="text-center text-xl py-2">
				{tag ?
					'Tagged | ' + tag.map(tag => ` ${tag}`)
					:
					'All Tags'
				}
			</h3>
			{/* TODO: Cool Animation Here */}
			<Tags tags={tags} filters={filters} handleClick={handleTagClick} />

			<div className="flex justify-evenly">
				<div className="text-center w-1/3">
					<div className="py-6">
						<Link href='/work'><a className="text-l font-bold">Work</a></Link>
					</div>
					<Data type={'work'} filters={filters} data={work} />
				</div>
				<div className="text-center w-1/3">
					<div className="py-6">
						<Link href='/projects'><a className="text-l font-bold">Projects</a></Link>
					</div>
					<Data type={'projects'} filters={filters} data={projects} />
				</div>
				<div className="text-center w-1/3">
					<div className="py-6">
						<Link href='/posts'><a className="text-l font-bold">Posts</a></Link>
					</div>
					<Data type={'posts'} filters={filters} data={posts} />
				</div>
			</div>
			{tag ?
				<div className='text-center hover:underline hover:'>
					<Link href='/tags'>
						<a>
							&larr; All Tags
						</a>
					</Link>
				</div>
				:
				<div className='text-center hover:underline hover'>
					<Link href='/'>
				<a>
					&larr; Home
				</a>
			</Link>
				</div>
			}
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