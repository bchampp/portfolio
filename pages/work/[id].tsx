import Link from 'next/link';

import Layout from '../../components/global/Layout';
import Date from '../../components/global/Date';
import utilStyles from '../../styles/utils.module.css';
import Content from '../../lib/content';

export default function Work({ postData }) {
	return (
		<Layout page="work" id={postData.title}>
			<div className="py-10 px-40 bg-white">
				<article>
					<div className="w-2/5 m-auto py-6">
						<img src={postData.image} />
					</div>
					<div className="flex justify-between">
						<div>{postData.subtitle}</div>
						<div className={utilStyles.lightText}>
							<Date startDate={postData.startDate} endDate={postData.endDate} />
						</div>
					</div>
					<div className="post" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				</article>
			</div>
			<div className="text-center">
				<Link href="/work">
					<a>&#x2190; Back to Work</a>
				</Link>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = new Content('work').getAllIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await new Content('work').getData(params.id);

	return {
		props: {
			postData
		}
	};
}
