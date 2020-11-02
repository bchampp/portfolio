import Link from 'next/link';
import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Date from '../../components/date';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Project({ postData }) {
  return (
    <Layout page='projects'>
      <Head>
        <title>brent champion | {postData.title}</title>
      </Head>
      <div className='py-10 px-32 bg-white'>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
      <div className="text-center">
        <Link href='/projects'><a>&#x2190; Back to Projects</a></Link>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id)
  return {
    props: {
      postData
    }
  }
}