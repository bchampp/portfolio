import Link from "next/link";
import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Date } from "../data";

const createCardFlipId = index => `listItem-${index}`;

const shouldFlip = index => (prev, current) =>
    index === prev || index === current;

export default function ExpandedItem({ data, index, onClick }) {
    return (
        <Flipped
            flipId={createCardFlipId(index)}
            stagger="card"
            onStart={el => {
                setTimeout(() => {
                    el.classList.add("animated-in");
                }, 400);
            }}
        >
            <div className="expandedListItem" onClick={() => onClick(index)}>
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <div className="expandedListItemContent">
                        {data.image &&
                            <>
                                <Flipped
                                    flipId={`avatar-${index}`}
                                    stagger="card-content"
                                    delayUntil={createCardFlipId(index)}
                                >
                                    <div className="avatar avatarExpanded" style={{ backgroundImage: `url(${data.image})`, backgroundPosition: 'center', backgroundSize: '120px 120px' }} />
                                </Flipped>
                            </>
                        }
                        <div>
                            {data.title &&
                                <>
                                    <Flipped
                                        flipId={`description-${index}-${data.title}`}
                                        stagger="card-content"
                                        shouldFlip={shouldFlip(index)}
                                        delayUntil={createCardFlipId(index)}
                                    >
                                        <div className="font-bold text-lg">{data.title}</div>
                                    </Flipped>
                                    <Flipped
                                        flipId={`description-${index}-${data.title}`}
                                        stagger="card-content"
                                        shouldFlip={shouldFlip(index)}
                                        delayUntil={createCardFlipId(index)}
                                    >
                                        <div className="text-sm"><Date startDate={data.startDate} endDate={data.endDate} /></div>
                                    </Flipped>
                                </>
                            }
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
                                                <div className="bg-red-400 px-4 m-2 rounded">
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
                        { (data.type=='project' || data.post) && 
                        <div className="text-center">
                            <Link href={data.type=='project' ? `/projects/${data.id}` : data.post}>
                                <a>Read more &rarr;</a>
                            </Link>
                        </div>
                        }
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
};