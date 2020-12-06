import type { AppProps } from 'next/app';

import '../styles/global.css';

// Export App
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }