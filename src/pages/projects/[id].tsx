/* Project Post Page */

import Head from 'next/head'
import Layout from '../../components/global/Layout';
import Content from '../../lib/content';
import Post from '../../components/posts/Post';

export default function Project({ postData }) {
  return (
    <Layout page='projects' id={postData.title}>
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
  return {
    props: {
      postData
    }
  }
}