/* Main Data Component */

import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import utilStyles from '../styles/utils.module.css';
import AnimatedList from './List';
export default function Data({ type, filters, data }) {
	
	const cleanData = data.filter((project) => {
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
		});

	return (
		<div>
			<AnimatedList data={cleanData}/>
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
