/* Work Post Page */

import Layout from '../../components/global/Layout';
import Post from '../../components/posts/Post';
import Content from '../../lib/content';

export default function Work({ postData }) {
	return (
		<Layout page="work" id={postData.title}>
			<Post data={postData} />
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
