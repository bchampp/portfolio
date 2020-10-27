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
import Typewriter from 'typewriter-effect';

export default function Home({ projects, posts }) {
  return (
    <div className='md:flex bg-white rounded-lg justify-center'>
      <Layout page='home'>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/* Hero Section */}
        <div class="rounded-lg shadow-lg relative">
          <img class="w-full object-cover" src="/images/background.jpg" alt="Mountain Image" />
          <div class="px-6 py-4 m-auto md:flex items-center absolute top-0 left-0 right-0 bottom-0">
            <h2 class="font-semibold text-white tracking-tight text-6xl w-full mb-3 items-center text-center align-middle">
              <Typewriter options={{
                strings: ["Hi, I'm Brent!", "I like building things"],
                autoStart: true,
                loop: true,
              }}/>
            </h2>
          </div>
        </div>

        {/* Projects Section */}
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1a202c'}}>
          <h3 class='px-6 py-4 text-white text-2xl mb-3'>Check out some of my recent projects:</h3>
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