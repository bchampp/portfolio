import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Item from "./list/Item";
import ExpandedItem from './list/ExpandedItem';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/data';

export function AnimatedList({data}) {
    const [focused, setFocused] = useState(null);
    
    const handleChange = (index) => {
        setFocused(focused === index ? null : index)
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
                  <ExpandedItem
                    data={data[i]}
                    index={focused}
                    onClick={handleChange}
                  />
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

export function List({type, filters, data}) {
  return (
  <div>
			<ul className="m-auto text-center overflow-y-auto" style={{ height: '60vh' }}>
				{data
					.filter((project) => {
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
						} else { return true; };
					})
					.map(({ id, startDate, endDate, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/${type}/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date startDate={startDate} endDate={endDate} />
							</small>
						</li>
					))}
			</ul>
		</div>
  )
}
