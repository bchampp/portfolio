/* Lists/Item Component - both static and animated versions*/

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Flipped, spring } from "react-flip-toolkit";
import Date from '../global/Date';
import listStyles from '../../styles/list.module.css';

export function ListItem({ data }) {
    return (
        <Link href={`/${data.type}/${data.id}`}>
            <a style={{ textDecoration: 'none' }} className={listStyles.listItem}>
                <div className={listStyles.listItemContent}>
                    <div className={listStyles.contentContainer}>
                        <div className={listStyles.title}>{data.title}</div>
                        <div className={listStyles.date}>
                            <Date startDate={data.startDate} endDate={data.endDate} />
                        </div>
                        <div style={{ flexBasis: '100%', height: '0' }} />
                        <div className={listStyles.subtitle}>{data.subtitle}</div>
                        <div style={{ flexBasis: '100%', height: '0' }} />
                        {data.tags && (
                            <div className={listStyles.tags}>
                                {data.tags.map((tag) => (
                                    <div key={tag} className={listStyles.tag}>
                                        <Link href={`/tags/${tag}`}>
                                            {tag}
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

export function AnimatedListItem({ data }) {
    const flipId = `item-${data.id}`

    const shouldFlip = (prev, current) => {
        if (prev.type !== current.type) {
            return true;
        }
        return false;
    };

    const onElementAppear = (el, index) => {
        spring({
            onUpdate: val => {
                el.style.opacity = val;
            },
            delay: index * 250
        });
    }

    const onExit = (el, index, removeElement) => {
        spring({
            config: { overshootClamping: true },
            onUpdate: (val: number) => {
                el.style.transform = `scale(${1 - val})`;
            },
            delay: index * 150,
            onComplete: removeElement
        });

        return () => {
            el.style.opacity = "";
            removeElement();
        };
    };

    return (
        <Flipped
            flipId={flipId}
            key={flipId}
            onAppear={onElementAppear}
            onExit={onExit}
            stagger={"forward"}
            shouldInvert={shouldFlip}>
            <li>
                <Link href={`/${data.type}/${data.id}`}>
                    <a style={{ textDecoration: 'none' }}>
                        <Flipped inverseFlipId={flipId}>
                            <Flipped
                                flipId={`${flipId}-content`}
                                translate
                                shouldFlip={shouldFlip}
                                delayUntil={flipId}>
                                    <div className={listStyles.listItem}>
                                <div className={listStyles.listItemContent}>
                                    <div className={listStyles.contentContainer}>
                                        <div className={listStyles.title}>{data.title}</div>
                                        <div className={listStyles.date}>
                                            <Date startDate={data.startDate} endDate={data.endDate} />
                                        </div>
                                        <div style={{ flexBasis: '100%', height: '0' }} />
                                        <div className={listStyles.subtitle}>{data.subtitle}</div>
                                        <div style={{ flexBasis: '100%', height: '0' }} />
                                        {data.tags && (
                                            <div className={listStyles.tags}>
                                                {data.tags.map((tag) => (
                                                    <div key={tag} className={listStyles.tag}>
                                                        <Link href={`/tags/${tag}`}>
                                                            {tag}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                </div>
                            </Flipped>
                        </Flipped>
                    </a>
                </Link>
            </li>
        </Flipped>
    )
}

export function ExpandedItem({ data, index, onClick }) {
    const createCardFlipId = index => `listItem-${index}`;

    const shouldFlip = index => (prev, current) =>
        index === prev || index === current;

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
                        {(data.type == 'project' || data.post) &&
                            <div className="text-center">
                                <Link href={data.type == 'project' ? `/projects/${data.id}` : data.post}>
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