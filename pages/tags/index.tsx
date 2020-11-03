import { GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '../../components/layout';
import Search from '../../components/search';
import React, { useState } from 'react';

import Data from '../../components/data';
import Content, { getAllTags } from '../../lib/content';
import ActiveLink from '../../components/activelink';

const title = 'All Tags';

export default function All({ work, projects, posts, tags }) {
	const [ filters, setFilters ] = useState([]);
	
	const handleTagClick = (filter) => {
		const exists = filters.indexOf(filter);
		if (exists == -1){
			setFilters([...filters, filter]);
		} else {
			console.log(exists);
			setFilters(filters.splice(exists, 1))
		}
	}

	return (
		<Layout page="tags">
			<h3 className="text-center text-xl py-2">{title}</h3>
            {/* TODO: Cool Animation Here */}
            <div className="flex px-48 py-4 justify-evenly flex-wrap">
                {tags && tags.map(tag => 
                    (
                        <div className="px-2 m-auto my-2 bg-gray-200 rounded hover:bg-gray-500">
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
					<Data type={'tags'} filters={filters} data={work} />
				</div>
				<div className="text-center w-1/3">
					<div className="py-6">
					<Link href='/projects'><a className="text-l font-bold">Projects</a></Link>
					</div>
				<Data type={'tags'} filters={filters} data={projects} />
				</div>
				<div className="text-center w-1/3">
					<div className="py-6">
					<Link href='/posts'><a className="text-l font-bold">Posts</a></Link>
					</div>
				<Data type={'tags'} filters={filters} data={posts} />
				</div>
			</div>
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