/* All Experience Page */

import { GetStaticProps } from 'next';
import Layout from '../../components/global/Layout';
import Data from '../../components/lists/Data';
import Content from '../../lib/content';

const title = 'Experience';

export default function Works({ jobs }) {
	return (
		<Layout page="work">
			<h3>{title}</h3>
			<Data tags={[]} filters={[]} data={jobs} />
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
