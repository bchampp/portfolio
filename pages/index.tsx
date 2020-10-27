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
          <h3>Check out some of my recent Projects!</h3>
          <div>
            <ul>
              <li>
                Test
              </li>
              <li>
                Test 2
              </li>
              <li>
                Test 3
              </li>
            </ul>
          </div>
        </div>

        {/* Posts Section */}
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>Check out some of my recent Posts!</h3>
          <div>
            <ul>
              <li>
                Test
              </li>
              <li>
                Test 2
              </li>
              <li>
                Test 3
              </li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
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