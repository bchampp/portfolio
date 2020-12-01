import Link from 'next/link';
import Layout from '../../components/global/Layout';
import Post from '../../components/posts/Post';
import Content from '../../lib/content';

export default function Index({ postData }) {
	return (
		<Layout page="posts" id={postData.title}>
			<Post data={postData} />
			<div className="back">
				<Link href="/posts">
					<a>&#x2190; Back to Posts</a>
				</Link>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = new Content('posts').getAllIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await new Content('posts').getData(params.id);
	return {
		props: {
			postData
		}
	};
}
