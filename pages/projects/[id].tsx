/* Project Post Page */

import Head from 'next/head'
import Content from '../../lib/content';
import Layout from '../../components/global/Layout';
import Post from '../../components/posts/Post';

export default function Project({ postData }) {
  return (
    <Layout page='projects'>
      <Head>
        <title>brent champion | {postData.title.toLowerCase()}</title>
      </Head>
			<Post data={postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = new Content('projects').getAllIds();
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await new Content('projects').getData(params.id);
  return { props: { postData }}
}