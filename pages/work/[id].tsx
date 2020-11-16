import Link from 'next/link';

import Layout from '../../components/global/Layout';
import Post from '../../components/posts/Post';
import Content from '../../lib/content';

export default function Work({ postData }) {
	return (
		<Layout page="work" id={postData.title}>
			<Post data={postData} />
			<div className="back">
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
