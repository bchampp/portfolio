import Link from 'next/link';
import Layout from '../../components/global/Layout';
import Date from '../../components/global/Date';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Content from '../../lib/content';

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
            <Date startDate={postData.startDate} endDate={postData.endDate} />
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
  const paths = new Content('projects').getAllIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await new Content('projects').getData(params.id);
  
  return {
    props: {
      postData
    }
  }
}