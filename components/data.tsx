/* Main Data Component */

import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import utilStyles from '../styles/utils.module.css';

export default function Data({ filters, data }) {
	return (
		<div>
			<ul className="m-auto text-center overflow-y-auto" style={{ height: '60vh' }}>
				{data
					.filter((project) => {
						if ('tags' in project) {
							if (filters.length == 0) {
								// No filters yet
								return true;
							}

							for (var i = 0; i < filters.length; i++) {
								if (project.tags.includes(filters[i])) {
									return true;
								}
							} 
							return false;
						} else { return true; };
					})
					.map(({ id, startDate, endDate, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/projects/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date startDate={startDate} endDate={endDate} />
							</small>
						</li>
					))}
			</ul>
		</div>
	);
}

// Utility for displaying date
export function Date({ startDate, endDate }) {
	const date = parseISO(startDate);

	if (endDate == 'present') {
		return (<div><time dateTime={startDate}>{format(date, 'LLLL d, yyyy')}</time> - Present</div>);
	} else {
		const date = parseISO(endDate);
		return (
			<div>
				<time dateTime={startDate}>{format(date, 'LLLL d, yyyy')}</time> - <time dateTime={endDate}>{format(date, 'LLLL d, yyyy')}</time>
			</div>
		)
	}	
}
