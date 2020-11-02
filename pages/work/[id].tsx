import Link from 'next/link';
import Layout from '../../components/layout'
import { getAllWorkIds, getWorkData } from '../../lib/work';
import Date from '../../components/date';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Work({ postData }) {
  return (
    <Layout page='work'>
      <Head>
        <title>brent champion | {postData.title}</title>
      </Head>
      <div className='py-10 px-32 bg-white'>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.startDate} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
      <div className="text-center">
        <Link href='/work'><a>&#x2190; Back to Work</a></Link>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getWorkData(params.id)
  return {
    props: {
      postData
    }
  }
}