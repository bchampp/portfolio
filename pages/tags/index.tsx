import { GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '../../components/global/layout';
import Search from '../../components/data/search';
import React, { useState } from 'react';

import Data from '../../components/data/data';
import Content, { getAllTags } from '../../lib/content';
import ActiveLink from '../../components/activelink';

const title = 'All Tags';

export default function Tags({ tag, work, projects, posts, tags }) {
	const [filters, setFilters] = useState(tag ? tag : []);

	const handleTagClick = (filter) => {
		const exists = filters.indexOf(filter);
		if (exists == -1) {
			setFilters([...filters, filter]);
		} else {
			setFilters(filters.splice(exists, 1))
		}
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
			<div className="flex px-48 py-4 justify-evenly flex-wrap">
				{tags && tags.map(tag =>
					(
						<div key={tag.name} className="px-2 m-auto my-2 bg-gray-200 rounded hover:bg-gray-500">
							<div className="hover:cursor-pointer"
								onClick={() => { handleTagClick(tag.name); window.history.pushState({}, null, `/tags/${tag.name.toLowerCase()}`); }}>{tag.name}</div>
						</div>

					)
				)}
			</div>
			<div className="flex justify-evenly">
				<div className="text-center w-1/3">
					<div className="py-6">
						<Link href='/work'><a className="text-l font-bold">Work</a></Link>
					</div>
					<Data type={'work'} style={'tags'} filters={filters} data={work} />
				</div>
				<div className="text-center w-1/3">
					<div className="py-6">
						<Link href='/projects'><a className="text-l font-bold">Projects</a></Link>
					</div>
					<Data type={'projects'} style={'tags'} filters={filters} data={projects} />
				</div>
				<div className="text-center w-1/3">
					<div className="py-6">
						<Link href='/posts'><a className="text-l font-bold">Posts</a></Link>
					</div>
					<Data type={'posts'} style={'tags'} filters={filters} data={posts} />
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