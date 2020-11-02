import React, { useState } from 'react';
import Layout from '../../components/layout';
import { getWorksData } from '../../lib/work';
import { GetStaticProps } from 'next';
import Data from '../../components/data';

const title = 'Work';

export default function Works({ jobs }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="work">
			<h3 className="text-center text-xl py-4">{title}</h3>
			<Data filters={filters} data={jobs} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const jobs = getWorksData();
	console.log(jobs);
	return {
		props: {
			jobs,
		}
	};
};
