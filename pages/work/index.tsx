import React, { useState } from 'react';
import { GetStaticProps } from 'next';

// Custom Components
import Layout from '../../components/global/Layout';
import Data from '../../components/lists/Data';
import Content from '../../lib/content';

const title = 'Experience';

export default function Works({ jobs }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="work">
			<h3>{title}</h3>
			<Data tags={[]} type={'work'} filters={filters} data={jobs} />
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
