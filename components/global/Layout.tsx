/* Layout Component */

// Next Imports
import Head from 'next/head'

// Custom Components
import Nav from './Nav'
import Footer from './Footer';

import pageStyles from '../../styles/page.module.css';

// Page Constants
const name = 'brent champion | ';

export default function Layout(props) {
  const { page, children, id } = props; // Destructure props

  const siteTitle = id ? name + id : name + page
  return (
    <div className={pageStyles.layout}>

      {/* Page Head */}
      {/* TODO: Make this dynamic */}
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Brent Champion Portfolio Website"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Nav Bar */}
      <Nav page={page}/>
      
      {/* Page Contents */}
      <main>{children}</main>

      {/* Footer */}
      {/* <Footer /> */}

    </div>
  )
}
