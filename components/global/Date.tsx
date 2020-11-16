/* Utility Component for displaying Dates */
import { parseISO, format } from 'date-fns';

export default function Date({ startDate, endDate }) {
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