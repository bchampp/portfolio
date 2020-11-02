import React, { useState } from 'react';
import { GetStaticProps } from 'next';

// Custom Components
import Layout from '../../components/layout';
import Data from '../../components/data';
import Content from '../../lib/content';

const title = 'Work Experience';

export default function Works({ jobs }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="work">
			<h3 className="text-center text-xl py-6">{title}</h3>
			<Data type={'work'} filters={filters} data={jobs} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const jobs = new Content('work').getAllData();
	
	return {
		props: {
			jobs,
		}
	};
};
