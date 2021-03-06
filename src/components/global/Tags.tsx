/* Tagging Component */

import React, { useState, useEffect } from 'react';
import Data from '../lists/Data';
import Link from 'next/link';

import tagStyles from '../../styles/tags.module.css';
import styles from '../../styles/post.module.css';

export default function Tags({ tag, tags, work, projects, posts }) {
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		if (tag) {
			setFilters(tag);
		}
	}, [tag]);

	const handleClick = (filter) => {
		let currFilters = filters;
		const exists = filters.indexOf(filter);
		if (exists == -1) {
			currFilters = [ ...filters, filter ];
			setFilters(currFilters);
		} else {
			currFilters.splice(exists, 1);
			setFilters(currFilters.filter(x => x !== filter));
		}
		let route = `/tags/${currFilters[0] || ''}`;
		for (var i = 1; i < currFilters.length; i++) {
			const routePostfix = `&${currFilters[i]}`;
			route = route.concat(routePostfix);
		}
		window.history.pushState({}, null, route);
	};

	return (
		<div>
			<h3>Tags</h3>
			<div>
				<div className={tagStyles.tags}>
				{tags && tags.map((tag) => (
						<div key={tag.name} className={filters.includes(tag.name) ? tagStyles.active : tagStyles.inactive}>
							<div onClick={() => { handleClick(tag.name); }}>
								{tag.name}
							</div>
						</div>
					))}
				</div>
				<div className={tagStyles.content}>
					{/* TODO: Refactor further */}
					<div className={tagStyles.contentContainer}>
						<div className={tagStyles.contentTitle}>
							<Link href="/work"><a>Work</a></Link>
							</div>
						<Data tags={true} filters={filters} data={work} />
					</div>
					<div className={tagStyles.contentContainer}>
						<div className={tagStyles.contentTitle}>
							<Link href="/projects"><a>Projects</a></Link>
						</div>
						<Data tags={true} filters={filters} data={projects} />
					</div>
					{/* <div className={tagStyles.contentContainer}>
						<div className={tagStyles.contentTitle}>
							<Link href="/posts"><a>Posts</a></Link>
						</div>
						<Data type={'posts'} filters={filters} data={posts} />
					</div> */}
				</div>
				<div className={styles.back} style={{paddingTop: '20px'}}>
				{tag ? 
					<Link href="/tags">
						<a>&larr; All Tags</a>
					</Link>
					: 
					<Link href="/">
						<a>&larr; Home</a>
					</Link>
				}
				</div>
			</div>
		</div>
	);
}
