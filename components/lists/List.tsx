/* Lists/List Component - both static and animated versions*/

import React, { useEffect, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { ListItem, AnimatedListItem } from './Item';
import listStyles from '../../styles/list.module.css';

export function List({ data }) {
	const listItems = data.map((item, i) => {
		return <ListItem key={i} data={data[i]} />;
	});

	return (
		<div>
			{listItems.length > 0 ? <ul className={listStyles.list}>{listItems}</ul> : <div>Nothing here...yet</div>}
		</div>
	);
}

export function AnimatedList({ data, filters }) {
	const [spring, setSpring] = useState("noWobble");
	const [filteredData, setFilteredData] = useState([]);

	const filterData = () => {
		let cleanData = data.filter((project) => {
			if ('tags' in project) {
				if (filters.length == 0) { return true; }
				for (var i = 0; i < filters.length; i++) {
					return project.tags.includes(filters[i]);
				} return false;
			} else { return true; } // No tags
		});
		console.log("Setting filtered data state and re rendering")
		setFilteredData(cleanData);
	}
	
	useEffect(() => {
		filterData();
	}, [filters])

	return (
		<div>
			<Flipper
				flipKey={`${JSON.stringify(filteredData)}`}
				spring={spring}
				staggerConfig={{
					default: {
						reverse: false,
						speed: 0
					}
				}}
				decisionData={filteredData}
			>
				{filteredData.length > 0 ? (
					<Flipped flipId="list">
						<div>
							<Flipped inverseFlipId="list">
								<ul className={listStyles.list}>
									{[...filteredData]
										.map(item => (
											<AnimatedListItem data={item}/>
										))}
								</ul>
							</Flipped>
						</div>
					</Flipped>
				) : (
						<div>Nothing here...yet</div>
					)}
			</Flipper>
		</div>
	);
}

