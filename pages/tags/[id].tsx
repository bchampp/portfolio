import Link from 'next/link';
import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllTagIds } from '../../lib/content';

const title = 'brent champion | ';

export default function Tagged({tag, work, projects, posts }) {
  return (
    <Layout page='projects'>
      <Head>
        <title>brent champion | {tag}</title>
      </Head>
      <h2 className="text-center">Tagged | {tag}</h2>
      <div className="text-center">
        <Link href='/tags'><a>&#x2190; All Tags</a></Link>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllTagIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    console.log(params);
    const tag = params.id;
    const jobs = [];
    const projects = [];
    const posts = [];
  
  return {
    props: {
      tag, 
      jobs,
      projects, 
      posts
    }
  }
}