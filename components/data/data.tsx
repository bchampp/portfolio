/* Main Data Component */

import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import utilStyles from '../styles/utils.module.css';
import { List, AnimatedList } from './list';

const ANIMATED = false;

export default function Data({ type, filters, data }) {
	let cleanData: Array<any>;
	if (data) {
		cleanData = data.filter((project) => {
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
			} else {
				return true;
			}
		});
		return (
			<div className={"w-4/5 m-auto"}>
				<List type={type} filters={filters} data={cleanData} />
			</div>
		);
	} else {
		cleanData = [];
		return <div />;
	}
}

// Utility for displaying date
export function Date({ startDate, endDate }) {
	const start = format(parseISO(startDate), 'LLLL yyyy');
	let end: Date | String;

	const endArr = endDate.split('-');

	if (endArr.length === 3) {
		const startArr = startDate.split('-');
		if (startArr[0] === endArr[0]) {
			// Same year
			if (startArr[1] === endArr[1]) {
				// Same month
				// Print like 'December 2020'
				return (
					<div>
						<time dateTime={startDate}>{start}</time>
					</div>
				);
			} else {
				end = format(parseISO(endDate), 'LLLL yyyy');
				return (
					<div>
						<time dateTime={startDate}>{start}</time> - <time dateTime={endDate}>{end}</time>
					</div>
				);
			}
		} else {
			end = format(parseISO(endDate), 'LLLL yyyy');

			return (
				<div>
					<time dateTime={startDate}>{start}</time> - <time dateTime={endDate}>{end}</time>
				</div>
			);
		}
	} else {
		// to Present
		return (
			<div>
				<time dateTime={startDate}>{start}</time> - Present
			</div>
		);
	}
}
