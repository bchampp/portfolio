import Link from 'next/link';
import Layout from '../../components/layout'
import { Date } from '../../components/data';
import utilStyles from '../../styles/utils.module.css'
import Content from '../../lib/content';

export default function Post({ postData }) {
  return (
    <Layout page='posts' id={postData.title}>
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
        <Link href='/posts'><a>&#x2190; Back to Posts</a></Link>
      </div>
  </Layout>
  )
}

export async function getStaticPaths() {
  const paths = new Content('posts').getAllIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await new Content('posts').getData(params.id);
  return {
    props: {
      postData
    }
  }
}