/* Home Page Component */

// Next Imports
import { GetStaticProps } from 'next'

// Custom Components
import Layout from '../components/layout'
import Hero from '../components/hero';

// Import Utility Functions
import Content from '../lib/content';

export default function Home({ projects, posts }) {
  return (
    <div className='flex bg-white rounded-lg justify-center'>
      
      {/* Buy Me A Coffee!! */}
      <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="brentchampion" data-description="" data-message="" data-color="#5F7FFF" data-position="right" data-x_margin="18" data-y_margin="18"></script>

      {/* Wrap with Layout Component */}
      <Layout page='home'>

        {/* Hero Section */}
        <Hero/>

      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const projects = new Content('projects').getAllData();
  const posts = new Content('posts').getAllData();

  return {
    props: {
      projects,
      posts,
    }
  }
}