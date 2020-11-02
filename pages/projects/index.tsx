import React, { useState } from 'react';
import Layout from '../../components/layout';
import { getProjectsData, getAllProjectTags } from '../../lib/projects';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from '../../components/search';

const title = 'Projects';

export default function Projects({ projects, tags }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="projects">
			<h3 className="text-center text-xl py-4">{title}</h3>
			<div className="w-64 py-6 m-auto">
				<Search setFilter={setFilters} options={tags} />
			</div>
			<ul className="py-4 m-auto text-center">
				{projects
					.filter((project) => {
                        if (filters.length == 0) { // No filters yet
                            return true; 
                        }

						for (var i = 0; i < filters.length; i++) {
							if (project.tags.includes(filters[i])) {
								return true;
							}
						}
					}).map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/projects/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))
                }
			</ul>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const projects = getProjectsData();
	const tags = getAllProjectTags();

	return {
		props: {
			projects,
			tags
		}
	};
};
