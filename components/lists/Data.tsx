/* Main Data Component */

import { List, AnimatedList } from './List';
import listStyles from '../../styles/list.module.css';

const ANIMATED = true;

export default function Data({ tags, filters, data }) {
	let cleanData: Array<any>;
	if (data) {
		cleanData = data.filter((project) => {
			if ('tags' in project) {
				if (filters.length == 0) { return true; }
				for (var i = 0; i < filters.length; i++) {
					return project.tags.includes(filters[i]);
				} return false;
			} else { return true; } // No tags
		});

		return (
			<div className={tags ? listStyles.containerTags : listStyles.container}>
				{ ANIMATED ? (
					<AnimatedList filters={filters} data={data} />
				) : (
					<List filters={filters} data={cleanData} />
				)}
			</div>
		);

	} else { return <div />; }
}
