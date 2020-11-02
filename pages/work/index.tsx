import React, { useState } from 'react';
import Layout from '../../components/layout';
import { getWorksData } from '../../lib/work';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from '../../components/search';

const title = 'Work';

export default function Works({ jobs }) {
	const [ filters, setFilters ] = useState([]);

	return (
		<Layout page="work">
			<h3 className="text-center text-xl py-4">{title}</h3>
			<ul className="py-4 m-auto text-center">
				{jobs.map(({ id, startDate, endDate, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/work/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={startDate} /> - {endDate == 'present' ? 'Present' : <Date dateString={endDate}/>}
							</small>
						</li>
					))
                }
			</ul>
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
