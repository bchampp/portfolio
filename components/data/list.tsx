import React, { useEffect, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Item from './Item';
import ExpandedItem from './ExpandedItem';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Date } from './data';
import Projects from '../../pages/projects';

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
								<Item data={data[i]} index={i} key={i} onClick={handleChange} />
							)}
						</li>
					);
				})}
			</ul>
		</Flipper>
	);
}

export function List({ type, filters, data }) {
	return (
		<div>
			<ul className="list">
				{data
					.filter((project) => sortList(project, filters))
					.map((item, i) => {
						return <ListItem data={data[i]} />;
					})}
			</ul>
		</div>
	);
}

const sortList = (project, filters) => {
	if (filters.length == 0){
		return true;
	}
	for (var i = 0; i < filters.length; i++){
		if (project.tags && project.tags.includes(filters[i])) {
			return true;
		}
	} return false;
}

export function ListItem({ data }) {
	return (
		<Link href={`/${data.type}/${data.id}`}>
			<a style={{ textDecoration: 'none' }} className="listItem">
				<div className="listItemContent">
					<div className="w-full flex flex-wrap justify-between">
						<div className="font-bold float-left">{data.title}</div>
						<div className="text-sm float-right text-gray-700">
							<Date startDate={data.startDate} endDate={data.endDate} />
						</div>
						<div style={{ flexBasis: '100%', height: '0' }} />
						<div className="text-sm px-2">{data.subtitle}</div>
						<div style={{ flexBasis: '100%', height: '0' }} />
						{data.tags && (
							<div className="text-md flex flex-wrap">
								{data.tags.map((tag) => (
									<div className="tag">
										<Link href={`/tags/${tag}`}>
											<a>{tag}</a>
										</Link>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</a>
		</Link>
	);
}
