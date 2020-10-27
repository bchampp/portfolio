/* Home Page Component */

// Next Imports
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/home/hero.tsx';
import Projects from '../components/home/projects.tsx';
import Posts from '../components/home/posts.tsx';

// Import Utility Functions
import { getProjectsData } from '../lib/projects';
import { getPostsData } from '../lib/posts';

export default function Home({ projects, posts }) {
  return (
    <div className='md:flex bg-white rounded-lg justify-center'>
      <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="brentchampion" data-description="" data-message="" data-color="#5F7FFF" data-position="right" data-x_margin="18" data-y_margin="18"></script>

      <Layout page='home'>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/* Hero Section */}
        <Hero/>

        {/* Projects Section */}
        <Projects projects={projects} />

        {/* Posts Section */}
        <Posts posts={posts} />

      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const projects = getProjectsData();
  const posts = getPostsData();

  return {
    props: {
      projects,
      posts,
    }
  }
}