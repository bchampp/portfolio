/* Layout Component */

import Header from './Header';
import Nav from './Nav'

import pageStyles from '../../styles/page.module.css';

export default function Layout(props) {
  const { page, children, id } = props; // Destructure props

  return (
    <div className={pageStyles.layout}>

      {/* Page Head */}
      <Header page={page} id={id} />

      {/* Nav Bar */}
      <Nav page={page}/>
      
      {/* Page Contents */}
      <main className={page === 'home' ? '' : pageStyles.main}>{children}</main>

    </div>
  )
}
