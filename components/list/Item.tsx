import Link from "next/link";
import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Date } from "../data";

const createCardFlipId = index => `listItem-${index}`;

const shouldFlip = index => (prev, current) =>
    index === prev || index === current;

export default function Item({ data, index, onClick }) {
    console.log(data);
    return (
        <Flipped
            flipId={createCardFlipId(index)}
            stagger="card"
            shouldInvert={shouldFlip(index)}
        >
            <div className="listItem" onClick={() => onClick(index)}>
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <div className="listItemContent">
                        <Flipped
                            flipId={`avatar-${index}`}
                            stagger="card-content"
                            shouldFlip={shouldFlip(index)}
                            delayUntil={createCardFlipId(index)}
                        >
                        </Flipped>
                        <div>
                            <Flipped
                                flipId={`description-${index}-${data.title}`}
                                stagger="card-content"
                                shouldFlip={shouldFlip(index)}
                                delayUntil={createCardFlipId(index)}
                            >
                                <Link href={`/work/${data.id}`}>
                                    <a className="font-bold">{data.title}</a>
                                </Link>
                            </Flipped>
                            <Flipped
                                flipId={`description-${index}-${data.title}`}
                                stagger="card-content"
                                shouldFlip={shouldFlip(index)}
                                delayUntil={createCardFlipId(index)}
                            >
                                <div className="text-sm"><Date startDate={data.startDate} endDate={data.endDate} /></div>
                            </Flipped>
                            {data.tags &&
                                <>
                                    <Flipped
                                        flipId={`description-${index}-${data.title}`}
                                        stagger="card-content"
                                        shouldFlip={shouldFlip(index)}
                                        delayUntil={createCardFlipId(index)}
                                    >
                                        <div className="text-md flex justify-around">
                                            {data.tags.slice(0, 2).map(tag =>
                                                <div className="bg-red-200 px-4 m-2 rounded">
                                                    <Link href={`/tags/${tag}`}>
                                                        <a>{tag}</a>
                                                    </Link>
                                                </div>
                                            )
                                            }
                                        </div>
                                    </Flipped>
                                </>
                            }
                        </div>
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
};
