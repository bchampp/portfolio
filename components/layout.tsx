/* Layout Component */

// Next Imports
import Head from 'next/head'

// Custom Components
import Nav from './nav';
import Footer from './footer';

// Page Constants
const name = 'brent champion | ';

export default function Layout({ children, page, id }) {
  const siteTitle = id ? name + id : name + page
  return (
    <div className="bg-white cursor-auto">

      {/* Page Head */}
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Brent Champion Portfolio Website"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Nav Bar */}
      <Nav />
      
      {/* Page Contents */}
      <main className={page != 'home' ? "px-6 py-8" : ""}>{children}</main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
