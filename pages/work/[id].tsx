import Link from 'next/link';

import Layout from '../../components/layout'
import { Date } from '../../components/data';
import utilStyles from '../../styles/utils.module.css'
import Content from '../../lib/content';

export default function Work({ postData }) {
  return (
    <Layout page='work' id={postData.title}>
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
        <Link href='/work'><a>&#x2190; Back to Work</a></Link>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = new Content('work').getAllIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await new Content('work').getData(params.id);

  return {
    props: {
      postData
    }
  }
}