<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../../components/global/Layout';
import Head from 'next/head'
import Content from '../../lib/content';
import Post from '../../components/posts/Post';
=======
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/projects';
import Date from '../../components/date';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161

export default function Project({ postData }) {
  return (
    <Layout page='projects'>
<<<<<<< HEAD
      <Head>
        <title>brent champion | {postData.title}</title>
      </Head>
			<Post data={postData} />

      <div className="text-center">
        <Link href='/projects'><a>&#x2190; Back to Projects</a></Link>
      </div>
    </Layout>
=======
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161
  )
}

export async function getStaticPaths() {
<<<<<<< HEAD
  const paths = new Content('projects').getAllIds();
=======
  // Return a list of possible value for id
  const paths = getAllPostIds()
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
<<<<<<< HEAD
  const postData = await new Content('projects').getData(params.id);
  
=======
  const postData = await getPostData(params.id)
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161
  return {
    props: {
      postData
    }
  }
}