/* Post Component */

import React, { useEffect, useState} from 'react';
import Link from 'next/link';
import Date from '../global/Date';
import styles from '../../styles/post.module.css';

export default function Post({ data }) {
	const prev = data.type.charAt(0).toUpperCase() + data.type.slice(1);

	return (
		<div className={styles.container}>
			<article>
				<PostTitle data={data} />
				<div className={styles.post} dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
				<div className={styles.back}>
					<Link href={`/${data.type}`}>
						<a>&#x2190; Back to {prev}</a>
					</Link>
				</div>
			</article>
		</div>
	);
}

function PostTitle({ data }) {
	return (
		<div className={styles.title}>
			<h1>{data.title}</h1>
			<div className={styles.subtitle}>
				<h2>{data.subtitle}</h2>
				<h3 className={styles.date}>
					<Date startDate={data.startDate} endDate={data.endDate} />
				</h3>
			</div>
			<div className={styles.source}>
				{data.github && (
					<Link href={`${data.github}`}>
						<a style={{ display: 'flex' }}>
							See the code <img className={styles.github} src="/github.png" width={25} height={25} />
						</a>
					</Link>
				)}
				{data.demo && (
					<Link href={`/${data.demo}`}>
						<a>Demo</a>
					</Link>
				)}
			</div>
			{data.tags && <Tags tags={data.tags} />}
		</div>
	);
}

function Tags({ tags }) {
	return (
		<div className={styles.tags}>
			<h4>Tags: </h4>
			{tags &&
				tags.map((tag) => (
					<div className={styles.tag} key={tag}>
						<a href={`/tags/${tag}`}>{tag}</a>
					</div>
				))}
		</div>
	);
}
