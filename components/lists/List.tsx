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

	useEffect(() => {
		setFilteredData(data);
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
						<div style={{color: "var(--font-color)"}}>Nothing here...yet</div>
					)}
			</Flipper>
		</div>
	);
}

