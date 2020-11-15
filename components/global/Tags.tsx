import React, { useState, useEffect } from 'react';
import Data from '../lists/Data';
import Link from 'next/link';

export default function Tags({ tag, tags, work, projects, posts}) {
	const [filters, setFilters] = useState(tag ? tag : []);


	useEffect(() => {}, [ filters ]);
	
	const handleClick = (filter) => {
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
		<div>
			<h3 className="text-center text-xl py-2">Tags</h3>
			<div className="flex px-48 py-4 justify-evenly flex-wrap">
				{tags &&
					tags.map(
						(tag) =>
							filters.includes(tag.name) ? ( // Selected Tag
								<div key={tag.name} className="px-2 m-auto my-2 rounded bg-black text-white">
									<div
										className="hover:cursor-pointer"
										onClick={() => {
											handleClick(tag.name);
										}}
									>
										{tag.name}
									</div>
								</div>
							) : (
								<div key={tag.name} className="px-2 m-auto my-2 bg-gray-200 rounded hover:bg-gray-500">
									<div
										className="hover:cursor-pointer"
										onClick={() => {
											handleClick(tag.name);
										}}
									>
										{tag.name}
									</div>
								</div>
							)
					)}
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
			</div>
		</div>
	);
}
