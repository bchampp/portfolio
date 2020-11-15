/* Lists/List Component - both static and animated versions*/

import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { ListItem, ExpandedItem } from './Item';

export function List({ type, filters, data }) {
	return (
		<div>
			<ul className="list">
				{data.filter((project) => sortList(project, filters)).map((item, i) => {
					return <ListItem key={i} data={data[i]} />;
				})}
			</ul>
		</div>
	);
}

export function AnimatedList({ data }) {
	const [ focused, setFocused ] = useState(null);

	const handleChange = (index) => {
		setFocused(focused === index ? null : index);
	};

	return (
		<Flipper
			flipKey={focused}
			className="staggered-list-content"
			spring="gentle"
			staggerConfig={{
				card: {
					reverse: focused !== null
				}
			}}
			decisionData={focused}
		>
			<ul className="list">
				{data.map((item, i) => {
					return (
						<li key={item.id}>
							{i === focused ? (
								<ExpandedItem data={data[i]} index={focused} onClick={handleChange} />
							) : (
								<ListItem data={data[i]} key={i} />
							)}
						</li>
					);
				})}
			</ul>
		</Flipper>
	);
}

const sortList = (project, filters) => {
	if (filters.length == 0) {
		return true;
	}
	for (var i = 0; i < filters.length; i++) {
		if (project.tags && project.tags.includes(filters[i])) {
			return true;
		}
	}
	return false;
};