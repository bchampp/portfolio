import Link from "next/link";
import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Date } from "./data";
import Item from "./list/Item";
import ExpandedItem from './list/ExpandedItem';

const createCardFlipId = index => `listItem-${index}`;

const shouldFlip = index => (prev, current) =>
  index === prev || index === current;

export default function AnimatedList({data}) {
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
