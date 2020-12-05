/* Main Data Component */

import { List, AnimatedList } from './List';
import listStyles from '../../styles/list.module.css';
const ANIMATED = true;

export default function Data({ tags, type, filters, data }) {
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
			<div className={tags ? listStyles.containerTags : listStyles.container}>
				{ANIMATED ? (
					<AnimatedList filters={filters} data={cleanData} />
				) : (
					<List filters={filters} data={cleanData} />
				)}
			</div>
		);
	} else {
		return <div />;
	}
}

export function AnimatedData({ tags, type, filters, data }) {}
