/* Lists/List Component - both static and animated versions*/

import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { ListItem, ExpandedItem } from './Item';
import listStyles from '../../styles/list.module.css';

export function List({ filters, data }) {
	const listItems = data.filter((project) => sortList(project, filters)).map((item, i) => {
		return <ListItem key={i} data={data[i]} />;
	});

	return (
		<div>
			{listItems.length > 0 ? <ul className={listStyles.list}>{listItems}</ul> : <div>Nothing here...yet</div>}
		</div>
	);
}

export function AnimatedList({ filters, data }) {
	const listItems = data.filter((project) => sortList(project, filters)).map((item, i) => {
		return (
			<Flipped
				flipId={data[i]}
				key={data[i]}
			>
				<ListItem key={i} data={data[i]} />
			</Flipped>
		);
	});

	return (
		<Flipper
			flipKey={"test"}
			spring="noWobble"
			staggerConfig={{
				default: {
					reverse: false,
					speed: 1
				}
			}}
			decisionData={{}}
		>
			{listItems.length > 0 ? (
				<Flipped flipId="list">
					<div>
						<Flipped inverseFlipId="list">
							<ul className={listStyles.list}>{listItems}</ul>
						</Flipped>
					</div>
				</Flipped>
			) : (
				<div>Nothing here...yet</div>
			)}
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
