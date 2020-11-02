import React, { useState } from 'react';
import Layout from '../../components/layout';
import { getProjectsData, getAllProjectTags } from '../../lib/projects';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from '../../components/search';
import { GetStaticProps } from 'next';
import Data from '../../components/data';

const title = 'Projects';

export default function Projects({ projects, tags }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="projects">
			<h3 className="text-center text-xl py-2">{title}</h3>
			<div className="w-64 py-6 m-auto">
				<Search setFilter={setFilters} options={tags} />
			</div>
			<Data filters={filters} data={projects} />
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
