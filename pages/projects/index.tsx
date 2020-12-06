<<<<<<< HEAD
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
			<h3 className="text-center text-xl py-2">{title}</h3>
			<div className="w-64 py-6 m-auto">
				<Search setFilter={setFilters} options={tags} />
			</div>
			<Data type={'projects'} filters={filters} data={projects} />
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
=======
import Layout from '../../components/layout';

export default function Projects(){
    return (
        <Layout page='projects'>
            <div>
                Project Page
            </div>
        </Layout>
    )
}
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161
