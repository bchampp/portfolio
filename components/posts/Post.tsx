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
		<div>
			{data.title}
			<br />
			<div className="flex justify-between">
				<div>{data.subtitle}</div>
				<div>
					<Date startDate={data.startDate} endDate={data.endDate} />
				</div>
			</div>
		</div>
	);
}
