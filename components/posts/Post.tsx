/* Post Component */

import Date from '../global/Date';
import styles from './post.module.css';

export default function Post({ data }) {
	return (
		<div className={styles.container}>
			<article>
				<PostTitle data={data} />
				<div className={styles.post} dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
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
			<div>
				<Tags tags={data.tags} />
			</div>
		</div>
	);
}

function Tags({tags}) {
	return (
		<div className={styles.tags}>
			Tags:
			{ tags && tags.map(tag => 
				<div className={styles.tag}><a>{tag}</a></div>
			)}
		</div>
	)
}