import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

// Material UI Components
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Badge,
  IconButton, InputBase,
  MenuItem, Menu,
  Toolbar, Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Global Styles
import styles from './layout.module.css'
import Nav from './nav';
import Footer from './footer';

// Page Constants
const name = 'Brent Champion'
export const siteTitle = 'Portfolio'

export default function Layout({ children, page }) {

  return (
    <div className="bg-white cursor-auto">
      {/* Page Head */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Navigation Bar */}
      <Nav />
      
      <main className={page != 'home' ? "px-6 py-8" : ""}>{children}</main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  )
}
