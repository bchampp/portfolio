/* Main Data Component */

import { List, AnimatedList } from './List';

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
