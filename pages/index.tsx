/* Home Page Component */

// Next Imports
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import ProjectCards from '../components/projects/ProjectCards'

// Import Utility Functions
import { getProjectsData } from '../lib/projects';
import { getPostsData } from '../lib/posts';

// Import css modules 
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css';

export default function Home({ projects, posts }) {
  return (
    <div className='md:flex bg-white rounded-lg justify-center'>
      <Layout page='home'>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/* Hero Section */}
        <div className={homeStyles.container}>
          <div className={homeStyles.wallpaper}>
            <img src='/images/background.jpg'></img>
          </div>

          {/* Projects Section */}
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3>Check out some of my recent projects!</h3>
            <div>
              <ul className={utilStyles.list}>
                {projects.map(({ id, date, title }) => (
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
            </div>
          </div>

          {/* Posts Section */}
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3>Check out some of my recent posts!</h3>
            <div>
              <ul className={utilStyles.list}>
                {posts.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const projects = getProjectsData();
  const posts = getPostsData();

  // console.log("Statically pre-fetching all projects... ")
  // projects.forEach(project => {
  //   console.log('- ' + project.title);
  // })

  // console.log("Statically pre-fetching all posts... ")
  // posts.forEach(post => {
  //   console.log('- ' + post.title);
  // })

  return {
    props: {
      projects,
      posts,
    }
  }
}