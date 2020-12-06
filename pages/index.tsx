<<<<<<< HEAD
/* Home Page Component */

// Next Imports
import { GetStaticProps } from 'next';

// Custom Components
import Layout from '../components/global/Layout';
import Hero from '../components/global/Hero';

// Import Utility Functions
import Content from '../lib/content';

export default function Home({ projects, posts }) {
	return (
		<div className="flex bg-white rounded-lg justify-center">
			{/* Wrap with Layout Component */}
			<Layout page="home">
		
				{/* Hero Section */}
				<Hero />
			</Layout>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const projects = new Content('projects').getAllData();
	const posts = new Content('posts').getAllData();

	return {
		props: {
			projects,
			posts
		}
	};
};
=======
// Next Imports
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

// Import Utility Functions
import { getSortedPostsData } from '../lib/projects';

// Import css modules 
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout page='home'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Brent. I'm a toronto based software engineer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/projects/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Render website content on build
export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161
