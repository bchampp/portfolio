import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import Layout from '../../components/global/Layout';
import Search from '../../components/lists/SearchBar';
import Data from '../../components/lists/Data';

import Content from '../../lib/content';

const title = 'Projects';

export default function Projects({ projects, tags }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="projects">
			<h3>{title}</h3>
			<Search setFilter={setFilters} options={tags} />
			<Data tags={[]} type={'projects'} filters={filters} data={projects} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const projects = new Content('projects').getAllData();
	const tags = new Content('projects').getAllTags();

	return {
		props: {
			projects,
			tags
		}
	};
};
